import { useEffect, useState } from 'react';
export default function GetNASAPicofDay() {
    const [p, setP] = useState([]);
    const daysAgo = 30;
    const startDate = new Date(Date.now() - daysAgo*(24*60*60*1000)).toISOString().split('T')[0];
    const url = "https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_NASA_API_KEY+"&start_date="+startDate;
    useEffect(
        ()=>{
            async function getData(){
                // const imgArray = []
                const req = await fetch(url);
                const json = await req.json();
                setP(json);
            }
            getData();
        }
        ,[])
        return p.map((img)=>{
            const img_url = img.date.replaceAll("-","").slice(2,);
        return (<>
        <a href={`https://apod.nasa.gov/apod/ap${img_url}.html`}
        title = {img.copyright+img.date+img.explanation}
        target="_blank" rel="noreferrer">
            <img className="Nasa-img"
            key = {img.url}
            src={img.url}
            alt={img.title}
            />
        </a>
        </>)
})
}