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
  Radio,
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
import gender from '../components/option';
import statesdrop from '../components/statesdrop';
export default class Aadhar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      date: '',
      mname: '',
      lname: '',
      flat: '',
      build: '',
      road: '',
      land: '',
      tvc: '',
      subd: '',
      defcheck: true,
      dist: '',
      stat: '',
      pin: '',
      gen: '',
      pass: '',
      ffname: '',
      fmname: '',
      flname: '',
      mfname: '',
      mmname: '',
      mlname: '',
      fnameerror: false,
      loading: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      passerror: false,
      ffnameerror: false,
      flnameerror: false,
      fmnameerror: false,
      mfnameerror: false,
      mlnameerror: false,
      mmnameerror: false,
      focus: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    //this.setState({road:});
    this.setState({
      loading: true,
      fnameerror: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      passerror: false,
      ffnameerror: false,
      flnameerror: false,
      fmnameerror: false,
      mfnameerror: false,
      mlnameerror: false,
      mmnameerror: false,
      open: false
    });

    console.log(this.state.road.replace(/\s/g, ''));
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
    } else if (this.state.pin.length != 6 || isNaN(this.state.pin) === true) {
      this.setState({
        pinerror: true,
        loading: false
      });
      this.pin.focus()
    } else if (!this.state.ffname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        ffnameerror: true,
        loading: false
      });
      this.fmname.focus()
    } else if (!this.state.fmname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        fmnameerror: true,
        loading: false
      });
      this.flname.focus()
    } else if (!this.state.flname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        flnameerror: true,
        loading: false
      });
      this.ffname.focus()
    } else if (!this.state.mfname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mfnameerror: true,
        loading: false
      });
      this.mlname.focus()
    } else if (!this.state.mmname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mmnameerror: true,
        loading: false
      });
      this.mmname.focus()
    } else if (!this.state.mlname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mlnameerror: true,
        loading: false
      });
      this.mfname.focus()
    } else if (!this.state.pass.match(/^[A-Z]{1}[0-9]{7}/)) {
      this.setState({
        passerror: true,
        loading: false
      });
      this.pass.focus()
    } else {
      this.setState({
        open: true
      });
    }

  }

  handleCancel = () => this.setState({
    open: false,
    loading: false
  });
  handleconf = async (event) => {
    this.setState({
      open: false
    });
    try {
      let reacth;
      let test;
      test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.gen + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.ffname + this.state.fmname + this.state.flname + this.state.mfname + this.state.mmname + this.state.mlname + this.state.pass).toString();
      test = test.toLowerCase();
      console.log(test);
      reacth = crypt.SHA256(test).toString();
      console.log(reacth);
      const accounts = await web3.eth.getAccounts();
      await pramaan.methods.storemap(reacth,this.state.pass).send({
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
      h1 > Passport Department Form < /h1> <
      Segment inverted color = "orange" >
      <
      Message attached header = 'Welcome to EPramaan!'
      content = 'Fill out the form below to sign-up for a new Passport'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form error = {
        this.state.fnameerror || this.state.lnameerror || this.state.mnameerror || this.state.pinerror || this.state.passerror || this.state.ffnameerror || this.state.flnameerror || this.state.fmnameerror || this.state.mfnameerror || this.state.mlnameerror || this.state.mmnameerror
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
      /Form.Field>

      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "First Name"
      fluid ref = {
        (input) => {
          this.fname = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.fname
      }
      onChange = {
        event => this.setState({
          fname: event.target.value
        })
      }
      /> <
      /Form.Field>

      <
      Form.Field >
      <
      Input label = "Middle Name"
      fluid ref = {
        (input) => {
          this.mname = input;
        }
      }
      //labelPosition=""
      value = {
        this.state.mname
      }
      onChange = {
        event => this.setState({
          mname: event.target.value
        })
      }
      /> <
      /Form.Field>

      <
      Form.Field >
      <
      Input label = "Last Name"
      fluid ref = {
        (input) => {
          this.lname = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.lname
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
      } <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > DOB < /label> <
      /Form.Field> <
      DateInput name = "date"
      placeholder = "Date"
      value = {
        this.state.date
      }
      iconPosition = "left"
      onChange = {
        this.handleChange
      }
      fluid /
      >
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
      } > Gender < /label> <
      /Form.Field> <
      Dropdown placeholder = 'Select Gender'
      fluid selection options = {
        gender
      }
      onChange = {
        (e, {
          value
        }) => this.setState({
          gen: value
        })
      }
      />

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
      } > Address < /label> <
      /Form.Field> <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "Flat Number"
      //  labelPosition=""
      value = {
        this.state.flat
      }
      fluid onChange = {
        event => this.setState({
          flat: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Building Name"
      //  labelPosition=""
      value = {
        this.state.build
      }
      fluid onChange = {
        event => this.setState({
          build: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Road Name"
      //  labelPosition=""
      value = {
        this.state.road
      }
      fluid onChange = {
        event => this.setState({
          road: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group> <
      br / >
      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "Land Mark"
      fluid value = {
        this.state.land
      }
      onChange = {
        event => this.setState({
          land: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Town/Village/City"
      fluid value = {
        this.state.tvc
      }
      onChange = {
        event => this.setState({
          tvc: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Sub District"
      fluid value = {
        this.state.subd
      }
      onChange = {
        event => this.setState({
          subd: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group> <
      br / >
      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "District"
      fluid value = {
        this.state.dist
      }
      onChange = {
        event => this.setState({
          dist: event.target.value
        })
      }
      /> <
      /Form.Field>

      <
      Dropdown placeholder = 'Select State'
      fluid selection options = {
        statesdrop
      }
      onChange = {
        (e, {
          value
        }) => this.setState({
          stat: value
        })
      }
      /><br/ >
      <
      Form.Field >
      <
      Input label = "PIN Code"
      value = {
        this.state.pin
      }
      fluid ref = {
        (input) => {
          this.pin = input;
        }
      }
      onChange = {
        event => this.setState({
          pin: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group> {
        this.state.pinerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Pin code should be valid" / >
          :
          null
      } <
      br / >
      <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > Father 's name </label> <
      /Form.Field> <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "First Name"
      //  labelPosition=""
      ref = {
        (input) => {
          this.ffname = input;
        }
      }
      value = {
        this.state.ffname
      }
      fluid onChange = {
        event => this.setState({
          ffname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Middle Name"
      fluid ref = {
        (input) => {
          this.fmname = input;
        }
      }
      value = {
        this.state.fmname
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
      Input label = "Last Name"
      fluid ref = {
        (input) => {
          this.flname = input;
        }
      }
      value = {
        this.state.flname
      }
      onChange = {
        event => this.setState({
          flname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group> {
        this.state.ffnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
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
      } <
      Form.Field >
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > Mother 's name </label> <
      /Form.Field> <
      Form.Group widths = 'equal' >
      <
      Form.Field >

      <
      Input label = "First Name"
      fluid
      //  labelPosition=""
      ref = {
        (input) => {
          this.mfname = input;
        }
      }
      value = {
        this.state.mfname
      }
      onChange = {
        event => this.setState({
          mfname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Middle Name"
      //labelPosition=""
      ref = {
        (input) => {
          this.mmname = input;
        }
      }
      value = {
        this.state.mmname
      }
      onChange = {
        event => this.setState({
          mmname: event.target.value
        })
      }
      fluid /
      >
      <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Last Name"
      fluid
      //  labelPosition=""
      ref = {
        (input) => {
          this.mlname = input;
        }
      }
      value = {
        this.state.mlname
      }
      onChange = {
        event => this.setState({
          mlname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group> {
        this.state.mfnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "First Name should contain only characters" / >
          :
          null
      } {
        this.state.mmnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Middle Name should contain only characters" / >
          :
          null
      } {
        this.state.mlnameerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Last Name should contain only characters" / >
          :
          null
      } <
      Form.Field >
      <
      Input label = "Passport Number"
      //  labelPosition=""
      ref = {
        (input) => {
          this.pass = input;
        }
      }
      value = {
        this.state.pass
      }
      onChange = {
        event => this.setState({
          pass: event.target.value
        })
      }
      /> <
      /Form.Field> {
        this.state.passerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Passport Number should be valid" / >
          :
          null
      } <
      br / >
      <
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
      br / >

      <
      Button loading = {
        this.state.loading
      }
      primary onClick = {
        this.handleSubmit
      }
      disabled = {
        !this.state.fname || !this.state.lname || !this.state.mname || !this.state.ffname || !this.state.fmname || !this.state.flname || !this.state.mfname || !this.state.mmname || !this.state.mlname || !this.state.pass || !this.state.date || !this.state.flat || !this.state.land || !this.state.build || !this.state.road || !this.state.tvc || !this.state.pin || !this.state.stat || !this.state.dist || !this.state.subd || this.state.defcheck || !this.state.gen
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
      /> <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
