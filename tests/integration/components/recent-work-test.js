import { module, test } from 'qunit';
import { setupRenderingTest } from 'samuelbordo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recent-work', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecentWork />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RecentWork>
        template block text
      </RecentWork>
    `);

    assert.dom().hasText('template block text');
  });
});
