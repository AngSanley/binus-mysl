import React, {Component} from 'react';
import './Route.css';
import Button from '../component/Button.js'
import Slider from '../component/Slider'
class Package extends Component{
    render(){
        return(
            <div className="Route">
            <h1>Package</h1>
            <h3>Streaming Quota</h3>
            <Slider green="4" white="11"/>
            <h3>3G/4G Quota</h3>
            <Slider green="9" white="11"/>
            <br/>
            <div style={{marginTop: "30px"}}>
                <Button type="submit" title="Buy Quota"/>
            </div>
            </div>
        )
    }
}

export default Package;