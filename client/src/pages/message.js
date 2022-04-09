import React from 'react';
import { QUERY_GITHUB_USER } from '../../utils/queries';










const Message = () => {

  return (
    <>
      <div>
        <div>

       
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <div className="profile-picture text-white">
                
                </div>
                <div className="biocard text-white" id="biocard">
                  Bio
                </div>
              </div>
              <div className="col-9">
                <div className="usernamecard">
                  <div className="text-white" type="text" id="Search" > user name</div>


                </div>
                <div className="repowallcard text-white" id="repowallcard">
                  repos
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default Message;