import ab from './about.module.css'
import ayush from '../Components/assets/ayush0.jpg'

const About = () =>{
    return(
        <div id='about' className={ab.div}>
            <section className={ab.pos}>
    
                <section className={ab.numtext}> 
                <h1>About Me</h1>
                </section>
            </section>
            <section className={ab.box}>
                <section className={ab.img}>
                    <img src={ayush} alt="" />
                </section>
                <section className={ab.desc}>
                    <p> My name is <span style={{color: 'aqua'}}>Ayush Yadav</span>, a graduate in computer science, curious developer who started his journey from android.
                        <span style={{display:'block', marginTop:'0.7rem'}}>So here comes my story about tech, when i first resolve an issue of bootloop
                        in my bricked android device, from there i got curious about android and android
                        app development so, started to 
                        build my first android app and with just few 
                        basic knowledge i developed my first android app. 
                        But later i got interested in web and specially javascript 
                        and that's when i started a real programming path. 
                        I am well versed in javascript, react, nodejs and little familiar with android framework. In free time you will find me reading blogs and articles about history and technology.</span></p>
                </section>
            
            </section>
            
        </div>
    )
}
export {About}