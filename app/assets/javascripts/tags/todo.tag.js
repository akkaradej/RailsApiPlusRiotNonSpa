import riot from 'riot/riot';

var tag;

riot.tag('todo',`
<h3>{ opts.title }</h3>

<ul>
  <li each="{ items }">
    <label class="{ completed: done }">
      <input type="checkbox" checked="{ done }" onclick="{ parent.toggle }"> { title }
    </label>
  </li>
</ul>

<form onsubmit="{ add }">
  <input name="input" onkeyup="{ edit }">
  <button disabled="{ !text }">Add #{ items.length + 1 }</button>
</form>
`,
function(opts) {
  tag = this;

  this.items = opts.items || [];
  this.text = '';

  this.edit = (e) => {
    this.text = e.target.value;
  }

  this.add = (e) => {
    if (this.text) {
      this.items.push({ title: this.text });
      this.text = this.input.value = '';
    }
  }

  this.toggle = (e) => {
    var item = e.item;
    item.done = !item.done;
    return true;
  }
});

document.addEventListener('turbolinks:load', function(){
  if (tag) {
    tag.unmount();
    tag = null;
  }
  riot.mount('todo', { title: 'Todo Title' });
});
