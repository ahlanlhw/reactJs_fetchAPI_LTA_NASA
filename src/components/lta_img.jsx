import React, { useEffect, useState } from 'react';

const Ltaimg = function Ltaimg() {
    const [content, setContent] = useState([]);
    const API = "https://api.data.gov.sg/v1/transport/traffic-images";
    const l = [];
    useEffect(() => {
        async function getData(){
            const req = fetch(API);
            const res = await req;
            const parsed = await res.json();
            const data = parsed['items'][0]['cameras'];

            // console.log(Object.entries(data));
            // console.log(data.forEach((k)=>{l.push({"src":k['image'],"alt":""})}));
            // console.log(data.forEach((k)=>{l.push(k['image'])}));
            // data.forEach((k)=>{l.push(k['image'])})
            data.forEach((k)=>{//if (k["image_metadata"]["width"]>500)
            l.push({"src":k['image'],"alt":"", "width":"480","height":"270"});})
            setContent(l);
        }
        getData();
    },[]);

    return {content};
};

export default Ltaimg;