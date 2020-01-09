import React, { Component } from 'react';
import Button from '../component/Button.js';
import TextInput from '../component/TextInput.js';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userEmail: '',
            feedback: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ username: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ userEmail: event.target.value });
    }

    handleFeedbackChange(event){
        this.setState({ feedback: event.target.value });
    }

    handleReset(event){
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({feedback: ''});
    }

    handleSubmit(event){
        let valid = true;
        if(this.state.feedback.length < 1){
            alert('Please input your feedback below');
            valid = false;
        }
        if(this.state.username < 5 || this.state.username > 25){
            alert('Please input your name in the correct format (5-25 characters)');
            valid = false;
        }
        if(this.state.email === ''){
            alert('Please input your email address');
            valid = false;
        }
        if (valid){
            this.setState({name: ''});
            this.setState({email: ''});
            this.setState({feedback: ''});
            alert('Thank you for the feedback 😊');
            window.location.reload();
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="Route">
                <h1>Feedback</h1>
                <audio controls autoplay hidden="hidden">
                    <source src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3" type=".mp3" />
                </audio>
                <form onSubmit={this.handleSubmit}>
                    <TextInput placeholder="name" name="username" type="text" value={this.state.username} onChange={this.handleNameChange}/>
                    <TextInput placeholder="someone@example.com" name="userEmail" type="email" value={this.state.userEmail} onChange={this.handleEmailChange}/>
                    <TextInput placeholder="Type your feedback here..." type="email" isBig="true" value={this.state.feedback} onChange={this.handleFeedbackChange}/>
                    <Button title="Submit" type="submit" color="#164396" isHalf="true" />
                    <Button title="Reset" type="reset" color="#00C89F" isHalf="true" onClick={this.handleReset}/>
                </form>
            </div>
        )
    }
}

export default Feedback;