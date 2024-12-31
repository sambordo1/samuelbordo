import { module, test } from 'qunit';
import { setupTest } from 'samuelbordo/tests/helpers';

module('Unit | Route | projects/e2e', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects/e2e');
    assert.ok(route);
  });
});
