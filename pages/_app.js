import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../public/css/layoutcomponent.css';
import {useState,createContext} from 'react';
import UserContext from '../components/util/UserContext';

export default function MyApp({ Component, pageProps }) {
  const [data,setData] = useState({
    user: null,
    id: null,
    admin: null,
  });
  const [dogInfo,setDogInfo] = useState({});
  const signIn = (user, id, admin) => {
    setData({
      user: user,
      id: id,
      admin: admin,
    })
  };

  const signOut = () => {
    setData({
      user: null,
      id: null,
      admin: null,
    })
  };
  const handleDogInfo = (obj) => {
    setDogInfo(obj)
  }

  return (
    <UserContext.Provider value={{user:data, dogdata: dogInfo, signIn: signIn, signOut:signOut, handleDogInfo: handleDogInfo}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};