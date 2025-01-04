import Route from '@ember/routing/route';

export default class ProjectsObservabilityRoute extends Route {  afterModel() {
    super.afterModel(...arguments);
    window.scrollTo(0, 0); // scroll to top
  }}
