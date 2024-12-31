import { module, test } from 'qunit';
import { setupRenderingTest } from 'samuelbordo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | top-section', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TopSection />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TopSection>
        template block text
      </TopSection>
    `);

    assert.dom().hasText('template block text');
  });
});
