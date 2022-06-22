import car  from './car.module.css'
const Carp = ({name, desc, img}) => {
    return(
        <section className={car.layout}>
            <section className={car.content}>
                <section className={car.img}>
                    <img src={img} alt="proimg" />
                </section>
                <section className={car.desc}>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <a className={car.l} href="#">Live</a>
                    <a className={car.g} href="#">Github</a>
                </section>
                <section className={car.link}>
                   
                </section>
            </section>
        </section>
    )
}
export {Carp}