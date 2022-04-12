import './Navbar.scss'

import call from "../../assets/img/Call.png"
import bed from "../../assets/img/bed.png"

const Navbar= () =>{
    return(
        <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar__box collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2  px-4  mb-lg-0">
                    <li className="navbar__item">
                        <a className="navbar__link" aria-current="page" href="#">Katalog</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Aksiya</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Biz haqimizda</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Manzilimiz</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Aloqa</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <a href="/" className="navbar__links text-decoration-none mx-2 align-items-center">
                        <img className="" src={call} />+998 99 123 45 67</a>
                    <button type="button" className="navbar__btn m-2">Buyurtma berish</button>
                </span>
            </div>
        </div>
        </div>
    )
}

export default Navbar