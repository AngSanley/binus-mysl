import React, {Component} from 'react';
import './Route.css';
import Button from '../component/Button.js'
class Package extends Component{
    render(){
        return(
            <div className="Route">
                <p>Package Component</p>
                <Button title="a"/>

            </div>
        )
    }
}

export default Package;