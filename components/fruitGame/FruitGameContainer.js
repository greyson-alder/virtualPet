import styles from "../../styles/FruitGame.module.css";
import { useEffect, useState, useRef } from "react";

const FruitGameContainer = () => {
    const fruitRef = useRef(null);
    const basketRef = useRef(null);
    const [isVisible, set_isVisible] = useState(false);

    const [gameClock, set_gameClock] = useState(0);
    const [caughtApples, set_caughtApples] = useState(0);
    const [init, set_init] = useState(false);
    const [fruits, set_fruits] = useState([]);
    const [mappedFruits, set_mappedFruits] = useState("");

    // custom hook from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function spawnFruit() {
        // const newFruit = (getRandomInt(8) + 1) * 10;
        const newFruit = 50;
        const newFruitArray = [...fruits, newFruit];
        set_fruits(newFruitArray);
    }

    //   function removeFruitElement(fruitID) {
    //       console.log("input fruitID ", fruitID);
    //       let splicedFruits = fruits;
    //       splicedFruits.splice(fruitID, 1);
    //       console.log("spliced array ", splicedFruits);
    //       set_fruits(fruits.splice(fruitID, 1));
    //   }

    useInterval(() => {
        if (gameClock > 2) {
            set_init(true);
        }
        if (maxApples < 5 && init) {
            spawnFruit();
            set_maxApples(maxApples + 1);
        }
        set_gameClock(gameClock + 1);
    }, 1000);

    const visibilityCallback = (entries, observer) => {
        // console.log(entries)
        // console.log(entries. observer)
        const [entry] = entries;
        set_isVisible(entry.isIntersecting);
        if (entry.isIntersecting == true) {
            entry.target.setAttribute("data-active", "false");
            observer.unobserve(entry.target);
            console.log("tick");
        }
    };

    const options = {
        root: basketRef.current,
        rootMargin: "0px",
        threshold: 1.0,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(visibilityCallback, options);

        if (
            fruitRef.current &&
            fruitRef.current.getAttribute("data-active") == "true"
        ) {
            console.log("observer active");
            observer.observe(fruitRef.current);
        }

        return () => {
            if (fruitRef.current) {
                observer.unobserve(fruitRef.current);
            }
        };
    }, [fruitRef, options]);

    const [maxApples, set_maxApples] = useState(0);

    useEffect(() => {
        let _mappedFruits = fruits.length
            ? fruits.map((fruitCoord, id) => {
                  return (
                      <div
                          key={id}
                          className={styles.fruit}
                          style={{ "--fruitXCoord": `${fruitCoord}%` }}
                          ref={fruitRef}
                          data-active="true"
                          //   onAnimationEnd={() => removeFruitElement(fruits.indexOf(fruitCoord))}
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 467 467"
                          >
                              <path d="M427 128c-41-46-114-62-171-40-1-8-3-15-6-21 46 16 104-2 127-46C333-7 270 8 240 49c-21-31-55-48-57-49l-20 43s33 17 44 43c-68-23-155 6-187 73-16 34-15 70-10 106 5 33 13 65 27 96 17 38 44 73 83 91 35 17 76 19 114 9 60 16 123 0 164-48 29-33 44-75 53-117 13-58 18-121-24-168zM196 298s-20-2-32-25c-12-21-5-40-5-40s20 4 32 25c13 22 5 40 5 40zm108-25c-13 23-32 25-32 25s-9-18 4-40c12-21 32-25 32-25s7 19-4 40z" />
                          </svg>
                      </div>
                  );
              })
            : "";

        set_mappedFruits(_mappedFruits);
    }, [fruits]);

    return (
        <div className={styles.fruitGameContainer}>
            <h2>{init ? caughtApples : "Catch the fruit!"}</h2>
            <div className={styles.fruitGame}>
                <div className={styles.basket} ref={basketRef}>
                    {mappedFruits}
                </div>
            </div>
        </div>
    );
};

export default FruitGameContainer;
