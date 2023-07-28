import styles from "../../styles/Pet.module.css";
import StatBar from "../statBar/StatBar";

const Pet = ({pet}) => {
    
    return (
        <div className={styles.pet}>
            <h2>{pet.petName}</h2>
            <img className={styles.pet__image} src={pet.image}/>
            <StatBar stat={pet.health} label="HEALTH"/>
            <StatBar stat={pet.happiness} label="HAPPINESS"/>
            <p>Age: {pet.age}</p>
        </div>
    )
}

export default Pet;