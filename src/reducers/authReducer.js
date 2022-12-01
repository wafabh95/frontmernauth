import * as Types from "../Actions/types";
import React from "react";
const initialstate={
    isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
    token: null,
    errors: null,
    // user: JSON.parse(localStorage.getItem("user")),

}
const authReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case Types.Register: 
        case Types.Login:
        localStorage.setItem("auth-token", payload.token);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("user", JSON.stringify(payload.user));
        
        return{
            ...state,
            user:payload.user,
            token:payload.token,
            errors:null,
            isAuth:true,
            existuser: JSON.parse(localStorage.getItem("existuser")),


        }
        case Types.Register_fail:
            case Types.Login_fail:
            return { ...state, errors: payload, isAuth: false };

        case Types.Logout:
            localStorage.clear()
            return{
                user:null,
                token:null,
                isAuth:false,
                errors:null,
            }
                
            
        default: return state
    }
}
export default authReducer