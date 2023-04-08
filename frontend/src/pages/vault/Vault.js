import React, { useEffect, useState } from "react";
import GUCard from "../../components/gu-card/GUCard";
import "./vault.css";

export default function Vault() {
  const [cards, setCards] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getCards = async () => {
      const response = await fetch(
        "https://api.x.immutable.com/v1/assets?page_size=8888&order_by=name&direction=desc&user=0x1B6a504680cc1Da51A03e4Cc2E9d50A6B958afec&status=imx&sell_orders=false&buy_orders=false&include_fees=true&collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
      );

      if (response.ok) {
        const data = await response.json();
        const cardsArr = data.result;
        const cardsObj = {};
        // set the keys in this object to the image urls in order to count the unique cards
        cardsArr.forEach((card) => {
          const img = card.image_url;
          if (cardsObj[img]) {
            //if exists increment
            cardsObj[img]["count"] += 1;
          } else {
            // otherwise set the card and the count to one
            cardsObj[img] = card;
            cardsObj[img]["count"] = 1;
          }
          setCards(cardsObj);
        });
      } else {
        console.log("crap! fetch went bad");
      }
      setIsLoaded(true);
    };
    getCards();
  }, []);
  return (
    <div className="vault">
      {!isLoaded ? (
        <h1>...Loading</h1>
      ) : (
        cards &&
        Object.values(cards).map((card) => (
          <li key={card.image_url}>
            <GUCard
              imgUrl={card.image_url}
              name={card.name}
              quantity={card.count}
            />
          </li>
        ))
      )}
    </div>
  );
}
