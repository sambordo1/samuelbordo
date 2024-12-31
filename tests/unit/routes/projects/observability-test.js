import { module, test } from 'qunit';
import { setupTest } from 'samuelbordo/tests/helpers';

module('Unit | Route | projects/observability', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects/observability');
    assert.ok(route);
  });
});
