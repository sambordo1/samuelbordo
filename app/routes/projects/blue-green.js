import Route from '@ember/routing/route';

export default class ProjectsBlueGreenRoute extends Route {
  afterModel() {
    super.afterModel(...arguments);
    window.scrollTo(0, 0); // scroll to top
  }
}
