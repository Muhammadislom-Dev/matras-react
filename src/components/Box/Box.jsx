import './Box.scss'

//Images
import video from '../../assets/img/video3.mp4'

const Box = ()=>{
    return(
        <div className="box">
            <div className="container">
                <p className="box__names mt-5 pt-5">
                    Ishlab chiqarish tehnologiyalari
                </p>

                <div className="p-5  row row-cols-1 row-cols-md-3 g-4 ">
                <div className="col box__col">
                      <p className='box__name '>Memoriform</p>
                  <div className="card box__list">
                    <video className="box__video feedback-video" controls preload="metadata" src={video}
                     type="video/mp4"></video>
                    <div className="card-body">
                      <p className="card-text box__text text-center">Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
                    </div>
                  </div>
                </div>
                <div className="col box__col ">
                     <p className='box__name'>Tabiiy lateks</p>
                  <div className="card box__list ">
                    <video className="box__video feedback-video" controls preload="metadata" src={video}
                     type="video/mp4"></video>
                    <div className="card-body">
                      <p className="card-text box__text text-center">Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.</p>
                    </div>
                  </div>
                </div>
                <div className="col box__col">
                    <p className='box__name'>Mustaqil prujina</p>
                  <div className="card box__list">
                       <video className="box__video feedback-video" controls preload="metadata" src={video}
                     type="video/mp4"></video>
                    <div className="card-body">
                      <p className="card-text box__text text-center">Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum  ultricies venenatis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Box