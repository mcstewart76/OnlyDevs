import React from 'react';
import Picture from "../components/Picture"
import RepoContributions from '../components/RepoContributions';
import auth from '../utils/auth';


const Profile = () => {
  //context.data.userName

  const currentuser= auth.getUser()
  // console.log("current user")
  // console.log(currentuser.data.userName)
  return (
    <>
    <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
    <Picture userName={currentuser.data.userName}/>
      <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>
    <RepoContributions userName={currentuser.data.userName}/>
        
      </div>
    </div>
</>
    
  );
};

export default Profile;