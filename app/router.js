import EmberRouter from '@ember/routing/router';
import config from 'samuelbordo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects', function () {
    this.route('blue-green');
    this.route('e2e');
    this.route('observability');
    this.route('cloud-api');
    this.route('load-testing');
  });
});
