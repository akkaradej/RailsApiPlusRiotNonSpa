import tagFactory from '../tagFactory';

const tag = tagFactory('timer',`
<p>
  Seconds Elapsed: { time }
</p>
`, 
function(opts) {
  this.time = opts.start || 0;

  this.tick = () => {
    this.update({ time: ++this.time });
    console.log('tick');
  }

  const timer = setInterval(this.tick, 1000);

  this.on('unmount', () => clearInterval(timer));
});

export default tag;