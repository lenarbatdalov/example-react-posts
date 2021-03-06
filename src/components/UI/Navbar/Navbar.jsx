import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.setItem('auth', 'false')
  }

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>

      <MyButton onClick={logout}>
        Выйти
      </MyButton>
    </div>
  );
};

export default Navbar;