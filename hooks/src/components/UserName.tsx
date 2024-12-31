import { useContext } from "react";
import { UserContext } from "./reducer/UserReducer";
import { Avatar, Divider, Tooltip } from "@mui/material";

const UserName=()=>{
    const {user,userDispatch} = useContext(UserContext);
    
    return(<>
        <Tooltip title={user.firstName?user.firstName+" "+user.lastName:"User"} >
        <Avatar sx={{fontSize:25, width: 43, height: 43 ,margin:2.5,marginTop:3.5,marginLeft:3.2, bgcolor: "primary.main"}}>{user.firstName[0]?.toUpperCase()}</Avatar>
        </Tooltip>
    </>)
}

export default UserName