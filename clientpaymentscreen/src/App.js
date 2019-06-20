import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    bankname: '',
    account_number: '',
    ifsc_code: '',
    branch: '',
    contact: '',
    //showname: 'true',
    shown: 'true'
  }
  
  handleNameChange = event => {
    this.setState({ bankname: event.target.value })
  }
  handleaccnoChange = event => {
    this.setState({ account_number: event.target.value })
  }
  handleifscChange = event => {
    this.setState({ ifsc_code: event.target.value })
  }
  handlebranchChange = event => {
    this.setState({ branch: event.target.value })
  }
  handlecontactChange = event => {
    this.setState({ contact: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
			shown: !this.state.shown
		});
    const { bankname, account_number, ifsc_code, branch, contact } = this.state;

  };
  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
  render() {
    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
    return (
      <div class="row">
        <div class="col l3 s12 m5">
          <div class="card-panel ">
            <h6 className="center">Bank Details</h6>
            
            <form onSubmit={this.handleSubmit} name="myform" style={ hidden }>
              <div class="input-field inline"  >
                <label>Bank Name</label>
                <input type="text" name="bank_name" id="" onChange={this.handleNameChange} value={this.state.bankname} />
              </div>
              <div class="input-field inline " >
                <label>Account Number</label>
                <input type="text" name="account_number" id="" onChange={this.handleaccnoChange} value={this.state.account_number} />
              </div>
              <div class="input-field inline" >
                <label>IFSC Code</label>
                <input type="text" name="IFSC Code" id="" onChange={this.handleifscChange} value={this.state.ifsc_code} />
              </div>
              <div class="input-field inline" >
                <label>Branch </label>
                <input type="text" name="branch" id="" onChange={this.handlebranchChange} value={this.state.branch} />
              </div>
              <div class="input-field inline">
                <label>Alternative contact </label>
                <input type="text" name="contact" id="" onChange={this.handlecontactChange} value={this.state.contact} />
              </div>
              <br />
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
              </button>
            </form>
            <div class="data"  style={ shown }>
            <button class="btn waves-effect waves-light right" type="edit" onClick={this.toggle.bind(this)}>Edit
          <i class="material-icons right">edit</i>
            </button>
            <br/><br/>
              <p>Bank Name:{this.state.bankname}</p>
              <p>Account Number:{this.state.account_number}</p>
              <p>IFSC Code:{this.state.ifsc_code}</p>
              <p>Branch:{this.state.branch}</p>
              <p>Alternative Contact:{this.state.contact}</p>
            </div>

          </div>

        </div>

        <div class="col l3 s12 m5">
          <div class="card-panel grey lighten-3 pymt-margin">
            <div class="pytsum">Payment Summary
        </div>
            <hr />
            &nbsp;
            <p>Dues : Rs 1000 </p>
            <p>Payment done: Rs 4000 </p>
            &nbsp;&nbsp;
        <hr />
            <p>Total Payment : Rs 5000</p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
