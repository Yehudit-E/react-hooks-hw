import { useReducer, useState } from 'react';
import Login from './Login';
import UserName from './UserName';
import Update from './Update';
import { Box, Divider, Grid } from '@mui/material';
import userReducer,{ UserContext } from '../../reducer/UserReducer';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
function Header() {
  const [user, userDispatch] = useReducer(userReducer, {id:"",email:"",password:""});
  const [isLogin, setIsLogin] = useState<boolean>(false);
  console.log(user)
  return (
    <>
      <UserContext.Provider value={{user,userDispatch}}>

      {/* <UserName/>
      <NavBar/> */}
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <UserName />
              {!isLogin &&<Login setIsLogin={setIsLogin}/>}
              {isLogin &&<Update></Update>}
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <NavBar />
            </Grid>
          </Grid>
        </Box>

      <Divider variant="middle" sx={{ borderWidth : '1.2px' }} />     
      </UserContext.Provider>
      <Outlet />
    </>
  )
}

export default Header