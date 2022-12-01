import {
    ADD_USER,
    GET_USER
} from './types'
import {useDispatch} from "react-redux"
import axios from "axios"

export const adduser = (newuser)=>(dispatch)=>{
    axios.post("http://localhost:5000/adduser",newuser)
    .then(({data})=>dispatch({
        type:ADD_USER,
        payload:data,
    }))
    .catch((err)=>alert("ERROR IN ADD NEW USER"))
}

export const getuser=()=>(dispatch)=>{
    axios.get("http://localhost:5000/users")
    .then(({data})=>dispatch({
        type:GET_USER,
        payload:data,
    })
    .catch((err)=>{alert("ERROR IN GET USERS")})
    )
} 
export const deleteuser = (id)=> (dispatch) =>{
    axios
    .delete(`http://localhost:5000/delete/${id}`)
    .then(() => dispatch(getuser()))
    .catch(err=>{alert("ERROR Deleteting")})
}
export const edditUserById = (id, editUser) => (dispatch) => {
    axios
      .put(`http://localhost:5000/updateUser/${id}`, editUser)
      .then((re) => dispatch(getuser()));
  };