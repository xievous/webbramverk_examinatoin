import { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../card/Card";
import "./cardstack.css";

function Cardstack() {
  const displayCards = useSelector((state) => state.card);

  const [firstCard, setFirstCard] = useState(
    displayCards.length > 0 ? displayCards[0] : null
  );
  const [remainingCards, setRemainingCards] = useState(displayCards.slice(1));

  const handleCardClick = (clickedCardIndex) => {
    const clickedCard = remainingCards[clickedCardIndex];

    setRemainingCards((prevRemainingCards) => {
      const updatedRemainingCards = [...prevRemainingCards];
      updatedRemainingCards[clickedCardIndex] = firstCard;
      return updatedRemainingCards;
    });

    setFirstCard(clickedCard);
  };

  const displayCardComponents = remainingCards.map((cards, index) => {
    return (
      <Card cards={cards} key={index} onClick={() => handleCardClick(index)} />
    );
  });

  return (
    <section>
      <article>{firstCard && <Card cards={firstCard} />}</article>
      <article className="cardstack">{displayCardComponents}</article>
    </section>
  );
}

export default Cardstack;
