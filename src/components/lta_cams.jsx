import React from 'react';
import Ltaimg from './lta_img';
import GetImg from './lta_cameras'

function LtaCams(){
    return (Ltaimg()['content'].map((img)=><GetImg key = {img.key} src = {img.src} alt = {img.alt} width = {img.width} height = {img.height}/>))
};

export default LtaCams;