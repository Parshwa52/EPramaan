import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import { Form, Button, Input, Dropdown,Menu, Message,Segment,Checkbox,Confirm} from 'semantic-ui-react';
import {DateInput} from 'semantic-ui-calendar-react';
import pramaan from '../ethereum/pramaan';
import web3 from '../ethereum/web3';
import statesdrop from '../components/statesdrop';
import { StateDropdown, RegionDropdown } from 'react-indian-state-region-selector';
export default class Aadhar extends Component{
  constructor(props) {
      super(props);
      this.state = {
      fname: '',
      date:'',
      mname: '',
      lname: '',
      flat: '', build: '',road: '',land:'', tvc: '', subd: '',
      dist: '',stat: '',pin:'',mob:'',ano: '',region:'',errormsg:false,loading:false,lnameerror:false,mnameerror:false,pinerror:false,moberror:false,anoerror:false,open:false,focus:false,defcheck:true
};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    selectState =(val)=> {
        this.setState({ stat: val });
      }

      selectRegion =(val)=> {
        this.setState({ region: val });
      }
  handleSubmit = async (event) =>{
     this.setState({loading:true,errormsg:false,lnameerror:false,mnameerror:false,pinerror:false,moberror:false,anoerror:false,open:false});
          //console.log(this.state.defcheck);

        if(!this.state.fname.match(/^[a-zA-Z]+$/))
          {
             this.setState({errormsg:true,loading:false});
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
        else if(this.state.pin.length!=6 || isNaN(this.state.pin)===true)
          {
            this.setState({pinerror:true,loading:false});
            this.pin.focus()
          }
        else if(this.state.mob.length!=10  || isNaN(this.state.mob)===true)
          {
            this.setState({moberror:true,loading:false});
            this.mob.focus()
          }
        else if(this.state.ano.length!=12  || isNaN(this.state.ano)===true)
          {
            this.setState({anoerror:true,loading:false});
            this.ano.focus()
          }
       else
          {
        this.setState({open:true});
        }

  }


 handleCancel = () => this.setState({ open: false,loading:false })
 handleconf=async(event)=>{
   this.setState({open:false});


   try
   {
   let reacth;
   let test;
   test=(this.state.fname+this.state.mname+this.state.lname+this.state.date+this.state.flat+this.state.build+this.state.road+this.state.land+this.state.tvc+this.state.subd+this.state.dist+this.state.stat+this.state.pin+this.state.mob+this.state.ano).toString();
   test=test.toLowerCase();
   reacth=crypt.SHA256(test).toString();
   console.log(reacth);
   //sendEmail('parshwashah2510@gmail.com','Epraman Aadhar Hash',reacth);
   const accounts=await web3.eth.getAccounts();
   await pramaan.methods.storemap(reacth).send({from:accounts[0]});
   this.setState({loading:false});
 }
 catch(err){
   this.setState({loading:false,open:false});
 }
 }


  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  render()
  {
    const { State, region } = this.state;
    return(
        <Segment inverted color='blue'>
      <Layout>
      <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
    />
  <h1>Aadhar Department Form</h1>
        <Segment inverted color="orange">
        <Message
      attached
      header='Welcome to EPramaan!'
      content='Fill out the form below to sign-up for a new Aadhar account'
      icon="searchengin"
      color='black'
    />
        <Form error={this.state.errormsg||this.state.lnameerror||this.state.mnameerror||this.state.pinerror||this.state.moberror||this.state.anoerror}>
          <br/>

          <Form.Field>
          <label color="black" style={{fontSize:'20px'}}> Name </label>
          </Form.Field>

          <Segment inverted>
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
          </Segment>

          {this.state.errormsg
            ?
            <Message error header="Invalid Content" content="First Name should contain only characters" />
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

          <Form.Field>
          <label color="black" style={{fontSize:'20px'}}> DOB </label>
          </Form.Field>

            <Segment inverted>
          <DateInput
            name="date"
            placeholder="Date of Birth"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
          </Segment>
          <br/>

          <Form.Field>
          <label color="black" style={{fontSize:'20px'}}> Address </label>
          </Form.Field>


          <Segment inverted>
          <Form.Group widths='equal'>
          <Form.Field>
          <Input
          label="Flat Number"
        //  labelPosition=""
          value={this.state.flat}
          onChange={event => this.setState({flat: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Building Name"
        //  labelPosition=""
          value={this.state.build}
          onChange={event => this.setState({build: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Road Name"
        //  labelPosition=""
          value={this.state.road}
          onChange={event => this.setState({road: event.target.value})}
          />
          </Form.Field>
          </Form.Group>
          </Segment>
          <br/>

          <Segment inverted>
          <Form.Group widths='equal'>
          <Form.Field>
          <Input
          label="Land Mark"
        //  labelPosition=""
          value={this.state.land}
          onChange={event => this.setState({land: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Town/Village/City"
        //  labelPosition=""
          value={this.state.tvc}
          onChange={event => this.setState({tvc: event.target.value})}
          />
          </Form.Field>
          <Form.Field>
          <Input
          label="Sub District"
        //  labelPosition=""
          value={this.state.subd}
          onChange={event => this.setState({subd: event.target.value})}
          />
          </Form.Field>
          </Form.Group>
          </Segment>
          <br/>

          <Segment inverted>
          <Form.Group widths='equal'>
          <Form.Field>
          <Input
          label="District"
        //  labelPosition=""
          value={this.state.dist}
          onChange={event => this.setState({dist: event.target.value})}
          />
          </Form.Field>
          <div>
        <StateDropdown
          value={State}
          onChange={(val) => this.selectState(val)} />
        <RegionDropdown
          State={State}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>

        <Dropdown placeholder='Select State' fluid selection options={statesdrop}
          onChange={(e,{value})=>this.setState({stat:value})} /><br/>
          <Form.Field>
          <Input
          label="PIN Code"
        //  labelPosition=""
          value={this.state.pin}
          ref={(input) => { this.pin = input; }}
          onChange={event => this.setState({pin: event.target.value})}
          />
          </Form.Field>
          </Form.Group>
          </Segment>
          {this.state.pinerror
            ?
            <Message color='red' error header="Invalid Content" content="Pin code should be valid"/>
            :
            null
          }
          <br/>
          <Segment inverted>
          <Form.Field>
          <Input
          label="Mobile Number"
        //  labelPosition=""
          value={this.state.mob}
          ref={(input) => { this.mob = input; }}
          onChange={event => this.setState({mob: event.target.value})}
          />
          </Form.Field>
          </Segment>
          {this.state.moberror
            ?
            <Message color='red' error header="Invalid Content" content="Mobile Number should be valid"/>
            :
            null
          }
          <br/>
          <Segment inverted>
          <Form.Field>
          <Input
          label="Aadhar Number"
        //  labelPosition=""
          value={this.state.ano}
          ref={(input) => { this.ano = input; }}
          onChange={event => this.setState({ano: event.target.value})}
          />
          </Form.Field>
          </Segment>
          {this.state.anoerror
            ?
            <Message color='red' error header="Invalid Content" content="Aadhar Number should be valid"/>
            :
            null
          }
          <Form.Field>
          <Checkbox label='I agree that all the information is correct and properly verified.' onChange={event => this.setState({defcheck: !this.state.defcheck})}/>
          </Form.Field>
        <Button loading={this.state.loading} primary onClick={this.handleSubmit}
        disabled={!this.state.fname || !this.state.lname || !this.state.ano || !this.state.mob || !this.state.date || !this.state.flat || !this.state.build || !this.state.road || !this.state.tvc || !this.state.pin || !this.state.stat || !this.state.dist || this.state.defcheck}>
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
