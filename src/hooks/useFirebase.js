import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile  } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.initialize';
initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
    
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
      
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
        });
    },[auth])
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }

    return{
        user,
        name,
        signInUsingGoogle,
        handleNameChange,
        toggleLogin,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleResetPassword,
        processLogin,
        registerNewUser,
        setError,
        error,
        isLogin,
        logOut
    }
}

export default useFirebase;