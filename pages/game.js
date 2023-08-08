import Link from "next/link";
import React, { useState, useEffect } from "react";
import SelectionGame from "../components/selectionGame/SelectionGame";
import Header from "../components/header/Header";

const happiness = ({pet, set_pet}) => {

  return (
    <>
        <Header/>
        <h2>{pet.petName} - happiness: {pet.happiness}</h2>
        <SelectionGame />
        <Link href="/">
          Return to Home
        </Link>
    </>
  )
}

export default happiness