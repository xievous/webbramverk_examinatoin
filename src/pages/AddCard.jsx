import React, { useState } from "react";
import "./addcard.css";
import { useSelector } from "react-redux";
import { CardForm } from "../components/cardform/CardForm";
import { Card } from "../components/card/Card";
import { Top } from "../components/top/Top";

// Jag skapar en state för allting jag vill uppdatera dynamiskt, sen har jag min displayCards där jag skickar vidare min state med useSelector till min card komponent.
// Card komponenten är uppbyggd att visa ena eller andra, det var så jag tänkte iallafall.

function AddCard() {
  const displayCards = useSelector((state) => state.card);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardValidation, setCardValidation] = useState("");
  const [vendor, setVendor] = useState("");
  const top = "addcard";

  return (
    <main>
      <Top top={top} />
      <Card // Propsar vidare mina useStates
        cards={displayCards}
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        cardValidation={cardValidation}
        vendor={vendor}
      />
      <CardForm // Propsar vidare mina useStates funktioner så jag kan använda dom i cardform.
        setCardNumber={setCardNumber}
        setCardHolder={setCardHolder}
        setCardValidation={setCardValidation}
        setVendor={setVendor}
      />
    </main>
  );
}

export default AddCard;
