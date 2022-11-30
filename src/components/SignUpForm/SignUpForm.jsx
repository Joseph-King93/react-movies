import { Component } from "react";

export default class SignUpForm extends Component{

    state = {
        name: '',
    };

    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        });
    };
    

  


    render() {

        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={(evt) => this.props.setProfile(evt, this.state)}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </div>
        );
    };
};
