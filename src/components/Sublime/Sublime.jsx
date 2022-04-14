import './Sublime.scss'

import safe from '../../assets/img/safe.png'
import shop from '../../assets/img/shop.png'
// import zoom from '../../assets/img/zoom.png'
import save from '../../assets/img/save.png'

const Sublime = ()=>{
return(
<div className="sublime">
    <div className="container sublime__page">
        <div className="row align-items-center g-0">
            <button type="button" className="sublime__btn  mt-5">Yangi mahsulot</button>
            <p className="sublime__name p-4 text-center ">
                Ortopedik Eko matras</p>
            <div data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="3000"
                className=" col-xl-7 col-lg-6 col-md-12 ">
                <img src={safe} alt="" className="sublime__img img-fluid  " />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModals"
                    data-bs-whatever="@mdo">Open modal for @mdo</button>

            </div>
            <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="3000"
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
                        <p className='sublime__names sublime__full'>O'lchami</p>
                        <p className='sublime__number sublime__nums'>200x120x40</p>
                    </div>
                    <div className="sublime__list py-5 py-lg-0">
                        <p className='sublime__names'>Sig'imi</p>
                        <p className='sublime__number'>2 <span>kishilik</span></p>
                    </div>
                </div>
                <div className="m-3">
                    <p className='sublime__text'>
                        Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing
                        utsed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum
                        varius egestas.</p>
                    <p className='sublime__names'>Narxi</p>
                    <p className='sublime__number'>1 699 999 so'm</p>
                    <button type="button" className="sublime__button mt-3">Buyurtma berish
                        <img className="mx-2" src={shop} /></button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={save} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={save} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={save} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Sublime