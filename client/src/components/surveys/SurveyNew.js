import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showReview: false };

  updateReview() {
    this.setState({ showReview: true });
    return;
  }

  renderContent() {
    if (this.state.showReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showReview: false })} />
    }

    return <SurveyForm onSurveySubmit={this.updateReview.bind(this,true)}/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;