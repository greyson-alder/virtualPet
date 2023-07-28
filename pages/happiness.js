import Link from "next/link";
import Greeting from "../components/greeting";
import React, { useState, useEffect } from "react";
import FruitGameContainer from "../components/fruitGame/FruitGameContainer";
import Header from "../components/header/Header";

const happiness = ({pet, set_pet}) => {

  return (
    <>
        <Header/>
        <h2>{pet.petName} - happiness: {pet.happiness}</h2>
        <FruitGameContainer />
        <Link href="/">
          Return to Home
        </Link>
    </>
  )
}

export default happiness