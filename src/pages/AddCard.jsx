import React, { useState } from "react";
import "./addcard.css";
import { CardForm } from "../components/cardform/CardForm";
import { Card } from "../components/card/Card";

function AddCard() {
  return (
    <>
      <Card />
      <div>ADD A NEW BANK CARD</div>
      <CardForm />
    </>
  );
}

export default AddCard;
