import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RecentWorkComponent extends Component {
  @service router;

  projects = [
    {
      title: 'Blue Green Deployment with Cloud Infrastructure',
      screenshot: 'bluegreen.png'
    },
    {
      title: 'Implementing E2E Test Suite',
      screenshot: 'e2e.png'
    },
    {
      title: 'Observability Stack',
      screenshot: 'ollystack.png'
    },
    {
      title: 'Cloud API Development',
      screenshot: 'api.png'
    },
    {
      title: 'Load Testing with Artillery',
      screenshot: 'artillery.png'
    }
  ];

  @action
  goToProject(title) {
    // Example: transition to a dynamic route like /projects/:title
    this.router.transitionTo('projects', title);
  }
}

