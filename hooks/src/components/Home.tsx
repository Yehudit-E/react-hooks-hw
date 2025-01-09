import { useReducer, useState } from 'react';
import userReducer,{ UserContext } from './reducer/UserReducer';
import Login from './Login';
import UserName from './UserName';
import Update from './Update';
import { Divider } from '@mui/material';
function Home() {
  const [user, userDispatch] = useReducer(userReducer, {id:"",email:"",password:""});
  const [isLogin, setIsLogin] = useState<boolean>(false);
  console.log(user)
  return (
    <>
      <UserContext.Provider value={{user,userDispatch}}>

      <UserName></UserName>
      <Divider variant="middle" sx={{ borderWidth : '1.2px' }} />
      {!isLogin &&<Login setIsLogin={setIsLogin}/>}
      {isLogin &&<Update></Update>}
      </UserContext.Provider>

    </>
  )
}

export default Home