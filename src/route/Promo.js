import React, { Component } from 'react';
import Button from '../component/Button.js';

class Promo extends Component {
    render() {
        return (
            <div className="Route">
                <h1>Promo</h1>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/vVsYnJq7h1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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