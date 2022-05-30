import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:3005/product`
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          if(response.ok){
            toast('Your Item Is Added !');
          }
          return response.json();
        }
        )
        .then((json) => console.log(json));
        reset();
    }
    return (
        <div>
            <section className='coolbg-form '>
            <div className=" flex justify-center items-center drop-shadow-lg mt-10">
        <div className=" w-80 bg-white p-12 rounded">
            
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <label className="text-center mb-2 text-sm uppercase" >Add A product</label>
            <input className='w-full border mb-2 p-2'  placeholder='name' {...register("name", { required: true})} />
            <input className="w-full border mb-2 p-2" placeholder="img link" {...register("img", { required: true})} />
            <input className="w-full border mb-2 p-2"   placeholder="price" {...register("price", { required: true})} />
            <textarea className="w-full border mb-2 p-2"  placeholder="description" {...register("description", { required: true})} />
            <input className="w-full border mb-2 p-2" placeholder="quantity" type="number" {...register("quantity", { required: true,valueAsNumber: true})} />
            <input className='bg-accent w-full text-white mb-2 p-2 cursor-pointer' type="submit" value="Add" />
            
          </form>
        </div>
      </div>
        </section>
        </div>
    );
};

export default AddProduct;