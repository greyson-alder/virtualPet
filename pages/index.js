import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import React, { useState, useEffect } from "react";

import UserInterface from '../components/userInterface/UserInterface';

export default function Home({pet, set_pet, updatePet, clearPet}) {

  return (
    <div className={styles.container}>
      <Header/>
      <UserInterface pet={pet} set_pet={set_pet} updatePet={updatePet} clearPet={clearPet}/>
    </div>
  )
}
