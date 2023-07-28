import React, { useEffect } from 'react'
import PetContainer from '../pet/PetContainer';
import styles from '../../styles/UI.module.css'
import Link from 'next/link';

const UserInterface = ({pet, set_pet, updatePet, clearPet}) => {

  useEffect(() => {
    if (pet.userSubmitted) {
      updatePet(pet)
    }
  }, [pet])

  function handleHealthClick() {
    const updatedHealth = pet.health < 100 ? pet.health + 1 : 100;
    set_pet({...pet, health: updatedHealth})
  }

  function handleHappinessClick() {
    const updatedHealth = pet.happiness < 100 ? pet.happiness + 1 : 100;
    set_pet({...pet, happiness: updatedHealth})
  }

  return (
    <main>
        <PetContainer pet={pet} />
        <div className={styles.UI__buttons}>
          <button onClick={handleHealthClick}>Increase Health</button>
          <button onClick={handleHappinessClick}>Increase Happiness</button>
          <button onClick={clearPet}>Clear Pet</button>
        </div>
    </main>
  )
}

export default UserInterface