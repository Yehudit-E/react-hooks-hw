import { useContext } from "react";
import { UserContext } from "../../reducer/UserReducer";
import { Avatar, Divider, Tooltip } from "@mui/material";

const UserName=()=>{
    const {user,userDispatch} = useContext(UserContext);
    
    return(<>
        <Tooltip title={user.firstName?user.firstName+" "+user.lastName:"User"} >
        <Avatar sx={{fontSize:25, width: 43, height: 43 ,margin:0,marginTop:3,marginLeft:3.2, bgcolor: "primary.main"}}>{user.firstName ? user.firstName[0].toUpperCase() : undefined}</Avatar>
        </Tooltip>
    </>)
}

export default UserName