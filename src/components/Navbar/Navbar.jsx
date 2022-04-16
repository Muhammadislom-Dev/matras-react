import './Navbar.scss'

import matras3 from '../../assets/img/matras3.png'
import button from '../../assets/img/Polygon.png'

const Navbar =()=>{
return(
<div className="navbar">
    <div className="container">
        <div className="row align-items-center g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="py-5 py-lg-0">
                    <p className='navbar__name'> Mattrassue kompaniyasi haqida</p>
                    <p className='navbar__text'>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est.
                        Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
                </div>
                <div className="navbar__title py-5 py-lg-0">
                    <p className=" navbar__text  m-3">Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor.
                    </p>
                    <p className=" navbar__text m-3">Dolor integer in interdum viverra risus dolor enim.</p>
                    <p className=" navbar__text m-3">Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-out-left" className=" col-xl-7 col-lg-6 col-md-10 text-lg-end text-center">
                <button className="navbar__btnss">
                    <img className='navbar__img' src={button} alt="" />
                </button>
                <img src={matras3} alt="" className="img-fluid" />
            </div>
        </div>
    </div>
</div>
)
}

export default Navbar