import './SectionPage.scss'

const SectionPage = () =>{
    return(
        <div className='sectionpage'>
           <div className="container">
               <h3 className='sectionpage__name'>Bizning mahsulotlar</h3>
               <ul className="sectionpage__list">
                   <li className="sectionpage__item">
                       <a href="" className="sectionpage__link">Barchasi</a>
                   </li>
                   <li className="sectionpage__items">
                       <a href="" className="sectionpage__links">Modal A+</a>
                   </li>
               </ul>
           </div>
           <hr />
        </div>
    )
}
export default SectionPage