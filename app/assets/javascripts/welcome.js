import { _ } from 'lodash';

import { User } from './user';

alert(_.map([1, 2, 3], (n) => n * 2));

var user = new User();
alert(user.say());
