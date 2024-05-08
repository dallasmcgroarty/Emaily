import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const formReviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div style={{ marginBottom: '16px'}}>
        {formReviewFields}
      </div>
      <button
        className='yellow white-text darken-2 btn-flat'
        onClick={onCancel}
      >Back</button>
      <button
        className='green btn-flat right white-text'
        onClick={() => submitSurvey(formValues, history)}
      >Send Survey <i className='material-icons right'>email</i></button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));