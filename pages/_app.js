import "../styles/global.css";
import React, { useState, useEffect } from "react";
import fakePet from "../fakePet";

export default function MyApp({ Component, pageProps }) {

  const [pet, set_pet] = useState({});

  function updatePet(petState) {
    localStorage.setItem("submittedPet", JSON.stringify(petState))
  }

  function clearPet() {
    localStorage.setItem("submittedPet", "{}");
    window.location.reload();
  }

  useEffect(() => {
    let storedPet = JSON.parse(localStorage.getItem("submittedPet"));
    // console.log("this is the stored pet: ", storedPet);

    if (storedPet["petName"]) {
      console.log("got a pet", storedPet)
      storedPet = JSON.parse(localStorage.getItem("submittedPet"));
      if(!storedPet.image) {
        storedPet.image = fakePet.image;
      }
    } else {
      storedPet = fakePet;
    }

    set_pet(storedPet)

  }, [])  

  return (
    <Component {...pageProps} pet={pet} set_pet={set_pet} updatePet={updatePet} clearPet={clearPet}/>
  )

}