import React from 'react'
import PropTypes from 'prop-types';

const Profil = props=>{
    const handleName =e=>{
        e.preventDefault();
        alert(props.fullName)
    }
    return(
        <>
    <p style={{color:'red',margin:"2%"}}>fullName= {props.fullName}</p>
    <p>bio= {props.bio}</p>
    <p>profession= {props.profession}</p>
    <a style={{color:'green'}} href="#" onClick={handleName}>Click here to handle name</a><br/>
    <img src={props.children} alt="too lazy to add a pic but here is an alt"/>
    </>
    );
};

Profil.defaultProps = {
    fullName:"Dali",
    bio:"lazy student",
    profession:"student"
   };

   Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };

export default Profil;