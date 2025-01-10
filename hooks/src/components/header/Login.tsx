import axios from "axios";
import { FormEvent, useContext, useRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, Modal, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from "../../reducer/UserReducer";


const Login=({setIsLogin}:{setIsLogin:Function})=>{
    const [openForm,setOpenForm]=useState<boolean>(false);
    const {user,userDispatch} = useContext(UserContext);

    const emailRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // const SaveUser=(e:FormEvent)=>{
    //     e.preventDefault();
    //     const newUser={
    //         email:emailRef.current?.value ||'',
    //         password:passwordRef.current?.value ||'',        
    //     }
    //     userDispatch({type:"CREATE_USER",data: newUser}); 
    //     setIsLogin(true); 
    //     setOpenForm(false);
    // }
    const  saveFromSignIn= async()=>{
        const newUser={
            email:emailRef.current?.value ||'',
            password:passwordRef.current?.value ||'',        
        }
        try{
            const res = await axios.post('http://localhost:3000/api/user/login',
                newUser,
            )
            console.log(res.data);         
            userDispatch({type:"CREATE_USER",data:res.data.user});
            setIsLogin(true);  
        } catch (e :any) {
            console.log(e);
            if (axios.isAxiosError(e) && e.response?.status === 401)
                alert('user doesn\'t exist')
        }        
        setOpenForm(false);
    }

    const saveFromSignUp=async()=>{
        const newUser={
            email:emailRef.current?.value ||'',
            password:passwordRef.current?.value ||'',        
        }
        try{
            const res = await axios.post('http://localhost:3000/api/user/register',
                newUser,
            )
            console.log(res.data.userId);          
            userDispatch({type:"CREATE_USER",data:{ id: res.data.userId, email:emailRef.current?.value ||'',
                password:passwordRef.current?.value ||'',   }}); 
            setIsLogin(true);
        } catch (e :any) {
            console.log(e);
            if (axios.isAxiosError(e) && e.response?.status === 422)
                alert('user already signed up')
        }     
        
        setOpenForm(false);
    }
    return(
        <>
            <Button variant="text" onClick={()=>setOpenForm(true)} sx={{ height:"35px",textTransform: 'none',marginTop:3.8 ,marginLeft:1.5}}>Login</Button>
            {openForm && 
            // <form onSubmit={SaveUser}> 
            //     <TextField sx={{}} type="text" label="First Name" variant="outlined" ref={firstNmeRef}/>
            //     <TextField type="text" label="Last Name" variant="outlined" ref={lastNmeRef}/>
            //     <TextField type="password" label="Password" variant="outlined" ref={passwordRef}/>
            //     <button type="submit">Login</button>
            // </form>
            <Dialog open={openForm} onClose={()=>setOpenForm(false)}>
                <DialogContent sx={{width:370,height:200}}>
                    <form >
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            inputRef={emailRef}
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            variant="outlined"
                            fullWidth
                            inputRef={passwordRef}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={toggleShowPassword}
                                            onMouseDown={(event) => event.preventDefault()} 
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <DialogActions>
                            <Button sx={{textTransform: 'none'}} onClick={saveFromSignIn} color="primary">
                                Sign In
                            </Button>
                            <Button sx={{textTransform: 'none'}} onClick={saveFromSignUp}  color="primary">
                                Sign Up
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            }
        </>
    )
}
export default Login