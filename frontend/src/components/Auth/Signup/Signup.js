// import React,{useState} from 'react';
// import { Button } from 'react-bootstrap';
// import initializeAuthentication from '../../../Firebase/firebase.initialize';
// import useAuth from '../../../hooks/useAuth';
// import './Signup.css'
// const Signup = () => {

// const {signInUsingGoogle,logout,user,error} = useAuth();

// const [email,setEmail] =  useState('')
// const [password,setPassword] =  useState('')
// const [userName,setUserName] = useState('');
    


  

//     function validateEmail(email) {
//         const re = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
//         const res =  re.test(email);
//         return res;
//       }


//     const handleRegistration =e=>{
//         e.preventDefault();

//         if(password.length < 6){
//             setError('Password must be at list 6 character');
//             return ;
//         }
    
//         if(!validateEmail(email)){
//             setError('Not a valid email');
//             return ;
//         }


//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 // ...
//                 updateUser();
//                 setError('');
//                 console.log(user);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//                 setError(error.code+' : '+error.message);
//             });

//     }

//     const updateUser = () => {
//         updateProfile(auth.currentUser, {
//             displayName: userName
//           }).then(() => {
//             // Profile updated!
//             // ...
//           }).catch((error) => {
//             // An error occurred
//             // ...
//           });
//     }

//     const handleEmailChange = e => {
//         e.preventDefault();
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         e.preventDefault();
//         setPassword(e.target.value);
//     }

//     const handleUserNameChange = e => {
//         e.preventDefault();
//         setUserName(e.target.value);
//     }

//     return (
//         <div className='container bg-warning vh-100 '>
//             {
                
//                 !user.name ? 
         

//                 <div>
//                     <form onSubmit={handleRegistration}>
//                         <h3>Please Register</h3>
//                         {
//                             error && <h1 className='alert alert-danger'>{error}</h1>
//                         }

//                         Name: <input type="text" name="username" onBlur={handleUserNameChange}></input>
//                         <br />
//                         Email: <input type="text" name="email" onBlur={handleEmailChange}></input>
//                         <br />
//                         Password: <input type="password" name="password" onBlur={handlePasswordChange} ></input>
//                         <Button type="submit" className='btn btn-primary'>Register</Button>
//                     </form>
//                      <Button className='btn btn-success' onClick={handleGoogleSignin}>Login with Google</Button>
//                 </div>
//                 :
//                 <Button className='btn btn-success' onClick={logout}>Sign Out</Button>
//             }
        
      
//             {
//                 user.email && <div>
//                                     <h1>Hello  {user.name}</h1>
//                                     <p>Email: {user.email}</p>
//                                     <img src={user.photo} alt="no image" className='img-thumbnail'></img>
//                              </div>
//             }
//         </div>
//     );
// };

// export default Signup;