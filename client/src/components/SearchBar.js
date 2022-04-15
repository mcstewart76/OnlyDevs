import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useQuery } from "@apollo/client"
import { QUERY_GITHUB_USER } from '../utils/queries';

import { DebounceInput } from 'react-debounce-input';


export default function SearchBar() {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [getGitHubUser, { error, data }] = useQuery(QUERY_GITHUB_USER);
  // const navigate = useNavigate();
  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
    
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await getGitHubUser({
  //       variables: { ...formState },
  //     });

      
  //     // navigate("/home")
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     email: '',
  //     password: '',
  //   });
  // };

  const [searchFriend, setSearchFriend] = useState([
    {friend: ""},
    

]);

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
                
                element={Form.Control}
                placeholder="Find by GitHub Username"

              />
              <Button className='usernamebtn'></Button>
            </Form.Group>
            <Button id="SearchBtn" className="buttons" variant="primary" type="submit" onClick={e => console.log(e.target.value)} text="Search">
              Search
            </Button >
            {searchFriend.map((singleFriend, index) => (
              <Button id="SearchBtn" key={index} className="buttons" variant="primary" type="submit">
              Friend Button
            </Button >
           
            
            
            ))}{searchFriend.length > 1 && (
              <Button id="SearchBtn"  className="buttons" variant="primary" type="submit">
          Add Friend Button
        </Button >   
            )}
          </Form>
        </div>
      </div>
    </div>
  )
};

