import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RecentWorkComponent extends Component {
  @service router;

  projects = [
    {
      title: 'Blue Green Deployment with Cloud Infrastructure',
      screenshot: 'bluegreen.png',
      route: 'projects.blue-green'
    },
    {
      title: 'Implementing E2E Test Suite',
      screenshot: 'e2e.png',
      route: 'projects.e2e'
    },
    {
      title: 'Observability Stack',
      screenshot: 'ollystack.png',
      route: 'projects.observability'
    },
    {
      title: 'Cloud API Development',
      screenshot: 'api.png',
      route: 'projects.cloud-api'
    },
    {
      title: 'Load Testing with Artillery',
      screenshot: 'artillery.png',
      route: 'projects.load-testing'
    },
  ];

  @action
  goToProject(project) {
    // Instead of passing 'title', we pass the route name
    this.router.transitionTo(project.route);
  }
}
