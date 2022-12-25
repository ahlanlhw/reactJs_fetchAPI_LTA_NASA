import GetNASAPicofDay from './nasa_apod';

function OutputImages(){
    return(
        <GetNASAPicofDay/>.map((img)=>{
            <>
                <img src={img.url} alt={img.title}/>
            </>
        })
    )
}