import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
    return (
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">{user.displayName.slice(0,1)}</span>
  </div>
</div> 
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg"> {user.displayName}</h2>
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{user.email}</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">welcome to power tool </p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
    );
};

export default MyProfile;