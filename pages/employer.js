import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import { Form, Button, Input, Dropdown,Menu,Radio,Message,Confirm,Segment} from 'semantic-ui-react';
import {DateInput} from 'semantic-ui-calendar-react';
import pramaan from '../ethereum/pramaan';
import web3 from '../ethereum/web3';
import gender from '../components/option';
import poi from '../components/poi';
import poa from '../components/poa';
import pan16 from '../components/pan16';
import statesdrop from '../components/statesdrop';
import board from '../components/board';
import pyear from '../components/passyear';
export default class EI extends Component{
      constructor(props) {
      super(props);
      this.state = {
        board:'',pyear:'',stat:'',fname:'',mname:'',lname:'',fnameerror:false,lnameerror:false,mnameerror:false,perror:false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCancel = () => this.setState({ open: false,loading:false })
    handleconf=async(event)=>   {

      this.setState({open:false});

      try
      {
        this.state.test=this.state.test.toLowerCase();
        console.log(this.state.test);
        this.state.reacth=crypt.SHA256(this.state.test).toString();
        console.log(this.state.reacth);
      const accounts=await web3.eth.getAccounts();
      await pramaan.methods.storemap(this.state.reacth).send({from:accounts[0]});
      this.setState({loading:false});
    }
    catch(err) {
      this.setState({loading:false,open:false});
    }
    }



  handleSubmit = async (event) =>{
    event.preventDefault();

    this.setState({loading:true,fnameerror:false,lnameerror:false,mnameerror:false,perror:false});
         //console.log(this.state.defcheck);

       if(!this.state.fname.match(/^[a-zA-Z]+$/))
         {
            this.setState({fnameerror:true,loading:false});
            this.fname.focus()
         }
      else if(!this.state.mname.match(/^[a-zA-Z]+$/))
         {
           this.setState({mnameerror:true,loading:false});
           this.mname.focus()
         }
      else if(!this.state.lname.match(/^[a-zA-Z]+$/))
         {
           this.setState({lnameerror:true,loading:false});
           this.lname.focus()
         }
      else if(this.state.pyear.length!=4 || isNaN(this.state.pyear)===true)
         {
           this.setState({perror:true,loading:false});
           this.pyear.focus()
         }
      else
         {
       this.setState({open:true});
       }



  }
  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  render()
  {
    return(
      <Segment inverted color='blue'>
      <Layout>
      <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
    />
        <h1>Employer form</h1>
        <Segment inverted color='orange'>
        <Form error={this.state.fnameerror||this.state.lnameerror||this.state.mnameerror || this.state.perror}>
          <Form.Field>
            <label color="black" style={{fontSize:'20px'}}> Name </label>
          </Form.Field>

          <Form.Group widths='equal'>
          <Form.Field>
          <Input
          label="First Name"
          ref={(input) => { this.fname = input; }}
        //  labelPosition=""
          value={this.state.fname}
          onChange={event => this.setState({fname: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Middle Name"
          ref={(input) => { this.mname = input; }}
          //labelPosition=""
          value={this.state.mname}
          onChange={event => this.setState({mname: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Last Name"
          ref={(input) => { this.lname = input; }}
        //  labelPosition=""
          value={this.state.lname}
          onChange={event => this.setState({lname: event.target.value})}
          />
          </Form.Field>
          </Form.Group>

                    {this.state.fnameerror
                      ?
                      <Message color='red' error header="Invalid Content" content="First Name should contain only characters" />
                      :
                      null
                    }
                    {this.state.mnameerror
                      ?
                      <Message  color='red' error header="Invalid Content" content="Middle Name should contain only characters"/>
                      :
                      null
                    }
                    {this.state.lnameerror
                      ?
                      <Message color='red' error header="Invalid Content" content="Last Name should contain only characters"/>
                      :
                      null
                    }
<br/>
                    <Form.Field>
                      <label color="black" style={{fontSize:'20px'}}> Board Name </label>
                    </Form.Field>
          <Dropdown placeholder='Select Board' fluid selection options={board}
           onChange={(e,{value})=>this.setState({board:value})} />
           <br/>
           <Form.Field>
             <label color="black" style={{fontSize:'20px'}}> Passing year </label>
           </Form.Field>
           <Dropdown placeholder='Select passing year' fluid selection options={pyear}
           onChange={(e,{value})=>this.setState({pyear:value})} />

           <br/>
           <Form.Field>
             <label color="black" style={{fontSize:'20px'}}> State </label>
           </Form.Field>
          <Dropdown placeholder='Select State' fluid selection options={statesdrop}
          onChange={(e,{value})=>this.setState({stat:value})} />
          <br/>



        <Button primary onClick={this.handleSubmit} loading={this.state.loading}
        disabled={!this.state.fname || !this.state.lname || !this.state.mname || !this.state.stat || !this.state.board || !this.state.pyear} >
        Submit</Button>

        <Confirm
          open={this.state.open}
          cancelButton='Go Back'
          confirmButton="Let's do it"
          onCancel={this.handleCancel}
          onConfirm={this.handleconf} />

        </Form>
        </Segment>
      </Layout>
      </Segment>
  );
  }
}
