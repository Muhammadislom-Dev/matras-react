import './Sublimepage.scss'


import location from '../../assets/img/Location.png'
import { useState } from 'react'
import Data from './Data'
import Card from './Card'
import home from '../../assets/img/home.png'

export default function Sublimepage() {
const [active, setActive] = useState("firstcard")
return(
<div className="sublimepage">
    <div className="container">
        <div class=" row align-items-center g-0">
            <div class="col-xl-5 col-lg-6 col-md-12">
                <p className='sublimepage__name'>Manzilimiz</p>
                <div 
                 data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="500"
                 data-aos-duration="2500" 
                  className="py-5 py-lg-0">
                    <div
                    className='sublimepage__title'>
                        {active === "firstcard" &&
                        <Card data={Data} cardIndex={0} /> }
                        {active === "secondcard" &&
                        <Card data={Data} cardIndex={1} /> }
                        {active === "thirstcard" &&
                        <Card data={Data} cardIndex={2} /> }
                        {active === "fixed" &&
                        <Card data={Data} cardIndex={3} /> }
                    </div>
                    <button type="button" class="sublimepage__btn mt-4"><img class="mx-2"
                            src={location} />Geolakatsiya</button>
                </div>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2500" 
            className=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center pb-4">
                <img src={home} alt="" class="img-fluid" />
                <div className="sublimepage__list">
                    <button className='sublimepage__button' onClick={()=> setActive("firstcard") }></button>
                    <button className='sublimepage__button' onClick={()=> setActive("secondcard") }></button>
                    <button className='sublimepage__button' onClick={()=> setActive("thirstcard") }></button>
                    <button className='sublimepage__button' onClick={()=> setActive("fixed") }></button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}