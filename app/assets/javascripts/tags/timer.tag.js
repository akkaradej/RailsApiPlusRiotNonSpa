import riot from 'riot';

var tag;

riot.tag('timer',`
<p>
  Seconds Elapsed: { time }
</p>
`,
function(opts) {
  tag = this;

  this.time = opts.start || 0;

  this.tick = () => {
    this.update({ time: ++this.time });
    console.log('tick');
  }

  var timer = setInterval(this.tick, 1000);

  this.on('unmount', () => clearInterval(timer));
});

document.addEventListener('turbolinks:load', function(){
  if (tag) {
    tag.unmount();
    tag = null;
  }
  riot.mount('timer', { start: 0 });
});
