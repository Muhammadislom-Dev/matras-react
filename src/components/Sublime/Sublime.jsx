import './Sublime.scss'

const Sublime = ()=>{
return(
<div className="sublime">
    <div className="container sublime__page">
        <div className="row align-items-center g-0">
            <button type="button" className="sublime__btn  mt-5">Yangi mahsulot</button>
            <p className="sublime__name p-4 text-center ">
                Ortopedik Eko matras</p>
            <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                <img src="./img/image 20.png" alt="" className="sublime__img img-fluid"  />
            </div>
            <div className="p-2 col-xl-5 col-lg-6 col-md-12">
                <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
                    <div className="py-5 py-lg-0">
                        <p className='sublime__names'>Yuklama</p>
                        <p className='sublime__number'>150kg</p>
                    </div>
                    <div className="py-5 py-lg-0">
                        <p className='sublime__names'>Kafolat</p>
                        <p className='sublime__number'>3yil</p>
                    </div>
                    <div className="py-5 py-lg-0">
                        <p className='sublime__names'>O'lchami</p>
                        <p className='sublime__number'>200x120x40</p>
                    </div>
                    <div className="py-5 py-lg-0">
                        <p className='sublime__names'>Sig'imi</p>
                        <p className='sublime__number'>2 kishilik</p>
                    </div>
                </div>
                <div className="m-3">
                    <p className='sublime__text'>
                        Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing utsed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.</p>
                    <p className='sublime__names'>Narxi</p>
                    <p className='sublime__number'>1 699 999 so'm</p>
                    <button type="button" className="sublime__button mt-3">Buyurtma berish
                    <img className="mx-2" src="./img/shopping_cart.png" /></button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Sublime