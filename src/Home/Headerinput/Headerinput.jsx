import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Headerinput.scss'

const Headerinput = () =>{
    return(
        <div className='headerinput'>
           <div className="headerinput__page">
              <Sidebar />
              {/* <Navbar /> */}
           </div>
        </div>
    )
}
export default Headerinput