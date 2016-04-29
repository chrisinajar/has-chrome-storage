var test = require('tape');
var poison = require('poison-get');
var proxyquire = require('proxyquire');

test(function (t) {
  t.notOk(require('./'));

  t.notOk(proxyquire('./', {
    'global/window': {
      chrome: {}
    }
  }));

  t.notOk(proxyquire('./', {
    'global/window': poison({}, 'chrome')
  }));

  t.notOk(proxyquire('./', {
    'global/window': {
      chrome: {
        storage: {}
      }
    }
  }));
  t.notOk(proxyquire('./', {
    'global/window': {
      chrome: poison({}, 'storage')
    }
  }));
  t.notOk(proxyquire('./', {
    'global/window': {
      chrome: {
        storage: {
          local: {}
        }
      }
    }
  }));
  t.notOk(proxyquire('./', {
    'global/window': {
      chrome: {
        storage: poison({}, 'local')
      }
    }
  }));
  t.ok(proxyquire('./', {
    'global/window': {
      chrome: {
        storage: {
          local: {
            set: function () {},
            remove: function () {}
          }
        }
      }
    }
  }));
  t.end();
});
