import React, { Component } from 'react';
import Button from '../component/Button.js';
import TextInput from '../component/TextInput.js';
import AudioPlayer from "../component/AudioPlayer";
import AudioFile from '../TRG_Banks_-_Grandpas_great_escape.mp3';

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
        this.handleReset = this.handleReset.bind(this);
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

    handleReset(){
        this.setState( {
            username: '',
            userEmail: '',
            feedback: ''
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let valid = true;
        if(this.state.feedback.length < 1){
            alert('Please input your feedback below');
            valid = false;
            return false;
        }
        if(this.state.username.length < 5 || this.state.username.length > 25){
            alert('Please input your name in the correct format (5-25 characters)');
            valid = false;
            return false;
        }
        if(this.state.userEmail === null){
            alert('Please input your email address');
            valid = false;
            return false;
        } 

        if(!this.isValidEmail(this.state.userEmail)) {
            alert('Please input valid email address');
            valid = false;
            return false;
        }
        if (valid){
            this.setState({name: ''});
            this.setState({email: ''});
            this.setState({feedback: ''});
            alert('Thank you for the feedback 😊');
            window.location.reload();
            return true;
        }
    }

    isValidEmail(email) {
        if (email.length <= 2) {
            return false;
        }
        if (email.indexOf("@") == -1) {
            return false;
        }
 
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
 
 
        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }
 
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }
 
        return true;
    };

    render() {
        return (
            <div className="Route">
                <h1>Feedback</h1>
                <AudioPlayer controls={true} source={AudioFile} type={'audio/mpeg'} autoPlay={true}/>
                <form onSubmit={this.handleSubmit}>
                    <TextInput placeholder="name" name="username" type="text" value={this.state.username} onChange={this.handleNameChange}/>
                    <TextInput placeholder="someone@example.com" name="userEmail" type="text" value={this.state.userEmail} onChange={this.handleEmailChange}/>
                    <TextInput placeholder="Type your feedback here..." type="email" isBig="true" value={this.state.feedback} onChange={this.handleFeedbackChange}/>
                    <Button title="Submit" type="submit" color="#164396" isHalf="true" />
                    <Button title="Reset" type="reset" color="#00C89F" isHalf="true" onClick={this.handleReset}/>
                </form>
            </div>
        )
    }
}

export default Feedback;
