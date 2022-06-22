import con from './Components/cons.module.css'
import linkedin from '../src/Components/assets/linkedin.svg'
import git from '../src/Components/assets/github.svg'
import dial from '../src/Components/assets/phone.svg'


const Contact = () => {
    return(
        <div id="contact" className={con.bg}>
            <section className={con.box}>
            <h1 className={con.text}>Contact Me</h1>
            <h1 className={con.em}>ayushhuns@gmail.com</h1>
            <section className={con.img}>
            <a href="tel:7900038261" target="_blank"><img src={dial} alt="sime name" /></a>

                <a href="https://github.com/iamayushy" target="_blank"><img src={git} alt="some name" /></a>
                <a href="https://www.linkedin.com/in/ayushbbm/" target="_blank"><img src={linkedin} alt="sime name" /></a>
            </section>
            </section>
        </div>
    )
}
export {Contact}