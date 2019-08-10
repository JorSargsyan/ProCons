import React,{useEffect,useState} from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import store from "./store"
import {getUserId,getGroupId} from "./actions/index"


function App() {
  const [userDataLoaded,setUserDataLoaded] =  useState(false)

  useEffect(()=>{
    store.dispatch(getUserId());
    store.dispatch(getGroupId());
    setUserDataLoaded(true);
  },[setUserDataLoaded])
  
  return (
    <Provider store={store}>
      {
        userDataLoaded &&  <Dashboard />
      } 
    </Provider>
  );
}

export default App;
