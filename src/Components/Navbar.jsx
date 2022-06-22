import nav from '../Components/nav.module.css'





const Navbar = () => {
   
    
   
    
    return(
        <nav className={nav.head}>
           
            <section className={nav.link}>
                <section>
                    <a className={nav.home} href="#hero">Home</a>
                </section>
                <section>
                    <a className={nav.abt} href="#about">About</a>
                </section>
                <section>
                    <a className={nav.apps} href="#skill">Skills</a>
                </section>
                <section>
                    <a className={nav.work} href ="#project">Projects</a>
                </section>
                <section>
                    <a className={nav.contact} href="#contact">Contact</a>
                </section>
            </section>
        </nav>
    )
}
export {Navbar}