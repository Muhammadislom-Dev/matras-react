import './Swiper.scss'

import car from '../../assets/img/car.png'
import person from '../../assets/img/person.png'
import person1 from '../../assets/img/persons.png'

const Swiper = () =>{
    return(
        <div className="swiper py-5 my-5">
            <div className="container">
                 <p className="swiper__name">Nega bizni tanlashdi</p>

                 <div className=" row row-cols-1 row-cols-md-3 g-1 mt-5">
                <div className="col swiper__lists">
                  <div className=" card swiper__list ">
                    <img src={car} className="card-img-top  swiper__img" alt="..." />
                    <div className="card-body">
                      <h5 className="swiper__names card-title text-center" >Yetkazib berish</h5>
                      <p className="swiper__text  card-text text-center" >Toshkent bo'ylab bepul o'lchov va yetkazib berish</p>
                    </div>
                  </div>
                </div>
                <div className="col swiper__lists">
                  <div className=" card swiper__list ">
                    <img src={person} className="card-img-top  swiper__img" alt="..." />
                    <div className="card-body">
                      <h5 className="swiper__names card-title text-center" >Qo'llab quvvatlash</h5>
                      <p className="swiper__text card-text text-center" >Bizning qollab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning</p>
                    </div>
                  </div>
                </div>
                <div className="col swiper__lists">
                  <div className=" card swiper__list ">
                    <img src={person1} className="card-img-top swiper__img" alt="..." />
                    <div className="card-body">
                      <h5 className="swiper__names card-title text-center"  >Kafolat</h5>
                      <p className="swiper__text card-text text-center" >Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25mm qisqartirilsa.</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Swiper