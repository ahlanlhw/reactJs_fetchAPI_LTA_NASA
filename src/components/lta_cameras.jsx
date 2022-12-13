import React from 'react';

function GetImg(props){
    return(
      <img key = {props.src} src = {props.src} alt = {props.alt} width = {props.width} height = {props.height}/>
    )
  };
export default GetImg;
