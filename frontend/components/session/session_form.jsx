import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: "",
            email: "",
            password: '',
            zip_code: "" 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        
        return e => {
           
            this.setState({
            [field]: e.currentTarget.value
        })
    };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const formType = this.props.formType;
        let nameInputs;
        let zipcodeInput;
        if (formType === 'Log In'){
            nameInputs = null;
            zipcodeInput = null;
        } else {
            nameInputs = (
               
               <>
                <div className="login_form_names">
                    
                       
                            <input type="text"
                                value={this.state.fname}
                                onChange={this.update('fname')}
                                className="login-input"
                                placeholder="First Name.."
                            />
                       
                    </div>
                    <div className="login_form_names">
                            <input type="text"
                                value={this.state.lname}
                                onChange={this.update('lname')}
                                className="login-input"
                                placeholder="Last Name.."
                            />
                       
               
                </div>
                </>
                
            )

            zipcodeInput = (
                <>
                    <div className="login_form_zip_code">

                  
                        
                            <input type="number"
                            value={this.state.zip_code}
                            onChange={this.update('zip_code')}
                            className="login-input"
                            placeholder="Zip Code.."
                            
                        />
                       
                    </div>
                </>
            )
        }
        return (
            <>
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to GoCamping
                      <p className="login-form-message">Discover The Nature around YOU</p>
                    <div className="login-form">
                        {nameInputs}
                        <div className="login_form_email">

                      
                     
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email Address.."
                            />
                        
                        </div>
                        <div className="login_form_password">

                       
                        
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password.."
                            />
                       
                        </div>
                        {zipcodeInput}
                       
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    
                </form>
                
            </div>
            <div >
                {this.renderErrors()}
            </div>
            </>
        );
    }
}

export default withRouter(SessionForm);
