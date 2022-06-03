import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       // console.log(data);
        const url = `https://power-tools-30f6c.web.app/review`
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          if(response.ok){
            toast('Review Added !');
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
          
            <label className="text-center mb-2 text-sm uppercase" >Review</label>
            <input className='w-full border mb-2 p-2'  placeholder='Add a review' {...register("review", { required: true})} />
            
            <input className='bg-accent w-full text-white mb-2 p-2 cursor-pointer' type="submit" value="Add" />
            
          </form>
        </div>
      </div>
        </section>
        </div>
    );
};

export default Reviews;