import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductDetail = () => {
  // const id=1;
  const {id}=useParams();
  const[product,setProduct]=useState([]);
  const[loading,setLoading]=useState(false);
  const [error, setError] = useState(null);
  useEffect(()=>{

                      axios({
                        method:"GET",
                        url:`https://fakestoreapi.com/products/${id}`})
                        .then(res=>{
                        console.log(res.data)
                        setProduct(res.data)
                      }).catch(e=>console.log(e))
                      .finally(()=>setLoading(false));

                },[product]);
          
            const Loading =()=>{
              return(
                  <div className='load'>
                  <h1>Loading.....</h1>
                  </div>
              )
          };

            const ShowProduct =()=>{ 
              return(               
                <div className='contain'>
                        <div className='product'>
                          <div className='bg-color'>
                              <div className='photo'>  
                                <img src={product.image} alt={product.title} height="250px" />
                              </div>
                              <div className='detail'>
                                <h2>{product.title}</h2>
                                <h3>Price :${product.price}</h3>
                                <h4>50% OFFER</h4>
                                <p>Description :{product.description}</p>
                                <div>
                                <NavLink to={`/Products/${product.id}/Order`} className='button'>Buy Now</NavLink>
                                </div>
                                
                              </div>
                            </div>
                              
                        </div>
                   
                </div>
              );

            };

      return (
    <div>
            {loading ? <Loading /> : <ShowProduct />}
    </div>
          )
}

export default ProductDetail