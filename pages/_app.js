import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../public/css/layoutcomponent.css';
import {useState,createContext} from 'react';
import UserContext from '../components/util/UserContext';

export default function MyApp({ Component, pageProps }) {
  //this value is sent between the login page and the internal pages
  const [data,setData] = useState({
    user: null,
    id: null,
    admin: null,
  });
  //used in the dogs and archive pages to send individual dog info to the dog profile page
  const [dogInfo,setDogInfo] = useState({});
  
  const signIn = (user, id, admin) => {
    setData({
      user: user,
      id: id,
      admin: admin,
    });
  };

  const signOut = () => {
    setData({
      user: null,
      id: null,
      admin: null,
    });
    handleDogInfo({});
  };
  const handleDogInfo = (obj) => {
    setDogInfo(obj);
  }

  return (
    <UserContext.Provider value={{user:data, dogInfo: dogInfo, signIn: signIn, signOut:signOut, handleDogInfo: handleDogInfo}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};