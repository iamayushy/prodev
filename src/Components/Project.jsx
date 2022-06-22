import { Carp } from './Carp';
import news from './assets/dyno.png'
import pal from './assets/pal.png'
import del from './assets/deluxe.png'
import pep from './assets/pepper.png'
import pro from './pro.module.css';
const Project = () => {
    return (
        <section id='project' className={pro.bg}>
            <section className={pro.cont}>
                <section className={pro.text}>
                    <h1>Projects</h1>
                </section>
                <section className={pro.list}>
                    {/* <section className={pro.dyno}>
                    <section className={pro.dimg}>
                        <img src={news} alt="dynonews"/>
                    </section>
                    <section className={pro.dtext}>
                        
                        <ul>
                            <p>Dyno - Short News App</p>
                            <li>An android which displays the latest news from all across the world.</li>
                            <li>Developed Using a news api.</li>
                            <li>User is authenticated via firebase</li>
                        </ul>
                    </section>
                    <section className={pro.dlink}>
                        <a href="https://github.com/iamayushy/Dyno">Link</a>
                        <a href="https://github.com/iamayushy/Dyno">Github</a>
                    </section>
                 </section> */}

                    <section className={pro.dyno}>
                        <section className={pro.eimg}>
                            <img src={pep} alt="dynonews" />
                        </section>
                        <section className={pro.dtext}>

                            <ul>
                                <p>Pepperfry - A Furniture Site</p>
                                <li>This was a solo project build in 5 days.</li>
                                <li>One Can search product on the site. The data is limited to "sofa" & "table".</li>
                                <li>Filter feature is there to get the product based on the prefered brand.</li>
                                <li>Data for the product is being loaded from json-server.</li>
                                <li>Authentication is being developed Using Firebase</li>
                                <li>The state management is being done using redux. Which includes managing the flow of cart and wishlist of the site.</li>
                    

                            </ul>
                            <ul>
                                <p>Tech Stack</p>
                                <li>HTML, CSS and Mantine Library for modals and loaders</li>
                                <li>React & Redux</li>
                                <li>Javascript</li>
                                <p>Tools</p>
                                <li>Firebase & Git</li>
                            </ul>
                        </section>
                        <section className={pro.dlink}>
                            <a className={pro.link} href="https://pepper-gilt.vercel.app/" target="_blank">Link</a>
                            <a className={pro.git} href="https://github.com/iamayushy/pepperfry" target="_blank">Github</a>
                        </section>
                    </section>


                    <section className={pro.dyno}>
                        <section className={pro.eimg}>
                            <img src={del} alt="dynonews" />
                        </section>
                        <section className={pro.dtext}>

                            <ul>
                                <p>Deluxe - Hotel Page</p>
                                <li>A static website developed using html, css and javascript</li>
                                <li>It was a collaborative project developed in 5 days.</li>
                                <li>The website is responsive across all devices.</li>
                                <li>The home page and the restaurant page was developed by me.</li>
                            </ul>
                            <ul>
                                <p>Tech Stack</p>
                                <li>HTML & CSS</li>
                                <li>React & Redux</li>
                                <li>Javascript</li>
                            </ul>
                        </section>
                        <section className={pro.dlink}>
                            <a className={pro.link} href="https://shubham168.github.io/Delux-project/home/home.html" target="_blank">Link</a>
                            <a className={pro.git} href="https://github.com/Guptaji03/colorlib-deluxe" target="_blank">Github</a>
                        </section>
                    </section>
                    <section className={pro.dyno}>
                        <section className={pro.eimg}>
                            <img src={pal} alt="dynonews" />
                        </section>
                        <section className={pro.dtext}>

                            <ul>
                                <p>MyFitenesspal - React Fitness Site</p>
                                <li>A complete website developed using react and pure css.</li>
                                <li>It was a collaborative project developed in 6 days.</li>
                                <li>The website is responsive.</li>
                                <li>The home page, exercise page, routing was done by me.</li>

                            </ul>
                            <ul>
                                <p>Tech Stack</p>
                                <li>HTML & CSS</li>
                                <li>React</li>
                                <li>Javascript</li>
                            </ul>
                        </section>
                        <section className={pro.dlink}>
                            <a className={pro.link} href="https://fintess.vercel.app/" target="_blank">Link</a>
                            <a className={pro.git} href="https://github.com/iamayushy/myfitnesspal" target="_blank">Github</a>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
export { Project }