import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {
  Step,
  Label,
  Grid,
  Form,
  Button,
  Input,
  Dropdown,
  Menu,
  Radio,
  Message,
  Segment,
  Confirm
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import pramaan from '../ethereum/pramaan';
import web3 from '../ethereum/web3';
import gender from '../components/option';
import poi from '../components/poi';
import poa from '../components/poa';
import pan16 from '../components/pan16';
import statesdrop from '../components/statesdrop';

class BANK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '', date: '',
      mname: '',
      lname: '',
      flat: '',
      build: '',
      road: '',
      land: '',
      tvc: '',
      subd: '',
      dist: '',
      stat: '',
      pin: '',
      gen: '',
      ffname: '',
      fmname: '',
      flname: '',
      mfname: '',
      mmname: '',
      mlname: '',
      poi: '',
      poa: '',
      pan16: '',
      mob: '',
      aadhar: '',
      pan: '',
      pass: '',
      pass2: '',
      aadhar2: '',
      pan2: '',
      passerror: false,
      aadharerror: false,
      panerror: false,
      fnameerror: false,
      loading: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      moberror: false,
      open: false,
      focus: false,
      defcheck: true,
      ffnameerror: false,
      fmnameerror: false,
      flnameerror: false,
      mfnameerror: false,
      mmnameerror: false,
      test2: '',
      test16: '',
      dispoiver: '',
      dispoaver: '',
      dispan16ver: '',
      mlnameerror: false,
      reacth: '',
      test: '',
      verifystat: '',
      verifystat16: '',
      verifystat2: '',
      aadhar2error: false,
      pass2error: false,
      pan2error: false,
      res: '',
      res2: '',
      icon:'info circle',icon1:'info circle',icon2:'info circle',iconcomp:'',icon1comp:'',icon2comp:''
    };

    this.handleVerPOI = this.handleVerPOI.bind(this);
    this.handleVerPOA = this.handleVerPOA.bind(this);
    this.handleVerPAN16 = this.handleVerPAN16.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    alert("CONGRATULATIONS");
    this.setState({
      open: true
    });
  }

  handleVerPOA = async (event) => {
    this.setState({
      res2: ''
    })
    this.setState({
      iconcomp:false,
      fnameerror: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      passerror: false,
      aadharerror: false,
      panerror: false,
      moberror: false,
      open: false,
      ffnameerror: false,
      fmnameerror: false,
      flnameerror: false,
      mfnameerror: false,
      mmnameerror: false,
      mlnameerror: false,
      pass2error: false,
      aadhar2error: false,
      pan2error: false
    });
    let key
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
    } else if (this.state.mob.length != 10 || isNaN(this.state.mob) === true) {
      this.setState({
        moberror: true,
        loading: false
      });
      this.mob.focus()
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
    } else if (!this.state.mfname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mfnameerror: true,
        loading: false
      });
      this.mfname.focus()
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
      this.mlname.focus()
    } else {
      if (this.state.pass2 === "" && this.state.aadhar2 !== "") {
        if (this.state.aadhar2.length != 12 || isNaN(this.state.aadhar2) === true) {
          this.setState({
            aadhar2error: true,
            loading: false
          });
          this.aadhar2.focus()
        } else {
          this.state.test2 = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.mob + this.state.aadhar2).toString();
          key=this.state.aadhar2
        }
      } else if (this.state.aadhar2 === "" && this.state.pass2 !== "") {
        if (!this.state.pass2.match(/^[A-Z]{1}[0-9]{7}/)) {
          this.setState({
            pass2error: true,
            loading: false
          });
          this.pass2.focus()
        } else {
          this.state.test2 = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.gen + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.ffname + this.state.fmname + this.state.flname + this.state.mfname + this.state.mmname + this.state.mlname + this.state.pass2).toString();
          key=this.state.pass2
        }
      } else {
        alert("Verify address manually");
        this.setState({
          verifystat2: 'abcd',
          dispoaver: 'abcd',iconcomp:'completed'
        });
      }

      if (this.state.test2 !== '') {

        this.setState({
          res2: ''
        })
        try {
          this.state.test2 = this.state.test2.toLowerCase();
          console.log(this.state.test2);
          this.state.reacth = crypt.SHA256(this.state.test2).toString();
          console.log(this.state.reacth);
          const accounts = await web3.eth.getAccounts();
          this.state.res2 = await pramaan.methods.search(key).call({
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
        console.log(this.state.stat)
        console.log(this.state.res)

        if (this.state.res2 === this.state.reacth) {
          alert("successful validation")
          this.setState({
            verifystat2: 'abcd',
            res2: '',
            dispoaver: 'abcd',iconcomp:'completed'
          })
        } else {
          alert("unsuccessful validation")
          this.setState({
            res2: '',
            aadhar2: '',
            pass2: ''
          })
        }
        this.setState({
          test2: ''
        });
      }
    }

  } // end of handleVerPOA

  handleVerPOI = async (event) => {
    let key
    this.setState({
      res: ''
    })

    this.setState({
      icon1comp:false,
      fnameerror: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      passerror: false,
      aadharerror: false,
      panerror: false,
      moberror: false,
      open: false,
      ffnameerror: false,
      fmnameerror: false,
      flnameerror: false,
      mfnameerror: false,
      mmnameerror: false,
      mlnameerror: false,
      pass2error: false,
      aadhar2error: false
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
    } else if (this.state.pin.length != 6 || isNaN(this.state.pin) === true) {
      this.setState({
        pinerror: true,
        loading: false
      });
      this.pin.focus()
    } else if (this.state.mob.length != 10 || isNaN(this.state.mob) === true) {
      this.setState({
        moberror: true,
        loading: false
      });
      this.mob.focus()
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
    } else if (!this.state.mfname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mfnameerror: true,
        loading: false
      });
      this.mfname.focus()
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
      this.mlname.focus()
    } else {
      if (!this.state.pan && !this.state.pass && this.state.poi !== 'other') {
        if (this.state.aadhar.length != 12 || isNaN(this.state.aadhar) === true) {
          this.setState({
            aadharerror: true,
            loading: false
          });
          this.aadhar.focus()
        } else {
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.mob + this.state.aadhar).toString();
          key=this.state.aadhar
        }

      } else if (!this.state.aadhar && !this.state.pass && this.state.poi !== 'other') {
        if (!this.state.pan.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/)) {
          this.setState({
            panerror: true,
            loading: false
          });
          this.pan.focus()
        } else {
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.ffname + this.state.fmname + this.state.flname + this.state.pan).toString();
          key=this.state.pan
        }
      } else if (!this.state.aadhar && !this.state.pan && this.state.poi !== 'other') {
        if (!this.state.pass.match(/^[A-Z]{1}[0-9]{7}/)) {
          this.setState({
            passerror: true,
            loading: false
          });
          this.pass.focus()
        } else {
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.gen + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.ffname + this.state.fmname + this.state.flname + this.state.mfname + this.state.mmname + this.state.mlname + this.state.pass).toString();
          key=this.state.pass
        }
      } else {
        alert("Verify proof of identity manually");
        this.setState({
          verifystat: 'abcd',
          dispoiver: 'abcd',icon1comp:'completed'
        });
      }

      if (this.state.test !== '') {
        this.setState({
          res: ''
        })
        try {
          this.state.test = this.state.test.toLowerCase();
          console.log(this.state.test);
          this.state.reacth = crypt.SHA256(this.state.test).toString();
          console.log(this.state.reacth);
          const accounts = await web3.eth.getAccounts();
          this.state.res = await pramaan.methods.search(key).call({
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
        console.log(this.state.stat)
        console.log(this.state.res)
        if (this.state.res === this.state.reacth) {
          alert("successful validation")
          this.setState({
            verifystat: 'abcd',
            res: '',
            dispoiver: 'abcd',icon1comp:'completed'
          })
        } else {
          alert("unsuccessful validation")
          this.setState({
            res: '',
            aadhar: '',
            pan: '',
            pass: ''
          })
        }
        this.setState({
          test: ''
        });
      }
    }

  } //end of handleVerPOI

  handleVerPAN16 = async (event) => {
    let res16
    this.setState({
      fnameerror: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      passerror: false,
      aadharerror: false,
      panerror: false,
      moberror: false,
      open: false,
      ffnameerror: false,
      fmnameerror: false,
      flnameerror: false,
      mfnameerror: false,
      mmnameerror: false,
      mlnameerror: false,
      pass2error: false,
      aadhar2error: false,
      pan2error: false
    });
    let key
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
    } else if (this.state.mob.length != 10 || isNaN(this.state.mob) === true) {
      this.setState({
        moberror: true,
        loading: false
      });
      this.mob.focus()
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
    } else if (!this.state.mfname.match(/^[a-zA-Z]+$/)) {
      this.setState({
        mfnameerror: true,
        loading: false
      });
      this.mfname.focus()
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
      this.mlname.focus()
    } else {

      if (this.state.pan2 !== "" || this.state.pan16 !== "f16") {
        if (!this.state.pan2.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/)) {
          this.setState({
            pan2error: true,
            loading: false
          });
          this.pan2.focus()
        } else {
          key=this.state.pan2
          this.state.test16 = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.ffname + this.state.fmname + this.state.flname + this.state.pan2).toString();
        }

      } else {
        alert("Fill form 16");
        this.setState({
          verifystat16: 'abcd',
          dispan16ver: 'abcd',icon2comp:'completed'
        })
      }

      if (this.state.test16 !== '') {
        try {
          this.state.test16 = this.state.test16.toLowerCase();
          console.log(this.state.test16);
          this.state.reacth = crypt.SHA256(this.state.test16).toString();
          console.log(this.state.reacth);
          const accounts = await web3.eth.getAccounts();
          res16 = await pramaan.methods.search(key).call({
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
        console.log(this.state.stat)
        console.log("HI")
        console.log(res16)
        console.log("HI")

        if (res16 === this.state.reacth) {
          alert("successful validation")
          this.setState({
            verifystat16: 'abcd',
            dispan16ver: 'abcd',icon2comp:'completed'
          })
        } else {
          alert("unsuccessful validation")
          this.setState({
            pan2: ''
          })
        }
        this.setState({
          test16: ''
        })
      }
    } //end of else

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

      <br/>
      <center>
      <
      div style={{color:'#E0FFFF',fontSize:'35px', FontFamily:'Arial'}} > Bank Form < /div>
      </center>

      <br/>

      <Step.Group widths={3}>
        <Step active completed={this.state.icon1comp==='completed'} active icon={this.state.icon1} title='Identity Verification' description='Verfiy your identity ' />
        <Step active  completed={this.state.iconcomp==='completed'} icon={this.state.icon} title='Address Verification' description='verify your Address' />
        <Step
          active
          completed={this.state.icon2comp==='completed'}
          icon={this.state.icon2}
          title='PAN/Form 16'
          description='verify PAN/Form 16 & confirm'
        />
      </Step.Group>


       <
      Segment inverted color = "teal" >
      <
      Form error = {
        this.state.fnameerror || this.state.lnameerror || this.state.mnameerror || this.state.pinerror || this.state.moberror || this.state.anoerror || this.state.ffnameerror || this.state.fmnameerror || this.state.flnameerror || this.state.mfnameerror || this.state.mmnameerror || this.state.mlnameerror || this.state.aadharerror || this.state.panerror || this.state.passerror || this.state.aadhar2error || this.state.pass2error || this.state.pan2error
      } >


      <Grid divided='vertically'>
   <Grid.Row columns={2}>
     <Grid.Column>
     <Segment inverted color='grey' padded>
     <center>
      <Label attached="top" color='black' style = {
         {
           fontSize: '20px'
         }
       } >
           Personal Details
         </Label>
         </center>
         <br/><br/><br/>

    <Label as='a' color='black' style = {
      {
        fontSize: '15px'
      }
        } ribbon>
          Username
            </Label>

      <br/><br/>

      <
      Form.Field >
      <
      Input label = "First Name"
      ref = {
        (input) => {
          this.fname = input;
        }
      }

      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      //  labelPosition=""
      value = {
        this.state.fname
      }
      onChange = {
        event => this.setState({
          fname: event.target.value
        })
      }
      fluid /
      >
      <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Middle Name"
      ref = {
        (input) => {
          this.mname = input;
        }
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      //labelPosition=""
      value = {
        this.state.mname
      }
      fluid onChange = {
        event => this.setState({
          mname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Last Name"
      fluid ref = {
        (input) => {
          this.lname = input;
        }
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
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
      /Form.Field>

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

      <Label color='black' style = {
         {
           fontSize: '15px'
         }
       } ribbon >
        DOB
         </Label>

         <br/><br/>

       <
      DateInput name = "date"
      placeholder = "Date"
      value = {
        this.state.date
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      iconPosition = "left"
      onChange = {
        this.handleChange
      }
      />

      <
      br / >
      <Label color='black' style = {
         {
           fontSize: '15px'
         }
       } ribbon >
        Gender
         </Label>

         <br/><br/>
          <
      Dropdown placeholder = 'Select Gender'
      fluid selection options = {
        gender
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        (e, {
          value
        }) => this.setState({
          gen: value
        })
      }
      />

      </Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment inverted color='grey'>

      <
      br / >

      <center>
      <Label color='black' attached="top" style = {
         {
           fontSize: '20px'
         }
       }  >
        Address Information
         </Label>
         </center>
         <br/><br/>

    <Label as='a' color='black' style = {
      {
          fontSize: '15px'
      }
        } ribbon>
        Address
      </Label>
      <Label basic color='red' pointing='left'>
        Kindly enter your details as per written in Aadhar Card!
      </Label>

      <br/><br/>

      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input fluid label = "Flat Number"
      //  labelPosition=""
      value = {
        this.state.flat
      }

      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          flat: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input fluid label = "Building Name"
      //  labelPosition=""
      value = {
        this.state.build
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          build: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>

      <Form.Group widths = 'equal' >
       <Form.Field >
      <
      Input fluid label = "Road Name"
      //  labelPosition=""
      value = {
        this.state.road
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          road: event.target.value
        })
      }
      /> <
      /Form.Field>
      <br/>
      <
      Form.Field >
      <
      Input label = "Land Mark"
      fluid
      //  labelPosition=""
      value = {
        this.state.land
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          land: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>


        <Form.Group widths = 'equal' >

       <
      Form.Field >
      <
      Input label = "Town/Village/City"
      fluid value = {
        this.state.tvc
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
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
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          subd: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>


        <Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "District"
      fluid value = {
        this.state.dist
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
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
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        (e, {
          value
        }) => this.setState({
          stat: value
        })
      }
      />

      <
      Form.Field >
      <
      Input label = "PIN Code"
      ref = {
        (input) => {
          this.pin = input;
        }
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      value = {
        this.state.pin
      }
      fluid onChange = {
        event => this.setState({
          pin: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>

      {
        this.state.pinerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Pin code should be valid" / >
          :
          null
      } <
      br / >

      <Label as='a' color='black' style = {
        {
            fontSize: '15px'
        }
          } ribbon>
        Mobile Number
        </Label>

        <br/><br/>

      <
      Form.Field >
      <
      Input label = "Number"
      value = {
        this.state.mob
      }
      ref = {
        (input) => {
          this.mob = input;
        }
      }
      disabled={this.state.dispoiver==='abcd' || this.state.dispoaver==='abcd' || this.state.dispan16ver==='abcd' }
      onChange = {
        event => this.setState({
          mob: event.target.value
        })
      }
      /> <
      /Form.Field> {
        this.state.moberror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Mobile Number should be valid" / >
          :
          null
      }

      </Segment>
      </Grid.Column>
      </Grid.Row>
      </Grid>

      <Grid divided='vertically'>
   <Grid.Row columns={1}>
     <Grid.Column>
     <Segment inverted color='grey' padded>

     <center>
     <Label color='black' attached="top" style = {
        {
          fontSize: '20px'
        }
      }  >
       Parent Details
        </Label>
        </center>

        <br/><br/>

     <Label as='a' color='black' style = {
       {
           fontSize: '15px'
       }
         } ribbon>
    Father's Name
       </Label>


       <br/><br/>
      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "First Name"
      ref = {
        (input) => {
          this.ffname = input;
        }
      }
      //  labelPosition=""
      fluid value = {
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
      Input label = "Middle Name"
      fluid ref = {
        (input) => {
          this.fmname = input;
        }
      }
      //labelPosition=""
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
      ref = {
        (input) => {
          this.flname = input;
        }
      }
      fluid
      //  labelPosition=""
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
      /Form.Group>

      {
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
      br / >

      <Label as='a' color='black' style = {
        {
            fontSize: '15px'
        }
          } ribbon>
    Mother's Name
        </Label>
        <br/><br/>
         <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "First Name"
      ref = {
        (input) => {
          this.mfname = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.mfname
      }
      fluid onChange = {
        event => this.setState({
          mfname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Middle Name"
      fluid ref = {
        (input) => {
          this.mmname = input;
        }
      }
      //labelPosition=""
      value = {
        this.state.mmname
      }
      onChange = {
        event => this.setState({
          mmname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      Form.Field >
      <
      Input label = "Last Name"
      ref = {
        (input) => {
          this.mlname = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.mlname
      }
      fluid onChange = {
        event => this.setState({
          mlname: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group>

      {
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
      }


      </Segment>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <b>

      <
      h3 style={{color:'black' ,fontSize:'22.5px'}} > Documents Required are: < /h3>
      <center>
       <
      font color = 'black' >
      <
      table border = "3"
      width="100%"
      bgcolor = "white"
      cellpadding='10px'
       >
      <
      tbody >
      <
      tr >
      <
      td > Proof of Identity < /td> <
      td >
      <
      Dropdown placeholder = 'Select Document'
      fluid selection options = {
        poi
      }
      onChange = {
        (e, {
          value
        }) => this.setState({
          poi: value
        })
      }
      /> <
      /td> <
      td >
      <
      Form.Field >
      <
      Input label = "Passport Number"
      //  labelPosition=""
      value = {
        this.state.pass
      }
      ref = {
        (input) => {
          this.pass = input;
        }
      }
      onChange = {
        event => this.setState({
          pass: event.target.value
        })
      }
      disabled = {
        this.state.poi == "aadhar" || this.state.poi == "pan" || this.state.poi == "other" || !this.state.poi
      }
      /> <
      Input label = "Aadhar Number"
      ref = {
        (input) => {
          this.aadhar = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.aadhar
      }
      onChange = {
        event => this.setState({
          aadhar: event.target.value
        })
      }
      disabled = {
        this.state.poi == "pass" || this.state.poi == "pan" || this.state.poi == "other" || !this.state.poi
      }
      /> <
      Input label = "PAN Number"
      //  labelPosition=""
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
      disabled = {
        this.state.poi == "pass" || this.state.poi == "aadhar" || this.state.poi == "other" || !this.state.poi
      }
      /> <
      /Form.Field> <
      /td> <
      td > < Button primary onClick = {
        this.handleVerPOI
      }
      disabled = {
        this.state.dispoiver === 'abcd' || this.state.poi===''
      } > Verify < /Button></td >
      <
      /tr> <
      /tbody> <
      tbody >
      <
      tr >
      <
      td > Proof of Address < /td> <
      td >
      <
      Dropdown placeholder = 'Select Document'
      fluid selection options = {
        poa
      }
      onChange = {
        (e, {
          value
        }) => this.setState({
          poa: value
        })
      }
      /> <
      /td> <
      td >
      <
      Form.Field >
      <
      Input label = "Passport Number"
      //  labelPosition=""
      value = {
        this.state.pass2
      }
      ref = {
        (input) => {
          this.pass2 = input;
        }
      }
      onChange = {
        event => this.setState({
          pass2: event.target.value
        })
      }
      disabled = {
        this.state.poa == "aadhar" || this.state.poa == "other" || !this.state.poa
      }
      /> <
      Input label = "Aadhar Number"
      //  labelPosition=""
      value = {
        this.state.aadhar2
      }
      ref = {
        (input) => {
          this.aadhar2 = input;
        }
      }
      onChange = {
        event => this.setState({
          aadhar2: event.target.value
        })
      }
      disabled = {
        this.state.poa == "pass" || this.state.poa == "other" || !this.state.poa
      }
      /> <
      /Form.Field> <
      /td> <
      td > < Button primary onClick = {
        this.handleVerPOA
      }
      disabled = {
        this.state.dispoaver === 'abcd' || this.state.poa===''
      } > Verify < /Button></td >
      <
      /tr> <
      /tbody> <
      tbody >
      <
      tr >
      <
      td > PAN / Form 16 < /td> <
      td >
      <
      Dropdown placeholder = 'Select Document'
      fluid selection options = {
        pan16
      }
      onChange = {
        (e, {
          value
        }) => this.setState({
          pan16: value
        })
      }
      /> <
      /td> <
      td >
      <
      Form.Field >
      <
      Input label = "PAN Number"
      value = {
        this.state.pan2
      }
      ref = {
        (input) => {
          this.pan2 = input;
        }
      }
      onChange = {
        event => this.setState({
          pan2: event.target.value
        })
      }
      disabled = {
        this.state.pan16 == "f16" || !this.state.pan16
      }
      /> <
      /Form.Field> <
      /td> <
      td > < Button primary onClick = {
        this.handleVerPAN16
      }
      disabled = {
        this.state.dispan16ver === 'abcd' || this.state.pan16===''
      } > Verify < /Button></td >
      <
      /tr> <
      /tbody> <
      /table> <
      /font>
      </center>
      </b> {
        this.state.aadharerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Aadhar number should be valid" / >
          :
          null
      } {
        this.state.passerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Passport number should be valid" / >
          :
          null
      } {
        this.state.panerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "PAN number should be valid" / >
          :
          null
      } {
        this.state.aadhar2error ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Aadhar number should be valid" / >
          :
          null
      } {
        this.state.pass2error ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Passport number should be valid" / >
          :
          null
      }

      {
        this.state.pan2error ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "PAN number should be valid" / >
          :
          null
      } <
      br / > < br / >
      <center>
      <
      Button primary onClick = {
        this.handleSubmit
      }
      loading = {
        this.state.loading
      }
      disabled = {
        this.state.verifystat !== 'abcd' || this.state.verifystat2 !== 'abcd' || this.state.verifystat16 !== 'abcd'
      } >
      Submit < /Button>
      </center><
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
export default BANK;
