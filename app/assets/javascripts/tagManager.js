import helloTag from './tags/hello.tag';
import postListTag from './tags/post-list.tag';
import timerTag from './tags/timer.tag';
import todoTag from './tags/todo.tag';

document.addEventListener('turbolinks:load', function(){
  helloTag.mount();
  postListTag.mount();
  timerTag.mount();
  todoTag.mount({ title: 'Todo Title' });
});
