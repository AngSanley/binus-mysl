import React, { Component } from 'react';
import Button from '../component/Button.js';
import VideoPlayer from "../component/VideoPlayer";
import VideoFile from '../videoplayback.mp4';

class Promo extends Component {
    render() {
        return (
            <div className="Route">
                <h1>Promo</h1>
                <VideoPlayer source={VideoFile} autoPlay={true} controls={false}/>
                <br />
                <br />
                <div>Jangan sampai kehabisan kuota jadi penghalang kamu untuk terus berprogres. Aktifkan Stra Kuota Zero di NEW mySL! Kuota tambahan sesuai kebutuhanmu hingga 3GB, tanpa biaya tambahan.
                    <br />
                    #JADIBISA belajar terus untuk raih pencapaianmu! Karena SL, semua #JADIBISA !
                    <br />
                    <br />
                    Download New mySL sekarang untuk aktifkan Stra Kuota Zero sesuai kebutuhanmu!
                </div>
                <br />
                <Button title="Aktifkan" type="submit" color="#00C89F"/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Promo;
