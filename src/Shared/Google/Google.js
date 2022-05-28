import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Google = () => {
    const [signInWithGoogle, User, loading, error] = useSignInWithGoogle(auth);
    if(User){
        const currentUser = {
            email : User.email,

        }
      fetch(`https://blooming-basin-80189.herokuapp.com/${User.email}`,{
          method : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(currentUser),
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
     
    }
    return (
        <div className='text-center'>
             <button style={{padding:'10px 30px',marginTop :'30px',backgroundColor:'pink',border :'none',borderRadius:'20px'}} onClick={() => signInWithGoogle()}>SignInWithGoogle</button>
        </div>
    );
};

export default Google;