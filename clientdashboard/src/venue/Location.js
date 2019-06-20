import React, { Component } from 'react';
//import './App.css';

class App extends Component {
  state = {
    name: '',
    Landmark: '',
    capacity: '',
    contact: '',
    events:'',
    shown: 'true'
  }
  
  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }
  handleLandmarkChange = event => {
    this.setState({ Landmark: event.target.value })
  }
  handlecapacityChange = event => {
    this.setState({ capacity: event.target.value })
  }
 
  handlecontactChange = event => {
    this.setState({ contact: event.target.value })
  }
  handleeventChange = event => {
    this.setState({ events: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
			shown: !this.state.shown
		});
    const { name, Landmark, capacity, contact,events } = this.state;

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
        <div class="col l s12 m5">
          <div class="card-panel ">
            <h6 className="center">Add location</h6>
            
            <form onSubmit={this.handleSubmit} name="myform" style={ shown }>
              <div class="input-field inline"  >
                <label> Name</label>
                <input type="text" name="name" size="30" id="" onChange={this.handlenameChange} value={this.state.name} />
              </div>
              <div class="input-field inline " >
                <label>Landmark</label>
                <input type="text" name="Landmark" size="30" id="" onChange={this.handleLandmarkChange} value={this.state.Landmark} />
              </div>
              <div class="input-field inline" >
                <label>Capacity</label>
                <input type="text" name="capacity"  size="30"id="" onChange={this.handlecapacityChange} value={this.state.capacity} />
              </div>
             
              <div class="input-field inline">
                <label>Alternative contact </label>
                <input type="text" name="contact" id="" size="30" onChange={this.handlecontactChange} value={this.state.contact} />
              </div>
              <div>
              <label>Event Type </label>
              <select onSelect={this.handleeventChange}>
                <option value="Movie" >Movie</option>
                <option value="Theatre">Theatre</option>
                <option selected value="Comedy">Comedy</option>
              </select>
              </div>
              <br />

             

              <label> Amenties</label>
              <div class="row">
    <div class="col l10 s12 m6">
      <div class="card">
        <div class="card-content black-text">
       
      
        <br></br>
        
        <p>
      <label>
        <input type="checkbox" />
        <span>Parking</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox"  />
        <span>Food store</span>
      </label>
    </p>
          
        </div>
       
      </div>
    </div>
  </div>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
              </button>
            </form>
            <div class="data" style={hidden}>
              <button class="btn waves-effect waves-light right" type="edit" onClick={this.toggle.bind(this)}>Edit
                <i class="material-icons right">edit</i>
              </button>
              <br /><br />

              <p>Name:{this.state.name}</p>
              <p>Landmark:{this.state.Landmark}</p>
              <p>Capacity:{this.state.capacity}</p>
              <p>Contact:{this.state.contact}</p>
              <p>Event Type : {this.state.events}</p> 

            </div>

          </div>

        </div>

       
      </div>

    );
  }
}

export default App;
