import React, { useState } from "react";
import "./cardform.css";
import { useDispatch } from "react-redux";
import { addCard } from "../../reducer/cardReducer";

export function CardForm() {
  const [cards, setCards] = useState({
    cardNumber: "",
    cardHolder: "",
    validation: "",
    ccv: "",
    vendors: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log("handleChange runs!");
    setCards({
      ...cards,
      [id]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit runs!");
    dispatch(addCard(cards));
  }
  return (
    <form onSubmit={handleSubmit}>
      <article className="form_card_info">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="cardNumber"
          value={cards.cardNumber}
          onChange={handleChange}
        />
      </article>

      <article className="form_card_info">
        <label htmlFor="cardHolder">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardHolder"
          value={cards.cardHolder}
          onChange={handleChange}
        />
      </article>

      <article className="form_valid_ccv">
        <div className="form_card_info">
          <label htmlFor="validation">VALID THRU</label>
          <input
            type="text"
            id="validation"
            value={cards.validation}
            onChange={handleChange}
          />
        </div>
        <div className="form_card_info">
          <label htmlFor="ccv">CCV</label>
          <input
            type="text"
            id="ccv"
            value={cards.ccv}
            onChange={handleChange}
          />
        </div>
      </article>

      <article>
        <label htmlFor="vendors">VENDORS</label>
        <select id="vendors" value={cards.vendors} onChange={handleChange}>
          <option value="btc">Bitcoin</option>
          <option value="ninja_bank">Ninja Bank</option>
          <option value="blockchain_inc">Blockchan Inc</option>
          <option value="evil_corp">Evil Corp</option>
        </select>
      </article>
      <button type="submit">Add Card</button>
    </form>
  );
}
