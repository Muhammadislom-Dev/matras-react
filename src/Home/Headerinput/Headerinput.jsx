import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Headerinput.scss'

const Headerinput = () =>{
    return(
        <div className='headerinput'>
           <div className="headerinput__page">
              <Sidebar />
              <Header />
           </div>
        </div>
    )
}
export default Headerinput