import Pet from "./Pet";
import styles from "../../styles/Pet.module.css";

const PetContainer = ({ pet }) => {

  return (
    <section className={styles.petContainer} data-usersubmitted={pet.userSubmitted}>
      <Pet pet={pet} />
      {pet.userSubmitted ? "" : <b>This is only an example pet and the values will not be saved between refreshes</b>}
    </section>
  );
};

export default PetContainer;
