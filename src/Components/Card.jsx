import cs from './card.module.css'
import React from 'react';



const Card = ({name, image}) => {
    return(
        
        <section className = {cs.card}>
            
            <section className = {cs.layout}>
               
                
                <section className={cs.image}>
                    <img src={image} alt="some" />
                </section>
                <section className={cs.sname}>
                    <h1>{name}</h1>
                </section>
            </section>
        </section>
    )
}

export {Card}