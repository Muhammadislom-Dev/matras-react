import './Section.scss'

const Section =()=>{
return(
<section className="p-4">
    <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4 text-center" style="align-items: center;">
            <div className="col">
                <p className='section__number' style="font-size: 90px; line-height: 100px; font-weight: bold; color: #01384D;">7</p>
                <p style="font-size: 24px;line-height: 26px; color: #01384D;font-weight: 500;">yillik tajriba</p>
            </div>
            <div className="col">
                <p className='section__numbers' style="font-size: 80px; line-height: 80px; font-weight:bold;color: #01384D;">10k+</p>
                <p style="font-size: 24px;line-height: 24px; color: #01384D;font-weight: 500;">mamnun mijozlar</p>

            </div>
            <div className="col">
                <p className='section__number' style="font-size: 90px; line-height: 100px; font-weight: bold; color: #01384D;">10</p>
                <p style="font-size: 24px;line-height: 26px; color: #01384D;font-weight: 500;">yillik kafolat</p>

            </div>
            <div className="col">
                <p className='section__number' style="font-size: 90px; line-height: 90px; font-weight: bold; color: #01384D;">3</p>
                <p style="font-size: 20px;line-height: 22px; color: #01384D;font-weight: 500;">kunda yetkazish</p>

            </div>
        </div>
    </div>
</section>
)
}
export default Section