import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Styles from './Dashboard.module.css'
import {FaLessThan} from 'react-icons/fa6'
import {CiSearch} from 'react-icons/ci'
import {MdFilterList} from 'react-icons/md'

const Navbar = () => {
  const navigate=useNavigate()
  const [categories,setCategories]=useState([{name:'All'}])
  const  getImage= async (item)=>{
    return await fetch(`https://dummyjson.com/products/category/${item}?limit=1&select=thumbnail`)
    .then(res=>res.json())
    .then(data=>{
      const product=data.products[0]
      return ({id:product.id,name:item,image: product.thumbnail})})
  }
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data=>{
      if(Array.isArray(data))
        data.map(item=>{getImage(item)
        .then((data)=>setCategories(categories=>[...categories,data]))
        .catch(err=>console.log(err))
        })  
    });
    
  },[])
  return (
    <>
      <div className={Styles.navbar}>
          <div className={Styles.firstBar}>
            <div className={Styles.backBtn}
            onClick={()=>navigate(-1)}
            >
              <FaLessThan />
            </div>
            <div className={Styles.searchBar}>
                <form onSubmit={(e)=>e.preventDefault()}>
                  <input type='text' name='gray' id='searchValue' placeholder='Search for a product,clothes'/>
                  <button type='submit'><CiSearch/></button>
                </form>
            </div>
          </div>
          <div className={Styles.firstBar}>
            <div className={Styles.filterBtn}>
                <MdFilterList />
            </div>
            <div className={Styles.categories}>
                {
                  categories.map((category)=>
                    <div  key={category?.id} className={Styles.category}>
                      {category?.image ?<div className={Styles.categoryImage}>
                        <img src={category?.image} className={Styles.categoryImageImg}/></div>:null}
                      {category?.name}
                    </div >
                  )
                }s
            </div>
          </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar