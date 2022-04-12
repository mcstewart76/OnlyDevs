import React from 'react';
import Picture from "../components/Picture"
import RepoContributions from '../components/RepoContributions';



const Profile = () => {
  //context.data.userName
  return (
    <>
    <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
    <Picture userName="mcstewart76"/>
      <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>
    <RepoContributions userName="mcstewart76"/>
        
      </div>
    </div>
</>
    
  );
};

export default Profile;