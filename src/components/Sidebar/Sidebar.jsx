import './Sidebar.scss'

//Images
import bed from '../../assets/img/bed.png'

const Sidebar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Katalog</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Aksiya</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Biz haqimizda</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Manzilimiz</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Aloqa</a>
                    </li>
                </ul>
                
                <div className="navbar__page">
                    <div className="navbar__box">
                        <img src={bed} alt="" className="navbar-img" />
                        <h3 className='navbar__name'>Matrassue</h3>
                    </div>
                    <div className="navbar__box">
                        <a href="#" className="navbar__phone">+998 90 123 45 67</a>
                        <button className="navbar__btn">Buyurtma berish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar