import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
 import { useMutation } from "@apollo/client"
// import { QUERY_GITHUB_USER } from '../utils/queries';

import { DebounceInput } from 'react-debounce-input';
 import { ADD_CONNECTED_DEV } from '../utils/mutations';


export default function SearchBar() {


//   const handleFriend = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       // navigate("/home")
//     } catch (e) {
//       console.error(e);
//     } 
//   };


 const handleAddFriend = async (event) => {
    event.preventDefault();
    
    try {
     
     const { data } = await addConnectedDev({
  variables: {userName: formState.userName },
      })
      console.log(data);
    }

      // navigate("/home")
     catch (e) {
      console.error(e);
    } 
  };
const [searchFriend, setSearchFriend] = useState([
    {friend: ""},
    

]);
const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};
  const [formState, setFormState] = useState({userName:""});

  const [addConnectedDev, { error, data }] = useMutation(ADD_CONNECTED_DEV);

  
  return (
    <div className='search p-2'>
      <div className='searchbox'>
        <h1 className='makingposts'>Search</h1>
        <div>
          <Form >
            <Form.Group className="mb-3 px-3">
              <Form.Label>Find Devs</Form.Label>
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={handleChange}
                element={Form.Control}
                placeholder="Find by GitHub Username"
                name="userName"
                type="userName"
                value={formState.userName}

              />
              <Button className='usernamebtn'></Button>
            </Form.Group>
            <Button id="SearchBtn" className="buttons" variant="primary" type="submit" onClick={e => console.log(e.target.value)} text="Search">
              Search
            </Button >
            </Form>
            {searchFriend.map((singleFriend, index) => (
              <Button id="SearchBtn" key={index} className="buttons" variant="primary" type="submit "  >
              Friend Name
            </Button >
           
            
            
            ))}{searchFriend.length > 1 && (
              <Button id="SearchBtn"  className="buttons" variant="primary" type="submit" onClick={handleAddFriend}>
          Add Friend Button
        </Button >   
            )}
          
        </div>
      </div>
    </div>
  )
};

