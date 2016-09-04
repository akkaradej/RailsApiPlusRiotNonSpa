import timerTag from './tags/timer.tag';
import todoTag from './tags/todo.tag';

document.addEventListener('turbolinks:load', function(){
  timerTag.mount();
  todoTag.mount({ title: 'Todo Title' });
});
