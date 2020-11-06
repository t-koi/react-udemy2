import React from 'react';
import PropTypes from "prop-types"

const App = () =>{
  const profiles =[
    {name: "taro" ,old: 10},
    {name: "naoko", old: 3},
    {name: "tamiko", old: 4}
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

User.propTypes = {
  name: PropTypes.string,
  old: PropTypes.number.isRequired
}
export default App;
