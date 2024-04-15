import React, { useState } from "react";
import "./cardform.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCard } from "../../reducer/cardReducer";

export function CardForm(props) {
  const { setCardNumber, setCardHolder, setCardValidation, setVendor } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cards, setCards] = useState({
    cardNumber: "",
    cardHolder: "",
    validation: "",
    ccv: "",
    vendors: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setCards((prevCards) => ({
      ...prevCards,
      [id]: value,
    }));

    if (id === "cardNumber") {
      setCardNumber(value);
    } else if (id === "cardHolder") {
      setCardHolder(value);
    } else if (id === "validation") {
      setCardValidation(value);
    } else if (id === "vendors") {
      setVendor(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting with cards:", cards);
    dispatch(addCard(cards));
    navigate("/", { state: { cards } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <article className="form_card_info">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={cards.cardNumber}
          onChange={handleChange}
        />
      </article>

      <article className="form_card_info">
        <label htmlFor="cardHolder">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardHolder"
          placeholder="Firstname Lastname"
          value={cards.cardHolder}
          onChange={handleChange}
        />
      </article>

      <article className="form_valid_ccv">
        <div className="form_card_third">
          <label htmlFor="validation">VALID THRU</label>
          <input
            type="text"
            id="validation"
            placeholder="XX / XX"
            value={cards.validation}
            onChange={handleChange}
          />
        </div>
        <div className="form_card_third">
          <label htmlFor="ccv">CCV</label>
          <input
            type="text"
            id="ccv"
            placeholder="XXX"
            value={cards.ccv}
            onChange={handleChange}
          />
        </div>
      </article>

      <article className="form_card_info">
        <label htmlFor="vendors">VENDORS</label>
        <select id="vendors" value={cards.vendors} onChange={handleChange}>
          <option value="" disabled>
            {" "}
            {/* Gör en slags placeholder i min select */}
            --Select a vendor--
          </option>
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
