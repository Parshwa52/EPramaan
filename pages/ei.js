import {
  Link,
  Router
} from '../routes';
import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {
  Image,
  Popup ,
  Progress,
  Step,
  Label,
  Rail,
  Grid,
  Form,
  Button,
  Input,
  Dropdown,
  Menu,
  Radio,
  Message,
  Confirm,
  Segment
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
import board from '../components/board';
import passyear from '../components/passyear';


export default class EI extends Component {
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
      pass: '',
      passerror: false,
      aadhar: '',
      aadharerror: false,
      pan: '',
      panerror: false,
      mob: '',
      fnameerror: false,
      loading: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      moberror: false,
      anoerror: false,
      open: false,
      focus: false,
      defcheck: true,
      ffnameerror: false,
      fmnameerror: false,
      flnameerror: false,
      mfnameerror: false,
      mmnameerror: false,
      mlnameerror: false,
      reacth:'',
      test: '',
      encr:'',
      res:'',
      verifystat: false,
      disver: '',sheetno:'',
      pass: '', marksobt:'',
      marksoutof:'',sheetnoerror:false,marksobterror:false,marksoutoferror:false,disver2:'',marksgreat:false,
      icon:'info circle',icon1:'info circle',icon2:'info circle',iconcomp:'',icon1comp:'',icon2comp:''

    };
    this.handleVerify = this.handleVerify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlemarks = this.handlemarks.bind(this);
  }


  handleVerify = async (event) => {

    this.setState({
      test: '', res:'',reacth:'',icon1:'info circle',icon1comp:'',
      loading: false,
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
      mlnameerror: false
    });
    let key;
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
            loading: false,
          });
          this.aadhar.focus()
        } else {
          key=this.state.aadhar;
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.mob + this.state.aadhar).toString();
        }
        //key=aesjs.utils.utf8.toBytes(this.state.aadhar)


      } else if (!this.state.aadhar && !this.state.pass && this.state.poi !== 'other') {
        if (!this.state.pan.match(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/)) {
          this.setState({
            panerror: true,
            loading: false,
          });
          this.pan.focus()
        } else {
          key=this.state.pan
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.ffname + this.state.fmname + this.state.flname + this.state.pan).toString();
        }
        this.setState({encrkey:this.state.pan});
      } else if (!this.state.aadhar && !this.state.pan && this.state.poi !== 'other') {
        if (!this.state.pass.match(/^[A-Z]{1}[0-9]{7}/)) {
          this.setState({
            passerror: true,
            loading: false,
          });
          this.pass.focus()
        } else {
          key=this.state.pass
          this.state.test = (this.state.fname + this.state.mname + this.state.lname + this.state.date + this.state.gen + this.state.flat + this.state.build + this.state.road + this.state.land + this.state.tvc + this.state.subd + this.state.dist + this.state.stat + this.state.pin + this.state.ffname + this.state.fmname + this.state.flname + this.state.mfname + this.state.mmname + this.state.mlname + this.state.pass).toString();
        }
        this.setState({encrkey:this.state.pass});
      } else {
        alert("Verify proof of identity manually");
        this.setState({
          disver: 'abcd',
          verifystat: 'abcd'
        });
      }
      if (this.state.test !== '') {
        let result
        let reacth1
        let test
        try {
          test=this.state.test
          test = test.toLowerCase();
          console.log(test);
          reacth1 = crypt.SHA256(test).toString()
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

        console.log(reacth1)
        console.log(key)
        console.log(this.state.res)

        if (this.state.res===reacth1) {
          alert("successful validation")

          this.setState({
            verifystat: 'abcd',
            disver: 'abcd',
            icon1comp:'completed',
          })
        } else {
          alert("unsuccessful validation")
          this.setState({aadhar:'',pan:'',pass:'',poi:''})
        }
      }
    }
    //    const accounts=await web3.eth.getAccounts();

  }


  handlemarks = async (event) => {

    event.preventDefault()

    this.setState({
      iconcomp:'',
      reacth:'',
      test: '',
      res:'',
      loading: false,
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
      marksgreat:false
    });

    this.setState({
      test: '',
      res:'',
      reacth:'',
      lnamerror: false,
      mnamerror: false,
      fnamerror: false,
      marksobterror: false,
      marksoutoferror: false,
      open: false,
      sheetnoerror:false
    });

    if (!this.state.fname.match(/^[a-zA-Z]+$/))
     {
      this.setState({ fnameerror: true,  loading: false});
      this.fname.focus()
    }
    else if (!this.state.mname.match(/^[a-zA-Z]+$/))
     {
      this.setState({ mnameerror: true, loading: false });
      this.mname.focus()
    }
     else if (!this.state.lname.match(/^[a-zA-Z]+$/))
      {
      this.setState({ lnameerror: true,  loading: false });
      this.lname.focus()
    }
    else if (isNaN(this.state.marksobt) === true)
     {
      this.setState({ marksobterror: true,loading: false});
      this.marksobt.focus()
    }
    else if (isNaN(this.state.marksoutof) === true)
     {
      this.setState({ marksoutoferror: true,loading: false});
      this.marksoutof.focus()
    }
    else if(this.state.marksobt>this.state.marksoutof)
    {
      this.setState({ marksgreat: true,loading: false});
      this.marksobt.focus()
    }
    else if (isNaN(this.state.sheetno) === true)
     {
      this.setState({ sheetnoerror: true,loading: false});
      this.sheetno.focus()
    }
    else {
        let reacth;
        let test;
        let res;
        console.log("ok")
        try {
          test = (this.state.fname + this.state.mname + this.state.lname + this.state.board + this.state.passyear + this.state.stat + this.state.marksobt + this.state.marksoutof + this.state.sheetno).toString();
          test = test.toLowerCase();
          console.log(test);
          reacth = crypt.SHA256(test).toString();
          const accounts = await web3.eth.getAccounts();
          res = await pramaan.methods.search(this.state.sheetno).call({
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

        console.log(reacth)
        console.log(this.state.sheetno)
        console.log(res)

        if (res===reacth) {

            alert("successful validation")
          this.setState({
            disver2: 'abcd',iconcomp:'completed'
          })
        } else {
          alert("unsuccessful validation")
        }
      }

  }


  handleClose = () => this.setState({ locker: false,locker1:false })



  handleCancel = () => this.setState({
    open: false,
    loading: false
  })
  handleconf = async (event) => {

    this.setState({
      open: false,
      loading: false,
      icon2comp:'completed'
    });
    alert("Your request has been accepted");
    event.preventDefault();
  }
  handleSubmit = async (event) => {
    event.preventDefault();



    this.setState({
      open: true
    });




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

    return (


       <
      Segment inverted color = 'blue' >
      <
      Layout >
      <
      link rel = "stylesheet"
      href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /
      >
      <br/>
      <center>
      <
      div style={{color:'#E0FFFF',fontSize:'35px', FontFamily:'Arial'}} > Educational Institute Form < /div>
      <br/>
      </center>

      <Step.Group widths={3}>
        <Step active completed={this.state.iconcomp==='completed'} active icon={this.state.icon} title='Past Qualification' description='Enter your marksheet details' />
        <Step active  completed={this.state.icon1comp==='completed'} icon={this.state.icon1} title='Indian Nationality' description='verify your Nationality' />
        <Step
          active
          completed={this.state.icon2comp==='completed'}
          icon={this.state.icon2}
          title='Confirm Request'
          description='recheck all details & confirm'
        />
      </Step.Group>


       <Segment  inverted color='teal'>
      <
      Form error = {
        this.state.fnameerror || this.state.lnameerror || this.state.mnameerror || this.state.pinerror || this.state.moberror || this.state.anoerror || this.state.ffnameerror || this.state.fmnameerror || this.state.flnameerror || this.state.mfnameerror || this.state.mmnameerror || this.state.mlnameerror || this.state.aadharerror || this.state.panerror || this.state.passerror || this.state.marksobterror || this.state.marksoutoferror || this.state.sheetnoerror || this.state.marksgreat
      } >

      <Grid divided='vertically'>
   <Grid.Row columns={2}>
     <Grid.Column>
     <Segment inverted color='grey' padded>

     <b>
     <center>
     <Label attached="top" color='black' style = {
        {
          fontSize: '20px'
        }
      } >
          Personal Details
        </Label>
     </center>
     </b>
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
      //  labelPosition=""
      value = {
        this.state.fname
      }
      disabled={this.state.disver2==='abcd'}
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
      disabled={this.state.disver2==='abcd'}
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
      disabled={this.state.disver2==='abcd'}
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

      <Label as='a' color='black' style = {
         {
           fontSize: '15px'
         }
       } ribbon>
           DOB
         </Label>

      <br/><br/>

     <
      DateInput name = "date"
      placeholder = "Date"
      value = {
        this.state.date
      }
      iconPosition = "left"
      onChange = {
        this.handleChange
      }

      /> <
      br / >

      <Label as='a' color='black' style = {
         {
           fontSize: '15px'
         }
       } ribbon>
           Gender
         </Label>
         <br/><br/>
       <
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


      </Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment inverted color='grey'>

      <b>
      <center>
      <Label attached="top" color='black' style = {
         {
           fontSize: '20px'
         }
       } >
           Address information
         </Label>
      </center>
      </b>
      <br/><br/><br/>

      <Label as='a' color='black' style = {
         {
           fontSize: '15px'
         }
       } ribbon>
           Address

         </Label>  <Label basic color='red' pointing='left'>
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
      onChange = {
        event => this.setState({
          build: event.target.value
        })
      }
      />
       </Form.Field>
      </Form.Group>

      <  Form.Group widths = 'equal' >
       <  Form.Field >
      <
      Input fluid label = "Road Name"
      //  labelPosition=""
      value = {
        this.state.road
      }
      onChange = {
        event => this.setState({
          road: event.target.value
        })
      }
      /> <
      /Form.Field>


      <
      Form.Field >
      <
      Input label = "Land Mark"
      fluid
      //  labelPosition=""
      value = {
        this.state.land
      }
      onChange = {
        event => this.setState({
          land: event.target.value
        })
      }
      />
      </Form.Field>
      </Form.Group>

      <  Form.Group widths = 'equal' >
      <Form.Field >
      <
      Input label = "Town/Village/City"
      fluid
      //  labelPosition=""
      value = {
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
      fluid
      //  labelPosition=""
      value = {
        this.state.subd
      }
      onChange = {
        event => this.setState({
          subd: event.target.value
        })
      }
      />
       </Form.Field>
       </Form.Group>

      <
      Form.Group widths = 'equal' >
      <
      Form.Field >
      <
      Input label = "District"
      fluid
      //  labelPosition=""
      value = {
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
      disabled={this.state.disver2==='abcd'}

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
      //  labelPosition=""
      value = {
        this.state.pin
      }
      fluid onChange = {
        event => this.setState({
          pin: event.target.value
        })
      }
      /> <
      /Form.Field> <
      /Form.Group>

      {
        this.state.pinerror ?
          <
          Message color = 'red'
        error header = "Invalid Content"
        content = "Pin code should be valid" / >
          :
          null
      }

      <
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
      fluid ref = {
        (input) => {
          this.mob = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.mob
      }
      onChange = {
        event => this.setState({
          mob: event.target.value
        })
      }
      />
      <
      /Form.Field>

      {
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
   <Grid.Row columns={2}>
     <Grid.Column>
     <Segment inverted color='grey' padded>


     <b>
     <center>
     <Label attached="top" color='black' style = {
        {
          fontSize: '20px'
        }
      } >
          Parent Details
        </Label>
     </center>
     </b>
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


      <Grid.Column>
      <Segment inverted color='grey'>

      <center>
      <Label attached="top" color='black' style = {
         {
           fontSize: '20px'
         }
       } >
          10th Qualification
         </Label>
      </center>

      <br/><br/><br/>

      <Form.Group widths='equal'>
      <Form.Field>
      <
      Dropdown placeholder = 'Select Board'
      fluid selection options = { board }
      onChange = { (e, { value }) => this.setState({ board: value }) }
      />
      </Form.Field>
      <br/ >

      <Form.Field>
      <
      Dropdown placeholder = 'Select Passing Year'
      fluid selection options = { passyear }
      onChange = { (e, { value }) => this.setState({ passyear: value }) }
      />
      </Form.Field>
      </Form.Group>
      <br/ >

      <Form.Group widths='equal'>
      <Form.Field >
      <
      Input fluid label = "Marks Obtained"
      ref = { (input) => { this.marksobt = input; }  }
      value = { this.state.marksobt }
      onChange = {  event => this.setState({  marksobt: event.target.value  })  }
      />
       </Form.Field>
       <br/>

      <Form.Field >
      <
      Input fluid label = "Marks Out of"
      ref = { (input) => { this.marksoutof = input; }  }
      value = { this.state.marksoutof }
      onChange = {  event => this.setState({  marksoutof: event.target.value  })  }
      />
       </Form.Field>
       </Form.Group>
       <br/>

                       {
                         this.state.marksobterror ?
                           <
                           Message color = 'red'
                         error header = "Invalid Content"
                         content = "Marks Obtained should contain only numbers" / >
                           :
                           null
                       }


                     {
                       this.state.marksoutoferror ?
                       <
                       Message color = 'red'
                       error header = "Invalid Content"
                       content = "Marks Out of should contain only numbers" / >
                       :
                         null
                     }
                     {
                       this.state.marksgreat ?
                       <
                       Message color = 'red'
                       error header = "Invalid Content"
                       content = "Marks obtained should not be greater than total marks" / >
                       :
                         null
                     }

       <Form.Field >
       <
       Input fluid label = "Marksheet number"
       ref = { (input) => { this.sheetno = input; }  }
       value = { this.state.sheetno }
       onChange = {  event => this.setState({  sheetno: event.target.value  })  }
       />
        </Form.Field>

                          {
                            this.state.sheetnoerror ?
                            <
                            Message color = 'red'
                            error header = "Invalid Content"
                            content = "Marksheet Number should contain only numbers" / >
                            :
                              null
                          }




          <br/>


        < Button primary onClick = { this.handlemarks }
        disabled={this.state.disver2==='abcd' }
                >
                Verify < /Button>


        </Segment>
        </Grid.Column>
        </Grid.Row>
        </Grid>

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
      } > Documents required are: < /label> <
      /Form.Field> <
      b >
      <
      font color = 'black' >
      <
      table border = "3"
      bordercolor = 'black'
      bgcolor = 'white' width="100%"
      cellPadding="10px">
      <tbody >
      <tr>
      <td align = 'center' > Certificate of Indian Nationality in the name of Applicant < /td>
      <td >
      <
      Dropdown placeholder = 'Select Document'
      fluid selection options = {
        poi
      }onChange = {(e, {value}) => this.setState({poi: value  })
      }
      /> <
      /td> <
      td >
      <
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
      disabled = {
        this.state.poi == "aadhar" || this.state.poi == "pan" || this.state.poi == "other" || !this.state.poi
      }
      /> <
      Input label = "Aadhar Number"
      //  labelPosition=""
      ref = {
        (input) => {
          this.aadhar = input;
        }
      }
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
      ref = {
        (input) => {
          this.pan = input;
        }
      }
      value = {
        this.state.pan
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
        this.handleVerify
      }
      disabled = {
        (this.state.disver === 'abcd' && this.state.disver2=== 'abcd') || this.state.poi===''
      } > Verify < /Button></td >
      <
      /tr> <
      /tbody> <
      /table> <
      /font> <
      /b> {
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
            this.state.verifystat !== 'abcd' || this.state.disver2 !== 'abcd'
          } >
          Submit < /Button>
          </center>



      <
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



      < /Form>
       <  /Segment>
       <  /Layout>
       </Segment>
    );
  }
}
