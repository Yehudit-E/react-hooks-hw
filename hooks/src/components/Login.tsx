import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./reducer/UserReducer";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, Modal, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login=({setIsLogin}:{setIsLogin:Function})=>{
    const [openForm,setOpenForm]=useState<boolean>(false);
    const {user,userDispatch} = useContext(UserContext);

    const firstNmeRef=useRef<HTMLInputElement>(null);
    const lastNmeRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const SaveUser=(e:FormEvent)=>{
        e.preventDefault();
        const newUser={
            firstName:firstNmeRef.current?.value||'',
            lastName:lastNmeRef.current?.value ||'',
            password:passwordRef.current?.value ||'',        
        }
        userDispatch({type:"CREATE_USER",data: newUser});
        console.log(user);   
        setIsLogin(true); 
        setOpenForm(false);

    }
    return(
        <>
            <Button variant="text" onClick={()=>setOpenForm(true)} sx={{ textTransform: 'none' ,marginLeft:1.5}}>Login</Button>
            {openForm && 
            // <form onSubmit={SaveUser}> 
            //     <TextField sx={{}} type="text" label="First Name" variant="outlined" ref={firstNmeRef}/>
            //     <TextField type="text" label="Last Name" variant="outlined" ref={lastNmeRef}/>
            //     <TextField type="password" label="Password" variant="outlined" ref={passwordRef}/>
            //     <button type="submit">Login</button>
            // </form>
            <Dialog open={openForm} onClose={()=>setOpenForm(false)}>
                <DialogContent sx={{width:370,height:300}}>
                    <form onSubmit={SaveUser}>
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            inputRef={firstNmeRef}
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            inputRef={lastNmeRef}
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
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <DialogActions>
                            <Button sx={{textTransform: 'none'}} type="submit" color="primary">
                                Login
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