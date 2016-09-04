import riot from 'riot';

function tagFactory(tagName, template, ctrl) {
  const tag = { 
    name: tagName,
    ref: null,
    mount(opts = {}) {
      this.unmount();
      riot.mount(this.name, opts);
    },
    unmount() {
      if (this.ref) {
        this.ref.unmount(true);
        this.ref = null;  
      }
    }
  };

  riot.tag(tagName, template, function(opts) {
    tag.ref = this;
    ctrl.bind(this)(opts);
  });

  return tag;
}

export default tagFactory;