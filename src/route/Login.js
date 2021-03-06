import React, { Component } from 'react';
import Button from '../component/Button.js';
import TextInput from '../component/TextInput.js';
import { CookiesProvider, withCookies } from 'react-cookie';
import img from '../img.jpg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            password: ''
        };
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumberChange(event) {
        this.setState({ number: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.number === '' && this.state.password === '') {
            alert('Please input your phone number and password');
        }
        else if (!this.state.number.match(/^[0-9]+$/)) {
            alert('Please input number only');
        }
        else if (this.state.number.length !== 12) {
            alert('Please input 12 digits number only');
        }
        else if (this.state.number.match(/^0878/) != '0878') {
            alert('Please input your mySL number (0878XXXXXXXX)');
        }
        else if (this.state.password.length < 5 || this.state.password.length > 25) {
            alert('Please input your password correctly (5-25 characters)')
        }
        else {
            const { cookies } = this.props;
            cookies.set('number', this.state.number, { path: '/' });
        }
        event.preventDefault();
    }

    render() {
        return (
            <CookiesProvider>
                <div className="flexContainer">
                    <div className="flexContent">
                        <div style={{ display: 'initial' }}>
                            <div className="contentImg" style={{backgroundImage: `url(${img})`}}>
                                <div className="contentDim" />
                                <div style={{ height: '100vh' }}/>
                                <div className="contentTitle">Jaringan Data Terkuat</div>
                                <div className="contentSubtitle">Nikmati streaming bebas hambatan dengan fiberisasi</div>
                                <button className="contentButton" style={{fontWeight: "bold", background:"#00d2a0", color: "#164396", border: "0"}} target="_blank">Selengkapnya</button>
                         </div>
                        </div>
                    </div>
                    <div className="flexLogin">
                        <div style={{ textAlign: "right", display: "flex", flexDirection: "column", width: "100%", marginTop: "10px" }}>
                            <svg style={{ alignSelf: "flex-end" }} width={70} height={50} viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.7412 17.636C23.4989 16.605 21.946 15.5022 20.0587 14.3514C18.5297 13.3924 17.4546 12.6492 16.8574 12.0738C16.2362 11.5224 16.0451 10.947 16.2601 10.3956C16.714 9.22086 18.1474 9.10098 20.5604 10.036C22.0416 10.6114 23.475 11.4505 24.8846 12.5773C25.004 11.7382 25.1474 10.9231 25.3624 10.1319C25.9835 7.8543 26.5569 6.0562 27.1064 4.61773C25.9119 3.94643 24.6696 3.37104 23.3795 2.86758C20.6082 1.76474 18.0758 1.26127 15.8062 1.35717C13.5366 1.4291 11.6253 2.00449 10.0963 3.05937C8.56734 4.11426 7.44449 5.52876 6.77555 7.30289C6.01106 9.34073 5.9155 11.1388 6.53665 12.7451C7.1578 14.3514 8.06564 15.67 9.30795 16.7489C10.5503 17.8278 12.1509 19.0025 14.1338 20.2732C15.6867 21.2561 16.7618 22.0473 17.3829 22.6227C18.0041 23.1981 18.1952 23.7735 17.9802 24.3728C17.7891 24.8763 17.3591 25.164 16.714 25.188C16.069 25.2359 15.0656 24.9962 13.7755 24.4927C12.2465 23.9173 10.7653 23.0782 9.28406 21.9754C8.1612 21.1363 7.18169 20.2492 6.32163 19.3142C5.86771 18.8347 5.10322 18.8107 4.6493 19.2902L0.587907 23.3899C0.157878 23.8214 0.133987 24.5167 0.540126 24.9962C1.54353 26.123 2.85751 27.2258 4.45817 28.3287C6.46498 29.6952 8.61513 30.822 10.9325 31.7091C13.7277 32.7879 16.2601 33.2674 18.5536 33.1955C20.8232 33.0996 22.7344 32.5242 24.2634 31.4933C25.3624 30.7501 26.1269 29.7911 26.7958 28.6643C25.7446 25.2359 24.9801 21.4 24.7412 17.636Z" fill="#002CBA" />
                                <path d="M52.0003 26.075C51.9525 25.2359 51.2358 25.0441 51.2358 25.0441L34.8469 18.6429L41.7752 0.829732C41.7752 0.829732 42.0141 0.254341 40.7001 -0.00938042C39.4339 -0.249127 30.2599 1.71679 29.161 3.10732C27.6081 5.04927 24.4784 17.0606 26.8197 27.3457C26.9153 27.7533 27.0108 28.1608 27.1542 28.5684C27.1542 28.5684 26.963 31.805 18.9597 33.1236C18.9597 33.1236 24.4306 33.4832 32.0278 30.4624L32.9596 30.822L35.9459 31.9968L40.939 33.9387C40.939 33.9387 42.0857 34.2264 43.0414 33.5551C43.997 32.8838 51.4747 27.082 51.4986 27.058C51.4986 27.082 52.0242 26.5545 52.0003 26.075Z" fill="#00C89F" />
                            </svg>
                        </div>
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <TextInput type="tel" name="phonenumber" placeholder="0878XXXXXXXX" value={this.state.number} onChange={this.handleNumberChange} />
                            <TextInput type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
                            <a className="textbutton" href="#" style={{ textAlign: "end", marginBottom: "20px" }}>Forget password</a>
                            <Button type="submit" title="Log in" />
                            <a className="textbutton" href="#" style={{ paddingTop: "10px" }}>Not have an account yet?</a>
                        </form>
                    </div>
                </div>
            </CookiesProvider>
        )
    }
}

export default withCookies(Login);
