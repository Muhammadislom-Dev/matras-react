import './Section.scss'

const Section =()=>{
return(
<section className="p-4">
    <div className="container">
        <div data-aos="fade-up"
        data-aos-duration="2000" className="row row-cols-2 row-cols-md-4 g-4  text-center">
            <div className="section__page col">
                <p className='section__number'>7</p>
                <p className='section__text'>yillik tajriba</p>
            </div>
            <div className="section__page col">
                <p className='section__numbers'>10k+</p>
                <p className='section__text'>mamnun mijozlar</p>
            </div>
            <div className="section__page col">
                <p className='section__number'>10</p>
                <p className='section__text'>yillik kafolat</p>
            </div>
            <div className="section__page col">
                <p className='section__number'>3</p>
                <p className='section__text'>kunda yetkazish</p>
            </div>
        </div>
    </div>
</section>
)
}
export default Section