import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApiCallComponent extends Component {
  @tracked authorName = ''; // Tracks the author input from the user
  @tracked apiResponse = ''; // Tracks the raw API response

  @action
  updateAuthorName(event) {
    this.authorName = event.target.value;
  }

  @action
  async callApi() {
    if (!this.authorName.trim()) {
      this.apiResponse = 'Please enter an author name.';
      return;
    }

    try {
      const response = await fetch(
        `https://api.quotestrivia.com/classicAuthorApp?authorName=${encodeURIComponent(this.authorName)}`
      );
      const data = await response.json();
      this.apiResponse = JSON.stringify(data); // Display the raw API response as a string
    } catch (error) {
      this.apiResponse = `Error: ${error.message}`;
    }
  }
}
