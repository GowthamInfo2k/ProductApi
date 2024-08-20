import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css';
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [search,setSearch]=useState("")

  const [data,setData]=useState([])
  
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
    console.log(response);
    setData(response.data)
     })
     .catch((error)=>{
      console.log(error);
     })
  },[])




  return (
    <div className=''>
      
            <div className='container'>
              <div className='heading'> 
                <h2>Latest Arrival</h2>
              </div>
                <div className='filters-1'> 
                  <input type='search' name='id' placeholder='Search items' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                </div>

             <div className='box-container'>
            {data
            .filter((row)=>{
              if(search==""){
                return row;
              }
              else if(row.title.toLowerCase().includes(search.toLowerCase())){
                return row;
              }
            })
            
                .map((row,i)=>{
                  return(
                    <div className='box' key={i}>
                      
                          <img src={row.image} alt={row.image} height="250px" />
                          <h4>{row.title.substring(0,20)}</h4>
                          <h6>${row.price}</h6>
                          <NavLink to={`/Products/${row.id}`} className='btn'>View</NavLink>
                    </div>

                    

                  )
                })
          
            
            }
            </div>
      </div>


    </div>
  )
}

export default Header