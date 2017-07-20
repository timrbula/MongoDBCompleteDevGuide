const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const meredith = new User({ name: 'Meredith' });

    meredith.save()
      .then(() => {
        // Has meredith been saved successfully?
        assert(!meredith.isNew);
        done();
      });
  });
});