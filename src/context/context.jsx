import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function Context(props) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
      });

    const[user,setuser] = useState(null)

    const [isloggedin, setIsloggegin] = useState(false);
    
    //   Login page data


    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };
    
      const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
          (u) =>
            u.username === loginData.username && u.password === loginData.password
        );
    
        if (user) {
          alert("Login successful");
          setuser(loginData.username)
          setIsloggegin(true)
        } else {
          alert("Login failed. Please check your credentials.");
        }
    
        setLoginData({ username: "", password: "" });
    
      };

      const logout = () =>{
        setIsloggegin(false)
        setuser('')
      }


      const AllVallue = {
        loginData, setLoginData,user,setuser,handleInputChange ,handleLogin,isloggedin, setIsloggegin,logout
      }

  return (
    <AuthContext.Provider value = {AllVallue}>
    {props.children}
    </AuthContext.Provider>
  )
}
