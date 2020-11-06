// import React, { Component } from 'react';
import React from 'react';

const App = () =>{
  const profiles =[
    {name: "taro" ,old: 10},
    {name: "naoko", old: 5},
    {name: "kikko"}
  ]

  return(
    <div>
      {
        profiles.map((profile, index)=>{
          return  <User name={profile.name} old={profile.old} key={index}/>
        })
      }
    </div>
  )
}

const User = (props)=>{
  return (
  <div>
    HI i am {props.name}, {props.old}old
  </div>
  )}

  User.defaultProps = {
    old: 1
  }

export default App;
