import React from 'react'
import { useLocation} from "react-router-dom";
import Picture from '../components/Picture';
import RepoContributions from '../components/RepoContributions';

export default function ProfileDisplay() {

    const location = useLocation();
  const reRouteUser = location.state.userName;

  return (
    <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
    <Picture userName={ reRouteUser  }/>
      <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>
    <RepoContributions userName={ reRouteUser }/>
        
      </div>
    </div>
  )
}
