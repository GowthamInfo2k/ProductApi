import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../App.css';




const Products = () => {

  
    const [search,setSearch]=useState("")
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);
    let componentmount=true;
    useEffect(()=>{
        const getProduct =async()=>{
            setLoading(true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentmount){
                setData(await response.clone().json());
                setFilter(await response.json());
                
                setLoading(false);
                console.log(filter)
            }
            return()=>{
                componentmount=false;
            }
        }
        

      getProduct();
    },[]);


   

    const Loading =()=>{
        return(
            <div className='load'>
             <h1>Loading.....</h1>
            </div>
        )
    }

    const filterProduct=(cat)=>{
        const updatedList =data.filter((x)=>x.category===cat);
        setFilter(updatedList);
    }
    const ShowProduct=()=>{
        return(
        <div className='container'>
         
 
                <div className='filters'>
                    <button className='btn-1' onClick={()=>setFilter(data)}>ALL</button>
                    <button className='btn-1' onClick={()=>filterProduct("men's clothing")}>Mens </button>
                    <button className='btn-1' onClick={()=>filterProduct("electronics")}>Electronics</button>
                    <button className='btn-1' onClick={()=>filterProduct("women's clothing")}>Womens </button>
                    <button className='btn-1' onClick={()=>filterProduct("jewelery")}>Jewelery</button>

                </div>

                <div className='box-container'>
                {filter.map((Product)=>{
                return(
                    <div className='box'>
                        <img src={Product.image} alt={Product.id} height="250px" />
                        <h4>{Product.title.substring(0,20)}</h4>
                        <h6>${Product.price}</h6>
                        <NavLink to={`/Products/${Product.id}`} className='btn'>View</NavLink>
                    </div>

             )
             })}
                </div>
       </div>
        );


       
    };
  return (
    <div>
        <div className='heading'> 
            <h1>Latest Arrival</h1>
        </div>
        <hr />
        <div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>
  )
}

export default Products