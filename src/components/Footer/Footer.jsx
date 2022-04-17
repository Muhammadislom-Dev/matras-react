import './Footer.scss'

import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import vimeo from '../../assets/img/vimeo.png'

const Footer = () =>{
return(
<div className="footer">
    <div className="container">
        <div className="row align-items-center g-0 border-top py-2">
            <div className="col-12 col-md-6">
                <nav className="nav footer__nav">
                    <a className="footer__link active ps-0" href="#" >Biz haqimizda</a>
                    <a className="footer__link" href="#" >Katalog</a>
                    <a className="footer__link" href="#" >Aksiya</a>
                    <a className="footer__link" href="#" >Manzilimiz</a>
                </nav>
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
    </div>
</div>
)
}

export default Footer