import styles from "../../styles/UI.module.css";

const StatBar = ({ stat, label }) => {

  return (
    <div className={styles.UI__statBar}>
        <div className={styles.UI__statBarBKG} style={{width: `${stat}%`}}></div>
        <p>{label}</p>
        <p className={styles.clipped} style={{clipPath: `polygon(0 0, ${stat}% 0, ${stat}% 100%, 0 100%)`}}>{label}</p>
    </div>
  )
};

export default StatBar;
