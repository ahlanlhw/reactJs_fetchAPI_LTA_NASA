import GetNASAPicofDay from '../components/nasa_apod';
function APOD(){
    return( 
        <>
        <p>
        This is a script generated collage from NASA's open API from the last 30 days,<br/>
        all copyrights belong to the individual artists and can be found on <br/>
        <a href="https://apod.nasa.gov/apod/astropix.html"> NASA's Picture of the Day.</a><br/>
        Hover over the images to find out more details from the artists.
        </p>
        <div className="img_Container">
            <GetNASAPicofDay/>
        </div>
        </>
    )
}
export default APOD;