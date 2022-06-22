import { Card } from './Card'
import skill from './skill.module.css'
import js from './assets/js.png'
import html from './assets/html.png'
import css from './assets/css.png';
import node from './assets/node.svg'
import rea from './assets/react.png'
import redux from './assets/reduxs.svg'
import wpack from './assets/wpack.svg'

import git from './assets/git.svg'
import { Project } from './Project';
const Skill = () => {

    return(
    <section id='skill' className={skill.sbox}>
    <section className={skill.text}>
        <section className={skill.name}>
            <h1>Skillsets</h1>
        </section>

    </section>
    <section className={skill.skills}>
      

        
        <Card tech={'Frontend'}
        name= {'HTML'}
        image = {html}/>

        
        
        <Card tech={'Frontend'}
        name= {'CSS'}
        image={css}/>
        


        
        <Card
        tech={'Frontend'}
        name={'Javascript'}
        image={js}/>

        <Card
        tech={'Frontend'}
        name={'Git'}
        image={git}/>

        <Card
        tech={'Frontend'}
        name={'Webpack'}
        image={wpack}/>


        
        

        <Card tech={'Frontend'}
        name = {'React JS'}
        image={rea}/>

        <Card tech={'Frontend'}
        name = {'Redux'}
        image= {redux}/>
        


        
    </section>
        {/* <Project/> */}
    </section>
        
    )

}
export {Skill}