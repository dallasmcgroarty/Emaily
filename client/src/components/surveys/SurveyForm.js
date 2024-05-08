import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}, index) => {
      return <Field key={index} component={SurveyField} type="text" label={label} name={name} />
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <span className='yellow darken-2 btn-flat white-text' style={{ marginLeft: '6px'}} onClick={() => this.props.reset()}>Clear</span>
          <button className="teal btn-flat right white-text" type="submit">Next
          <i className='material-icons right'>done</i></button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name] && name !== 'recipients') {
      errors[name] = `You must provide a ${name}`;
    } else if (!values[name] && name === 'recipients') {
      errors[name] = `You must provide ${name}`;
    } else if (values[name] && name === 'recipients') {
      errors.recipients = validateEmails(values.recipients);
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);