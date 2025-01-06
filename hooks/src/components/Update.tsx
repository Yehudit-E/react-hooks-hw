import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext, UserType } from "./reducer/UserReducer";
import { Button, Dialog, DialogActions, DialogContent, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Update=()=>{
    const [openForm,setOpenForm]=useState<boolean>(false);
    const {user,userDispatch} = useContext(UserContext);
    const [form,setForm]=useState<UserType>(user);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (name:string,value:string)=>{
        setForm({...form,[name]:value})
    }
    const SaveUser=(e:FormEvent)=>{
        e.preventDefault();
        console.log(form);    
        userDispatch({type:"UPDATE_USER",data: form}); 

        setOpenForm(false);
    }
    return(
        <>
            <Button variant="text" onClick={()=>setOpenForm(true)} sx={{ textTransform: 'none' ,marginLeft:1.5}}>Update</Button>
            {openForm && 
            // <form onSubmit={SaveUser}>
            //     <input type="text" id="firstName" placeholder="First Name" value={form.firstName} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <input type="text" id="lastName" placeholder="Last Name" value={form.lastName} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <input type="text" id="email" placeholder="Email" value={form.email} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <input type="password" id="password" placeholder="Password" value={form.password} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <input type="text" id="address" placeholder="Address" value={form.address} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <input type="text" id="phone" placeholder="Phone" value={form.phone} onChange={(e)=>handleChange(e.target.id,e.target.value)}/>
            //     <button type="submit">Save</button>
            // </form>
            <Dialog open={openForm} onClose={() => setOpenForm(false)}>
                
                <DialogContent sx={{width:370}}>
                    <form onSubmit={SaveUser}>
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            id="firstName"
                            label="First Name"
                            value={form.firstName}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            id="lastName"
                            label="Last Name"
                            value={form.lastName}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            id="email"
                            label="Email"
                            value={form.email}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            label="Password"
                            value={form.password}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
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
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            id="address"
                            label="Address"
                            value={form.address}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            sx={{ marginBottom: '16px' }} 
                            type="text"
                            id="phone"
                            label="Phone"
                            value={form.phone}
                            onChange={(e) => handleChange(e.target.id, e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                        <DialogActions>
                            <Button sx={{ textTransform: 'none' }} type="submit" color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            }
        </>
    )
}
export default Update