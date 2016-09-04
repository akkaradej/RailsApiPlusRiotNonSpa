import 'whatwg-fetch';

import tagFactory from '../tagFactory';

const tag = tagFactory('post-list',`
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Content</th>
      <th colspan="3"></th>
    </tr>
  </thead>

  <tbody>
    <tr each="{ posts }">
      <td>{ title }</td>
      <td>{ content }</td>
      <td><a href="/posts/{ id }">Show</a></td>
      <td><a href="/posts/{ id }/edit">Edit</a></td>
      <td><a href="javascript:;" onclick="{ parent.delPost }">Delete<a></td>
    </tr>
  </tbody>
</table>
`, 
function(opts) {
  this.posts = [];

  this.getPosts = () => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(json => {
        this.posts.push(...json);
        this.update();
      })
      .catch(error => console.log(error)); 
  }

  this.delPost = (event) => {
    const post = event.item;
    fetch('/posts/'+ post.id +'.json', { 
      method: 'DELETE'
    })
    .then(() => {
      this.posts.splice(this.posts.indexOf(post), 1);
      this.update();
    });
  }
  
  this.getPosts();
});

export default tag;