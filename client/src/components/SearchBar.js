import React, {useRef, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {useQuery} from "@apollo/client"
import { QUERY_GITHUB_USER } from '../utils/queries';

import {DebounceInput} from 'react-debounce-input';


export default function SearchBar() {
//     state = {
//         value: ''
//       };
//    const textboxEl = useRef(null);
//    const textbox =textboxEl.current;
//    console.log(textbox)
    // var { data } = useQuery(QUERY_GITHUB_USER,
    //     {
    //       variables: { githubId: textbox} }
    //     );
    //   const p = data?.getGitHubUser || [];
     

            
             //   var friendbtn = `<button  class="btn btn-link btn-sm homie-found mx-auto justify-content-center m-2 ${login_name}">${login_name}</button>`
             //   var addFriend = ` <button class="btn btn-link btn-sm add-friend mx-auto justify-content-center">+</button>`
    
       
  return (
    <div className='search p-2'>
              <h1 className='makingposts'>Search</h1>
              <div>
                <Form>
                  <Form.Group className="mb-3 px-3">
                    <Form.Label>Find Devs</Form.Label>
                    <DebounceInput
                     minLength={2}
                     debounceTimeout={300}
                     onChange={event => this.setState({value: event.target.value})}
                    element={Form.Control}
                    placeholder="Find by GitHub Username"
                    
                    />
                    <Button></Button>
                  </Form.Group>
                  <Button id="SearchBtn" className="buttons" variant="primary" type="submit">
                    Search
                  </Button >
                </Form>
                
              </div>
            </div>
  )
};

