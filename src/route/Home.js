import React, { Component } from 'react';
import BouncingBall from '../component/BouncingBall.js';
import pic from '../pic.jpg'
import Button from '../component/Button.js';
import { withCookies, CookiesProvider } from 'react-cookie';
class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        window.location.reload();
        const { cookies } = this.props;
        cookies.set('number', '', { path: '/' });
        event.preventDefault();
    }

    render() {
        const { cookies } = this.props;
        let number = cookies.get('number');
        return (
            <CookiesProvider>
                <div className="Route">
                    <div>
                        <BouncingBall color="blue" x={0} y={0} />
                        <canvas style={{ position: "absolute" }} id="myCanvas" width="400px" height="200px" />
                    </div>
                    <h1>Home</h1>
                    <img src={pic} style={{ borderRadius: "50%", width: "56px", height: "56px", objectFit: "cover", objectPosition: "top" }} />
                    <h3>Your SL number</h3>
                    {number}
                    <h3>Balance</h3>
                    Rp. 10000
                <h3>Data Package</h3>
                    Basic package
                <div style={{ marginTop: "30px" }}>
                        <Button type="submit" title="Logout" onClick={this.handleSubmit}/>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </CookiesProvider>

        )
    }
}

export default withCookies(Home);