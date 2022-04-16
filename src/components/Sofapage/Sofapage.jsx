import './Sofapage.scss'

import matras3 from '../../assets/img/matras3.png'
import button from '../../assets/img/Polygon.png'

const Sofapage =() =>{
    return(
        <div className="sofapage">
            <div className="container">
            <div className="row align-items-center g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="py-5 py-lg-0">
                    <p className='sofapage__name'> Mattrassue kompaniyasi haqida</p>
                    <p className='sofapage__text'>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est.
                        Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
                </div>
                <div className="sofapage__title py-5 py-lg-0">
                    <p className=" sofapage__text  m-3">Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor.
                    </p>
                    <p className=" sofapage__text m-3">Dolor integer in interdum viverra risus dolor enim.</p>
                    <p className=" sofapage__text m-3">Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-out-left" className=" py-3 col-xl-7 col-lg-6 col-md-10 text-lg-end text-center">
                {/* <button className="sofapage__btnss">
                    <img className='sofapage__img' src={button} alt="" />
                </button> */}
                <img src={matras3} alt="" className="img-fluid" />
            </div>
        </div>
            </div>
        </div>
    )
}
export default Sofapage