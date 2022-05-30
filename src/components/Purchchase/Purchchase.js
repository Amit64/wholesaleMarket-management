import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchchase = () => {
    const {id} = useParams();
    const [order,setOrder] = useState([]);
    const { register,  handleSubmit, formState: { errors },reset } = useForm();
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const url = `http://localhost:3005/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
    },[])
    const {_id,name} = order;
    const onSubmit = data =>{
      console.log(data);
      
      const orders = {
        OrderId : _id,
        product: name,
        quantity: data.quantity,
        user: data.email,
        userName:data.name,
        address:data.address
      }
      fetch('http://localhost:3005/order',{
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(orders),
        })
          .then((res) => res.json())
          .then(data => {
           console.log(data.acknowledged);
           if(data.acknowledged === true ){
             toast.success("order placed successfully");
           }
          });
          reset();
    }
    return (
        <section className="text-gray-600 body-font">
              <h1 className="title-font text-center pt-5 font-medium text-3xl text-gray-900">Hi {user.displayName}, Please confirm purchase by submitig  all detail</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={order.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {order.name}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>{order.description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Quantity: {order.quantity}</div> 
      <div class="badge badge-outline">Minimum order 5</div>
    </div>
  </div>
</div>
    <div className="lg:w-2/6 md:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                            <label className="label">
                                {/* {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>} */}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email")}
                            />
                     

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity",{
                              
                                  required: {
                                    value: true,
                                    message: 'quantity is Required'
                                },
                                min: {
                                  value: 5,
                                  message: 'Mimum quantity 5' // JS only: <p>error message</p> TS only support string
                                },
                                max: {
                                  value:20 ,
                                  message: 'Not Enough Product available' // JS only: <p>error message</p> TS only support string
                                }
                              
                                })}
                            />
                         <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'address is required'
                                    }
                                    
                                })}
                            />
                         <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>

                        </div>

                      

                     
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Confirm order" />
                    </form>
    </div>
  </div>
</section>
    );
};

export default Purchchase;