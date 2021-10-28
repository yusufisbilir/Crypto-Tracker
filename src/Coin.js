import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin__container">
      <div className="coin__row">
        <div className="coin__coin">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <div className="coin__data">
          <p className="coin__price">₺{price}</p>
          <p className="coin__volume">₺{volume.toLocaleString()}</p>
          <p className={`coin__percent ${priceChange < 0 ? "red" : "green"}`}>
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin__marketcap">
            Mkt Cap: ₺{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
