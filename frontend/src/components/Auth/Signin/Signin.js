import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import {Link,useLocation,useHistory} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import useFirebase from '../../../hooks/useFirebase';

import { Button } from 'react-bootstrap';
import initializeAuthentication from '../../../Firebase/firebase.initialize';
import './Signin.css'
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth'; 
import PageTopBanner from '../../PageTopBanner/PageTopBanner';
initializeAuthentication();


const Signin = () => {

// const {signInUsingGoogle} = useAuth();


const auth = getAuth();

const [isLogin,setIsLogin] = useState(false);

const toggleLogin = e => {
    setIsLogin(e.target.checked);
}

const {user,signInUsingGoogle,logout,handleAuthStateChanged,setUser} = useAuth();

const [email,setEmail] =  useState('')
const [password,setPassword] =  useState('')
const [userName,setUserName] = useState('');

const [error,setError] = useState('');
const [success,setSuccess] = useState('');

const provider =new GoogleAuthProvider();

const history = useHistory();
const location = useLocation();


const redirect_uri = location.state?.from || '/';

const message = location.message || '';



const handleGoogleSignIn = e => {
    e.preventDefault();
    signInUsingGoogle().then(
        result=>{
          setUser(result.user);
            history.push(redirect_uri);
        }
    )
}





    function validateEmail(email) {
        const re = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
        const res =  re.test(email);
        return res;
      }


    const handleLogin =e=>{ 
        e.preventDefault();

        if(password.length < 6){
            setError('Password must be at list 6 character');
            return ;
        }
    
        if(!validateEmail(email)){
            setError('Not a valid email');
            return ;
        }


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setError('');
                setUser(user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(error.code+' : '+error.message);
            });

    }

    const handleRegistration =e=>{
        e.preventDefault();

        if(password.length < 6){
            setError('Password must be at list 6 character');
            return ;
        }
    
        if(!validateEmail(email)){
            setError('Not a valid email');
            return ;
        }

        
          const updateUser = async () => {
              updateProfile(auth.currentUser, {
                  displayName: userName
                }).then(() => {
                  // Profile updated!
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
          }

   
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
          
                
        //         updateUser();

        //         setError('');
        //         console.log(user);
        //         setUser(user);
        //         history.push(redirect_uri);
             

        
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //         setError(error.code+' : '+error.message);
        //     });

    }



    const handleEmailChange = e => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleUserName = e => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    return (

        <>
      

      <PageTopBanner title={'Login with Google Account' }></PageTopBanner>

<section className="login-section">
  <div className="container-fluid">
    <div className="row d-flex justify-content-center mt-5 ">
      <div className="col-md-12 col-lg-12 col-xl-5">
          { message && <h1 className='alert alert-warning'>{message}</h1>  }
          { error && <h1 className='alert alert-danger'>{error}</h1>  }
          { success && <h1 className='alert alert-success'>{success}</h1>  }
          {user && user.name}

       
      <button type="button" className="mx-1 btn btn-danger btn-floating w-100 p-5" onClick={handleGoogleSignIn}>
             Sign in with Google <i className="fab fa-google"></i>
            </button>
      </div>
   
    </div>
  </div>

 
</section>

        </>
    );
};

export default Signin;

