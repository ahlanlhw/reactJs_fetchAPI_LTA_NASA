import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Ltaimg from './lta_img';

function GetImg(props){
  return(
    <img src = {props.src} alt = {props.alt} width = {props.width} height = {props.height}/>
  )
};
function App() {
  return (
    <div className="App">
      <Header/>
      {Ltaimg()['content'].map((img)=><GetImg src = {img.src} alt = {img.alt} width = {img.width} height = {img.height}/>)}
      <Footer/>
    </div>
  );
}

export default App;
