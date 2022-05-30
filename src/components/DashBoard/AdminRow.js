import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({user,refetch}) => {
    const {email,role} = user;
    const makeAdmin = () => {
        fetch(`https://power-tools-30f6c.web.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
              <th>{email}</th>
              <th>{role!=='admin' && <button onClick={makeAdmin} className='btn text-white'>Make Admin</button>}</th>
              <th><button className='btn btn-error text-white'>Remove User</button></th>
        </tr>
    );
};

export default AdminRow;