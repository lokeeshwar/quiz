import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function Context(props) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
      });

    const[user,Setuser] = useState()

    const [showUser, setShowUser] = useState(false);
    
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
          Setuser(loginData.username)
        } else {
          alert("Login failed. Please check your credentials.");
        }
    
        setLoginData({ username: "", password: "" });
    
      };

      const logout = () => {
        Setuser('')
      }

      if( user !== ''){
        setShowUser(true)
      }

      const AllVallue = {
        loginData, setLoginData,user,Setuser,handleInputChange ,handleLogin,logout,showUser, setShowUser
      }

  return (
    <AuthContext.Provider value = {AllVallue}>
    {props.children}
    </AuthContext.Provider>
  )
}
