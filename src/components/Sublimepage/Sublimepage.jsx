import './Sublimepage.scss'

import home from '../../assets/img/home.png'
import location from '../../assets/img/Location.png'

const Sublimepage = () =>{
return(
<div className="sublimepage">
    <div className="container">
        <div class=" row align-items-center g-0">
            <div class="col-xl-5 col-lg-6 col-md-12">
                <p className='sublimepage__name'>Manzilimiz</p>
                <div class="py-5 py-lg-0">
                    <p className='sublimepage__text'>Toshkent, Parkent ko'chasi, 176-uy</p>
                    <p className='sublimepage__texts'>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva ro’parasi, Milliy bog’ metro bekati.</p>
                    <button type="button" class="sublimepage__btn mt-4"><img class="mx-2"
                            src={location} />Geolakatsiya</button>
                </div>
            </div>
            <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center pb-4">
                <img src={home} alt="" class="img-fluid" />
            </div>
        </div>
    </div>
</div>
)
}

export default Sublimepage