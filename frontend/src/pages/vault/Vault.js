import React, { useEffect, useState } from "react";
import GUCard from "../../components/gu-card/GUCard";
import "./vault.css";

export default function Vault() {
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [selectedGod, setSelectedGod] = useState("All");
  const [selectedQuality, setSelectedQuality] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedSet, setSelectedSet] = useState("All");

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
          setCards(Object.values(cardsObj));
        });
      } else {
        console.log("crap! fetch went bad");
      }
      setIsLoaded(true);
    };
    getCards();
  }, []);

  useEffect(() => {
    let filteredCards = cards;

    if (selectedGod !== "All") {
      filteredCards = filteredCards.filter(
        (card) => card.metadata.god === selectedGod
      );
    }

    if (selectedQuality !== "All") {
      filteredCards = filteredCards.filter(
        (card) => card.metadata.quality === selectedQuality
      );
    }

    if (selectedRarity !== "All") {
      filteredCards = filteredCards.filter(
        (card) => card.metadata.rarity === selectedRarity
      );
    }

    if (selectedSet !== "All") {
      filteredCards = filteredCards.filter(
        (card) => card.metadata.set === selectedSet
      );
    }

    setFiltered(filteredCards);
  }, [selectedGod, selectedQuality, selectedRarity, selectedSet, cards]);

  function handleGodFilterClick(god) {
    setSelectedGod(god);
  }

  function handleRarityFilterClick(rarity) {
    if (rarity !== "All") {
      setSelectedRarity(rarity);
    } else {
      setSelectedRarity("All");
    }
  }

  function handleQualityFilterClick(quality) {
    if (quality !== "All") {
      setSelectedQuality(quality);
    } else {
      setSelectedQuality("All");
    }
  }

  function handleSetFilterClick(set) {
    if (set !== "All") {
      setSelectedSet(set);
    } else {
      setSelectedSet("All");
    }
  }

  return (
    <div>
      <div className="filters">
        <div className="filter-box">
          {["All", "neutral", "nature", "death", "war", "magic", "deception"].map((god) => (
            <button
              key={god}
              onClick={() => handleGodFilterClick(god)}
              className={
                selectedGod === god ? "button current-filter" : "button"
              }
            >
              {god[0].toUpperCase() + god.slice(1)}
            </button>
          ))}
        </div>
        <div className="filter-box">
          {["All", "Meteorite", "Shadow", "Gold", "Diamond"].map((quality) => (
            <button
              key={quality}
              onClick={() => handleQualityFilterClick(quality)}
              className={
                selectedQuality === quality ? "button current-filter" : "button"
              }
            >
              {quality[0].toUpperCase() + quality.slice(1)}
            </button>
          ))}
        </div>
        <div className="filter-box">
          {["All", "common", "rare", "epic", "legendary"].map(
            (rarity) => (
              <button
                key={rarity}
                onClick={() => handleRarityFilterClick(rarity)}
                className={
                  selectedRarity === rarity ? "button current-filter" : "button"
                }
              >
                {rarity[0].toUpperCase() + rarity.slice(1)}
              </button>
            )
          )}
        </div>
        <div className="filter-box">
          {[
            "All",
            "genesis",
            "etherbots",
            "verdict",
            "wander",
            "wolf",
          ].map((set) => (
            <button
              key={set}
              onClick={() => handleSetFilterClick(set)}
              className={
                selectedSet === set ? "button current-filter" : "button"
              }
            >
              {set[0].toUpperCase() + set.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="vault">
        {!isLoaded ? (
          <h1>...Loading</h1>
        ) : filtered.length > 0 ? (
          cards &&
          filtered.map((card) => (
            <li key={card.image_url}>
              <GUCard
                imgUrl={card.image_url}
                name={card.name}
                quantity={card.count}
              />
            </li>
          ))
        ) : (
          <div className="nothing-filtered">Nothing to see here!</div>
        )}
      </div>
    </div>
  );
}
