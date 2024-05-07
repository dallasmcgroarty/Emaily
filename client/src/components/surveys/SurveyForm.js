import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title'},
  { label: 'Subject Line', name: 'subject'},
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({label, name}, index) => {
      return <Field key={index} component={SurveyField} type="text" label={label} name={name} />
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button className="teal btn-flat right white-text" type="submit">Next
          <i className='material-icons right'>done</i></button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name] && name !== 'emails') {
      errors[name] = `You must provide a ${name}`;
    } else if (!values[name] && name === 'emails') {
      errors[name] = `You must provide ${name}`;
    } else if (values[name] && name === 'emails') {
      errors.emails = validateEmails(values.emails);
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);