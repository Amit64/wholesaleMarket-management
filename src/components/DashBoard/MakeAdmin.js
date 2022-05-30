import React from 'react';
import Loading from '../Shared/Loading/Loading';
import {
    useQuery
  } from 'react-query';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const{data:users,isLoading,refetch} = useQuery('users',()=>fetch('https://power-tools-30f6c.web.app/user').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className=' text-center text-2xl p-4'>All Users : {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th className='bg-secondary'>Email</th>
        <th className='bg-secondary'></th>
        <th className='bg-secondary'></th>
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row --> */}
      {
          users.map((user)=><AdminRow
            key={user._id}
            user={user}
            refetch={refetch}
          ></AdminRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;