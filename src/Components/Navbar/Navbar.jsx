import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import {useNavigate} from "react-router-dom"
// import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {

  const navigate=useNavigate()
  function goToHome()
  {
    navigate("/")
  }

  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            {/* <img onClick={goToHome} className='logo' src={logo} alt="" /> */}
             {/* <Link to="/"><img className='logo' src={logo} alt="" /></Link> */}
            <h1 onClick={goToHome} className='logo'><i class="fa-brands fa-youtube" style={{color: "#ff3d3d",cursor:"pointer"}}>VideoHub</i></h1>
            {/* <h1 className='logo'><i class="fa-brands fa-square-youtube" style={{color: "#ff3d3d"}}></i>VideoHub</h1> */}
        </div>

        <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
        </div>
           
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar