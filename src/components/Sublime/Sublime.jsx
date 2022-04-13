import './Sublime.scss'

import safe from '../../assets/img/safe.png'
import shop from '../../assets/img/shop.png'

const Sublime = ()=>{
return(
<div className="sublime">
    <div className="container sublime__page">
        <div className="row align-items-center g-0">
            <button type="button" className="sublime__btn  mt-5">Yangi mahsulot</button>
            <p className="sublime__name p-4 text-center ">
                Ortopedik Eko matras</p>
            <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            className=" col-xl-7 col-lg-6 col-md-12 ">
                <img src={safe} alt="" className="sublime__img img-fluid  "  />
            </div>
            <div 
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000" 
            className=" col-xl-5 col-lg-6 col-md-12">
                <div className="row row-cols-2 row-cols-md-4 g-4  text-center">
                    <div className="sublime__list py-5 py-lg-0">
                        <p className='sublime__names'>Yuklama</p>
                        <p className='sublime__number'>150 <span>kg</span></p>
                    </div>
                    <div className="sublime__list py-5 py-lg-0">
                        <p className='sublime__names'>Kafolat</p>
                        <p className='sublime__number'>3 <span>yil</span></p>
                    </div>
                    <div className="sublime__list py-5 py-lg-0">
                        <p className='sublime__names'>O'lchami</p>
                        <p className='sublime__number'>200x120x40</p>
                    </div>
                    <div className="sublime__list py-5 py-lg-0">
                        <p className='sublime__names'>Sig'imi</p>
                        <p className='sublime__number'>2 <span>kishilik</span></p>
                    </div>
                </div>
                <div className="m-3">
                    <p className='sublime__text'>
                        Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing utsed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.</p>
                    <p className='sublime__names'>Narxi</p>
                    <p className='sublime__number'>1 699 999 so'm</p>
                    <button type="button" className="sublime__button mt-3">Buyurtma berish
                    <img className="mx-2" src={shop} /></button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Sublime