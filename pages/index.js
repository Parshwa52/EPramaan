import React, {
  Component
} from 'react';
import pramaan from '../ethereum/pramaan';
import {
  Form,
  Radio,
  Button,
  Input
} from 'semantic-ui-react'
import Layout from '../components/Layout'
import {
  Link,
  Router
} from '../routes';

class EPramaan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = (e, {
      value
    }) => this.setState({
      value
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    Router.pushRoute(`/${this.state.value}`);
  }

  renderfront() {
    return ( <
      Layout >
      <
      Form onSubmit = {
        this.handleSubmit
      } >
      <
      Form.Field >
      Choose the sform you want:
      <
      /Form.Field> <
      Form.Field >
      <
      Radio label = 'Aadhar Department Form'
      name = 'radioGroup'
      value = 'aadhardept'
      checked = {
        this.state.value === 'aadhardept'
      }
      onChange = {
        this.handleChange
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Radio label = 'PAN Department Form'
      name = 'radioGroup'
      value = 'pandept'
      checked = {
        this.state.value === 'pandept'
      }
      onChange = {
        this.handleChange
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Radio label = 'Passport Department Form'
      name = 'radioGroup'
      value = 'passdept'
      checked = {
        this.state.value === 'passdept'
      }
      onChange = {
        this.handleChange
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Radio label = 'Educational Institute Form'
      name = 'radioGroup'
      value = 'ei'
      checked = {
        this.state.value === 'ei'
      }
      onChange = {
        this.handleChange
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Radio label = 'Bank Form'
      name = 'radioGroup'
      value = 'bank'
      checked = {
        this.state.value === 'bank'
      }
      onChange = {
        this.handleChange
      }
      /> <
      /Form.Field> <
      Button primary onClick = {
        this.handleSubmit
      } > Submit < /Button> <
      /Form> <
      /Layout>
    );
  }
  render() {
    return <div >
      <
      link
    rel = "stylesheet"
    href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /
      > {
        this.renderfront()
      } < /div>;
  }
}
export default EPramaan;
/*export default () => {
  return <h1> Welcome to E-Pramaan </h1>;
};*/
