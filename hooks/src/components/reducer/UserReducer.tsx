import { createContext, Dispatch } from "react";
export type UserType={
    firstName:string,
    lastName:string,
    email?:string,
    password:string,
    address?:string,
    phone?:string
}
type Action={
    type: "CREATE_USER"|"UPDATE_USER"|"GET_USER"|"DELETE_USER",
    data: UserType;
}

export const UserContext=createContext<{
    user: UserType,
    userDispatch: Dispatch<Action>;
}>({
    user:{firstName:"",lastName:"",password:""},
    userDispatch:()=>null
});
export default (state: UserType, action: Action): UserType => {
    switch (action.type) {
        case "CREATE_USER":
        return action.data;
        case "UPDATE_USER":
        return action.data;
        default:
        return state
    }
}