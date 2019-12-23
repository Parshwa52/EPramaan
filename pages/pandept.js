import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {
  Form,
  Button,
  Input,
  Dropdown,
  Menu,
  Message,
  Segment,
  Checkbox,
  Confirm
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import pramaan from '../ethereum/pramaan';
import web3 from '../ethereum/web3';
export default class PAN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      date: '',
      mname: '',
      lname: '',
      ffname: '',
      fmname: '',
      flname: '',
      pan: '',
      fnameerror: false,
      loading: false,
      lnameerror: false,
      mnameerror: false,
      panerror: false,
      open: false,
      focus: false,
      defcheck: true,
      ffnameerror: false,
      flnameerror: false,
      fmnameerror: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    this.setState({
      loading: true,
      fnameerror: false,
      lnameerror: false,
      mnameerror: false,
      panerror: false,
      open: false,
      focus: false,
      ffnameerror: false,
      flnameerror: false,
      fmnameerror: false
    });
    if (!this.state.fname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        fnameerror: true,
        loading: false
      });
      this.fname.focus()
    } else if (!this.state.mname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mnameerror: true,
        loading: false
      });
      this.mname.focus()
    } else if (!this.state.lname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        lnameerror: true,
        loading: false
      });
      this.lname.focus()
    } else if (!this.state.ffname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        ffnameerror: true,
        loading: false
      });
      this.ffname.focus()
    } else if (!this.state.fmname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        fmnameerror: true,
        loading: false
      });
      this.fmname.focus()
    } else if (!this.state.flname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        flnameerror: true,
        loading: false
      });
      this.flname.focus()
    } else if (!this.state.pan.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/)) {
      this.setState({
        panerror: true,
        loading: false
      });
      this.pan.focus()
    } else {
      this.setState({
        open: true
      });
    }
  }
  handleCancel = () => this.setState({
    open: false,
    loading: false
  })
  handleconf = async (event) => {
    this.setState({
      open: false
    });


    try {
      event.preventDefault();
      let reacth;
      let test;
      test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.ffname + this.state.fmname + this.state.flname + this.state.pan).toString();
      test = test.toLowerCase();
      reacth = crypt.SHA256(test).toString();
      console.log(reacth);
      const accounts = await web3.eth.getAccounts();
      await pramaan.methods.storemap(reacth,this.state.pan).send({
        from: accounts[0]
      });
      this.setState({
        loading: false
      });
    } catch (err) {
      this.setState({
        loading: false,
        open: false
      });
    }
  }

  handleChange = (event, {
    name,
    value
  }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    return ( <
      Segment inverted color = 'blue' >
      <
      Layout >
      <
      h1 > PAN Department Form < /h1> <
      Segment inverted color = "orange" >
      <
      Message attached header = 'Welcome to EPramaan!'
      content = 'Fill out the form below to sign-up for a new PAN account'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form error = {
        this.state.fnameerror || this.state.lnameerror || this.state.mnameerror || this.state.panerror || this.state.ffnameerror || this.state.flnameerror || this.state.fmnameerror
      } >
      <
      br / >

      <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > Name < /label> <
      /Form.Field> <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input fluid label = "First Name"
      ref = {
        (input) => {
          this.fname = input;
        }
      }
      value = {
        this.state.fname
      }
      onChange = {
        event => this.setState({
          fname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input fluid label = "Middle Name"
      value = {
        this.state.mname
      }
      ref = {
        (input) => {
          this.mname = input;
        }
      }
      onChange = {
        event => this.setState({
          mname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input fluid label = "Last Name"
      value = {
        this.state.lname
      }
      ref = {
        (input) => {
          this.lname = input;
        }
      }
      onChange = {
        event => this.setState({
          lname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group>

      {
        this.state.fnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "First Name should contain only characters" / >
          :
          null
      } {
        this.state.mnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Middle Name should contain only characters" / >
          :
          null
      } {
        this.state.lnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Last Name should contain only characters" / >
          :
          null
      }

      <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > DOB < /label> <
      /Form.Field>

      <
      DateInput name = "date"
      fluid placeholder = "DD-MM-YYYY"
      value = {
        this.state.date
      }
      iconPosition = "left"
      onChange = {
        this.handleChange
      }
      /> <
      br / >
      <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > Father 's Name</label> <
      /Form.Field> <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input fluid label = "First Name"
      ref = {
        (input) => {
          this.ffname = input;
        }
      }
      value = {
        this.state.ffname
      }
      onChange = {
        event => this.setState({
          ffname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input fluid label = "Middle Name"
      value = {
        this.state.fmname
      }
      ref = {
        (input) => {
          this.fmname = input;
        }
      }
      onChange = {
        event => this.setState({
          fmname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input fluid label = "Last Name"
      value = {
        this.state.flname
      }
      ref = {
        (input) => {
          this.flname = input;
        }
      }
      onChange = {
        event => this.setState({
          flname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group>

      {
        this.state.ffnameerror ?
          <
          Message error header = "Invalid Content"
        content = "First Name should contain only characters" / >
          :
          null
      } {
        this.state.fmnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Middle Name should contain only characters" / >
          :
          null
      } {
        this.state.flnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Last Name should contain only characters" / >
          :
          null
      }

      <
      br / >
      <
      Form.Field >
      <
      Input fluid label = "PAN Number"
      value = {
        this.state.pan
      }
      ref = {
        (input) => {
          this.pan = input;
        }
      }
      onChange = {
        event => this.setState({
          pan: event.target.value
        })
      }
      /> <
      /Form.Field>

      {
        this.state.panerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "PAN Number should be valid" / >
          :
          null
      } <
      Form.Field >
      <
      Checkbox label = 'I agree that all the information is correct and properly verified.'
      onChange = {
        event => this.setState({
          defcheck: !this.state.defcheck
        })
      }
      /> <
      /Form.Field> <
      Button loading = {
        this.state.loading
      }
      primary onClick = {
        this.handleSubmit
      }
      disabled = {
        !this.state.fname || !this.state.lname || !this.state.mname || !this.state.ffname || !this.state.fmname || !this.state.flname || !this.state.pan || !this.state.date || this.state.defcheck
      } > Submit < /Button> <
      Confirm open = {
        this.state.open
      }
      cancelButton = 'Go Back'
      confirmButton = "Let's do it"
      onCancel = {
        this.handleCancel
      }
      onConfirm = {
        this.handleconf
      }
      />

      <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
