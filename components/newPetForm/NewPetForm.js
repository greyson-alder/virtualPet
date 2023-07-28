import styles from "../../styles/NewPetForm.module.css";
import { useRouter } from 'next/router';

const NewPetForm = () => {

  const router = useRouter();

  function handleFormSubmit(e) {
      // e.preventDefault();
      const petName = e.target["newPet__petName"].value;
      const petImage = e.target["newPet__image"].value;

      const newPet = {
          petName: petName,
          image: petImage,
          health: 50,
          happiness: 50,
          age: 0,
          userSubmitted: true
      }

      

      localStorage.setItem("submittedPet", JSON.stringify(newPet))

      // console.log("saving this ", localStorage.getItem("submittedPet"))

      router.push("/")

  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.newPetForm}>
        <label htmlFor="newPet__petName">Name:</label>
        <input type="text" id="newPet__petName"></input>

        <label htmlFor="newPet__image">Image (expects URL)</label>
        <input type="text" id="newPet__image"></input>

        <input type="submit"/>
    </form>
  )
}

export default NewPetForm