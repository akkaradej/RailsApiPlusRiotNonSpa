import { _ } from 'lodash';

import { User } from '../user';
import tagFactory from '../tagFactory';

const tag = tagFactory('hello',`
<div>
  <h3>Hello ES6</h3>
  lodash: { sample }<br>
  user: { user.say() }
</div>
`, 
function(opts) {
  this.sample = _.map([1, 2, 3], (n) => n * 2);
  this.user = new User();
});

export default tag;