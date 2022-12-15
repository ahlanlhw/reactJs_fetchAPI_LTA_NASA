import React from 'react';
import Footer from './footer';
function About(){
    return (<>
        <title>Alan's react projects</title>
        <section className='about-page'>
        
            <h1>About</h1><br/>
                <img src = "https://media.licdn.com/dms/image/C5603AQFmRQNPp12aLA/profile-displayphoto-shrink_800_800/0/1642248118100?e=1676505600&v=beta&t=I0ylcTgVwiKFR26_7-z4fOaYrAE9L5wBkHfYFiDqqbA" alt = "" width="250" height = "250"/><br/>
                <br/>
                <p>
                    Hi Everyone,<br/>
                    I'm Alan, a curious individual who's passionate about data and emerging technologies.<br/>
                    Like everyone else I grew up with the Internet.<br/>
                    Unfortunately, my specialization isn't in comp science or web development.<br/>
                    As an Econs major, I've spent most of my career working as a research Analyst.<br/>
                    Fortunately or unfortunately I found joy in writing code and building products. <br/>
                    Now I'm a researcher turned data analyst,<br/>
                    building stuff for fun honing my JavaScript Skills.<br/>
                    Hopefully one day I'll be able to work as a Full Stack Engineer,<br/>
                    and eventually start my own indie venture. <br/>
                    Right now my focus is developing my portfolio, <br/>
                    eventually piecing together the different projects that I've done <br/>
                    reusing some of them to quickly build out products.
                    <br/><hr/><br/>
                    <a href = "https://www.linkedin.com/in/alanlhw" >LinkedIn</a>  ||  <a href = "https://github.com/ahlanlhw/" >GitHub</a>  ||  <a href= "mailto:ahlanlhw@gmail.com"> Email</a>
                    <Footer/>
                </p>
        </section>

    </>)
};

export default About;