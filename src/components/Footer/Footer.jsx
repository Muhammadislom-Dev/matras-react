import './Footer.scss'

import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import vimeo from '../../assets/img/vimeo.png'
import arrows from '../../assets/img/arrows.png'
import group from '../../assets/img/group.png'

const Footer = () =>{
return(
<div className="footer">
    <div className="container">
        <div className="row align-items-center  py-2">
            <div className="col-12 col-md-6">
                <div className="nav footer__nav">
                    <a className="footer__link active ps-0" href="#" >Biz haqimizda</a>
                    <a className="footer__link" href="#" >Katalog</a>
                    <a className="footer__link" href="#" >Aksiya</a>
                    <a className="footer__link" href="#" >Manzilimiz</a>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <nav className="nav nav-footer justify-content-center justify-content-md-end">
                    <a href="https://instagram.com/programmer_tuit" className="m-4"> <img src={facebook} alt=""
                            className="footer__pic" /></a>
                    <a href="google.com" className="m-4"> <img src={twitter} alt="" className="footer__pic" /></a>
                    <a href="#" className="m-4"> <img src={vimeo} alt="" className="footer__pic" /></a>
                    <a href="#" className="m-4"> <img src={youtube} alt="" className="footer__pic" /></a>
                </nav>
            </div>
        </div>

        <div className="row align-items-center   py-2">
            <div className="col-12 col-md-6 align-items-center">
                <nav className="nav footer__nav d-flex">
                    <p className="footer__text mt-4">
                        © 2021 Mattrassue. Barcha huquqlar himoyalangan.
                    </p>
                        <a href="#" className="footer__links  active ">
                            <img className='footer__img ' src={arrows} alt="" />
                        </a>
                </nav>
            </div>
            <div className="col-12 col-md-6">
                <nav className="nav nav-footer justify-content-center justify-content-md-end">
                    <div className='footer__lists'>
                        <p>designed and developed in</p>
                    </div>
                    <a href="https://abutech.netlify.app/">
                        <span className="footer__linkss">
                            <img className='footer__imgs' src={group} alt="" />
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer