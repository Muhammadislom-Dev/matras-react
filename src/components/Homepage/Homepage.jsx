import './Homepage.scss'

import matras5 from '../../assets/img/matras5.png'

const Homepage = () =>{
    return(
        <div className="homepage">
            <div className="container">
            <div className="row align-items-center g-0">
                <div className="col-xl-5 col-lg-6 col-md-12">
                    <div className="py-5 py-lg-0">
                       <p className='homepage__text' >Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id. </p>
                    </div>
                    <div className="homepage__list py-5 py-lg-0" >
                        <p className=" homepage__name m-3">1. Id risus phasellus laoreet eget. A nec pulvinar.</p>
                        <p className="homepage__name m-3">2. Eu justo, tincidunt fringilla diam nulla.</p>
                        <p className=" homepage__name m-3">3. Amet, nullam cras lacus, fermentum leo tellus sagittis.</p>
                        <p className="homepage__name m-3">4. Facilisi mauris condimentum sagittis odio rhoncus semper.</p>
                    </div>
                    <div className='my-3 py-lg-0'>
                        <p className="homepage__text">
                        Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.
                        </p>
                    </div>
                </div>
                <div className=" col-xl-7 col-lg-6 col-md-10 text-lg-end text-center " >
                    <img src={matras5} alt="" className="img-fluid"  />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Homepage