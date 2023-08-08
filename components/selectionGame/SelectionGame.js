import styles from "../../styles/Game.module.css";
import { useEffect, useState } from "react";

const SelectionGame = () => {

    const [numberOfDots, set_numberOfDots] = useState(45);
    const [arrayOfDots, set_arrayOfDots] = useState([]);
    const [activeDot, set_activeDot] = useState(null);
    
    const [gameClock, set_gameClock] = useState(0);
    const [score, set_score] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const handleCorrectClick = () => {
        set_gameClock(gameClock+1);
        set_score(score+1);
    }
      
    useEffect(() => {
        for (let i=0; i<numberOfDots; i++){
            let newArray = arrayOfDots;
            newArray.push(i);
            set_arrayOfDots(newArray);
        }
    }, [])

    useEffect(() => {
        set_activeDot(getRandomInt(numberOfDots));
    }, [numberOfDots, gameClock])

    const mappedDots = arrayOfDots.map((item, index) => {
            return index == activeDot ? 
                <button key={index} className={`${styles.dot} ${styles.active}`} onClick={handleCorrectClick}>{item}</button> 
                : 
                <button key={index} className={styles.dot}>{item}</button>;
    })
    

  return (
    <div className={styles.dot__container}>
        {mappedDots}
        <h2>{score}</h2>
    </div>
  )
}

export default SelectionGame