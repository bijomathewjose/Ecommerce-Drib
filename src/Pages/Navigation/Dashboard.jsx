import {} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './Dashboard.module.css'
import {FaLessThan} from 'react-icons/fa6'
import {CiSearch} from 'react-icons/ci'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className={Styles.navbar}>
          <div className={Styles.backBtn}onClick={()=>
            navigate(-1)
            }><FaLessThan /></div>
          <div className={Styles.searchBar}>
              <form onSubmit={(e)=>{e.preventDefault();console.log(e.target.gray.value)}}>
                <input type='text' name='gray' id='searchValue' placeholder='Search for a product,clothes'/>
                <button type='submit'><CiSearch/></button>
              </form>
          </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar