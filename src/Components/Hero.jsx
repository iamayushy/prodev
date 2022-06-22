import hero from '../Components/hero.module.css'
import logo from '../logo.svg'
import cat from './assets/github.svg'
import linked from './assets/linkedin.svg'
const Hero = () => {
    return(
        <div id='hero' className={hero.div}>
            <section className={hero.box}>
                <section className={hero.text}>
                    <h1>Hi, I'm <span className={hero.name}>Ayush Yadav</span></h1>
                    <p>and I'm a <span className={hero.spec}>Frontend Web Developer</span></p>
                    <section className={hero.links}>
                        <a href='https://github.com/iamayushy' target="_blank"><img src={cat} alt="" /></a>
                        <a href="https://www.linkedin.com/in/ayushbbm" target="_blank"><img src={linked} alt="" /></a>
                    </section>
                    <section>
                        <a className={hero.resume}  href="https://drive.google.com/file/d/1fYKvFPaNdaGZp0a10aaXfjuS_-Ljh3hA/view?usp=sharing" target="_blank">GET MY RESUME</a>
                    </section>
                </section>
                <section className={hero.view}>
                    <section className={hero.card}>
                        <img src={logo} alt="" />
                    </section>
                </section>

            </section>

        </div>
    )
}
export {Hero}
