import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {Image,
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
import statesdrop from '../components/statesdrop';
import board from '../components/board';
import passyear from '../components/passyear';



export default class Edu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetno:'',
      fname:'',
      lname:'',
      mname:'',
      board:'',
      passyear:'',
      marksobt:'',
      marksoutof:'',
      stat: '',
      sheetnoerror:false,
      fnameerror: false,
      mnameerror:false,
      lnameerror:false,
      loading: false,
      marksobterror: false,
      marksoutoferror: false,

      open: false,
      focus: false,
      defcheck: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = async (event) => {

      this.setState({
        loading: true,
        fnameerror: false,
        lnameerror: false,
        mnameerror: false,
        pinerror: false,
        moberror: false,
        anoerror: false,
        open: false
      });

      this.setState({
        loading: true,
        lnamerror: false,
        mnamerror: false,
        fnameerror: false,
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
      else if (isNaN(this.state.sheetno) === true)
       {
        this.setState({ sheetnoerror: true,loading: false});
        this.sheetno.focus()
      }
      else {
        this.setState({ open: true });
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
      let reacth;
      let test;
      test = (this.state.fname + this.state.mname + this.state.lname + this.state.board + this.state.passyear + this.state.stat + this.state.marksobt + this.state.marksoutof + this.state.sheetno).toString();
      test = test.toLowerCase();
      reacth = crypt.SHA256(test).toString();
      console.log(reacth);
      const accounts = await web3.eth.getAccounts();
      await pramaan.methods.storemap(reacth,this.state.sheetno).send({
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

//const src='/EPramaan/components/eg1.png'

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
       <
       h1 > Educational Department Form < /h1> <
       Segment inverted color = 'orange' >

       <
       Message attached header = 'Welcome to EPramaan!'
       content = 'Fill out the form below to sign-up for a new Aadhar account'
       icon = "searchengin"
       color = 'black' /
       >
       <br/>

  <  Form error = { this.state.fnameerror || this.state.mnameerror || this.state.lnameerror || this.state.marksobterror || this.state.marksoutoferror || this.state.sheetnoerror} >

  <
  link rel = "stylesheet"
  href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /
  >

        <Form.Field>
        <
        label color = "black"
        style = { {  fontSize: '20px'  } } > Full Name < /label>
         </Form.Field>

         <Form.Group widths='equal'>
        <Form.Field >
        <
        Input fluid label = " First Name"
        ref = {  (input) => {  this.fname = input;  }
        }
        value = {  this.state.fname  }
        onChange = {  event => this.setState({
            fname: event.target.value
          })
        }
        />
       </Form.Field>

       <Form.Field >
       <
       Input fluid label = " Middle Name"
       ref = {  (input) => {  this.mname = input;  }
       }
       value = {  this.state.mname  }
       onChange = {  event => this.setState({
           mname: event.target.value
         })
       }
       />
      </Form.Field>

      <Form.Field >
      <
      Input fluid label = " Last Name"
      ref = {  (input) => {  this.lname = input;  }
      }
      value = {  this.state.lname  }
      onChange = {  event => this.setState({
          lname: event.target.value
        })
      }
      />
     </Form.Field>
     </Form.Group>


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

        <br/>
       <Form.Field>
       <
       Dropdown placeholder = 'Select State'
       fluid selection options = { statesdrop }
       onChange = { (e, { value }) => this.setState({ stat: value }) }
       />
       </Form.Field>

         <br/ >

         <Form.Field>
         <
         Dropdown placeholder = 'Select Board'
         fluid selection options = { board }
         onChange = { (e, { value }) => this.setState({ board: value }) }
         />
         </Form.Field>
         <br/ >


        <Form.Field >
        <
        Input fluid label = "Marks Obtained"
        ref = { (input) => { this.marksobt = input; }  }
        value = { this.state.marksobt }
        onChange = {  event => this.setState({  marksobt: event.target.value  })  }
        />
         </Form.Field>
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

        <Form.Field >
        <
        Input fluid label = "Marks Out of"
        ref = { (input) => { this.marksoutof = input; }  }
        value = { this.state.marksoutof }
        onChange = {  event => this.setState({  marksoutof: event.target.value  })  }
        />
         </Form.Field>
         <br/>

                       {
                         this.state.marksoutoferror ?
                         <
                         Message color = 'red'
                         error header = "Invalid Content"
                         content = "Marks Out of should contain only numbers" / >
                         :
                           null
                       }

         <Form.Field>
         <
         Dropdown placeholder = 'Select Passing Year'
         fluid selection options = { passyear }
         onChange = { (e, { value }) => this.setState({ passyear: value }) }
         />
         </Form.Field>
         <br/ >

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


         <Button loading = { this.state.loading }
         primary onClick = {this.handleSubmit}
         disabled = {
           !this.state.fname || !this.state.mname || !this.state.lname || !this.state.stat || !this.state.board || !this.state.marksobt || !this.state.marksoutof || !this.state.passyear || !this.state.sheetno  }>
         Submit < /Button>

         <
         Confirm open = { this.state.open }
         cancelButton = 'Go Back'
         confirmButton = "Let's do it"
         onCancel = { this.handleCancel }
         onConfirm = {this.handleconf }
         />

</Form>
</Segment>
</Layout>
</Segment>




    );
  }

}
