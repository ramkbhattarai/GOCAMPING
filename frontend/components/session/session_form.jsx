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

    demo(e){
        e.preventDefault();
        this.props.login(this.props.demoUser).then(this.props.closeModal);
    }

    componentWillMount(){
        this.props.clearErrors();
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
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
       
        return (
            <ul className="session-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        if (this.props.formType === 'signup') {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="session-welcome-header">Welcome to GoCamping!</div>
                        <div className="modal-discover-caption">Discover the best camping near you</div>
                        <br />

                        <div onClick={this.props.closeModal} className="close-x">&times;</div>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <input className="session-form-input login-input"
                                 type="text"
                                value={this.state.fname}
                                onChange={this.update('fname')}
                                placeholder='First Name...'

                            />

                            <br />
                            <input className="session-form-input login-input" 
                                type="text"
                                value={this.state.lname}
                                onChange={this.update('lname')}
                                placeholder='Last Name...'
                            />

                            <br />
                            <input className="session-form-input login-input" 
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email Address...'

                            />

                            <br />
                            <input className="session-form-input login-input" 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password...'
                            />

                            <br />
                            <input className="session-form-input login-input" 
                                type="number"
                                value={this.state.zip_code}
                                onChange={this.update('zip_code')}
                                placeholder='Zip Code...'
                            />
                            <br />

                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>

                        <div className='session-question'>Already a member?</div>
                        <div className='session-options'>
                            {this.props.otherForm}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
                        </div>

                    </form>
                    <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
                </div>
            );
        } else {
            return (

                <div className='outerDivSessionForm' >
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="session-welcome-header">Welcome to GoCamping!</div>
                            <div className="modal-discover-caption">Discover the best camping near you</div>
                            <br />

                            <div onClick={this.props.closeModal} className="close-x">&times;</div>
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />

                                <input className="session-form-input login-input" 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder='Email Address...'
                                />



                                <br />

                                <input className="session-form-input login-input" 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder='Password'

                                />

                                <br />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                            <div className='session-question'>Don't have an account?</div>
                            <div className='session-options'>
                                {this.props.otherForm}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
                            </div>
                        </form>
                    </div>
                </div>
            );

        }


    }
}

export default withRouter(SessionForm);
