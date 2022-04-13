import './Aside.scss'

import safe from '../../assets/img/safe5.png'
import shop from '../../assets/img/shop.png'

const Aside=()=>{
    return(
        <div className="aside pt-5 mt-5">
            <div className="container sublime__page">
        <div className="row align-items-center g-0">
            <button type="button" className="aside__btn  mt-5">Aksiya</button>
            <p className="aside__name p-4 text-center ">
                Ortopedik Eko matras</p>
            <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            className=" col-xl-7 col-lg-6 col-md-12 ">
                <img src={safe} alt="" className="aside__img img-fluid  "  />
            </div>
            <div 
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000" 
            className=" col-xl-5 col-lg-6 col-md-12">
                <div className="row row-cols-2 row-cols-md-4 g-4  text-center">
                    <div className="aside__list py-5 py-lg-2">
                        <p className='aside__names'>Yuklama</p>
                        <p className='aside__number'>120 <span>kg</span></p>
                    </div>
                    <div className="aside__list py-5 py-lg-2">
                        <p className='aside__names'>Kafolat</p>
                        <p className='aside__number'>5 <span>yil</span></p>
                    </div>
                    <div className="aside__list py-5 py-lg-2">
                        <p className='aside__names'>Balandligi</p>
                        <p className='aside__number'>38 <span>sm</span></p>
                    </div>
                    <div className="aside__list py-5 py-lg-2">
                        <p className='aside__names'>Sig'imi</p>
                        <p className='aside__number'>3 <span>kishilik</span></p>
                    </div>
                </div>
                <div className="m-3">
                    <p className='aside__text'>
                        Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing utsed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.</p>
                    <p className='aside__names'>Narxi</p>
                    <div className="aside__title">
                    <p className='aside__num'>1 999 999 so'm </p> 
                    <p className='aside__numbers'>1 199 999 so'm</p>
                    </div>
                    <button type="button" className="aside__button mt-3">Buyurtma berish
                    <img className="mx-2" src={shop} /></button>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Aside