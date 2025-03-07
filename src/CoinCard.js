import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
  render() {
    return (
      <div
        className="coin-card"
        onClick={() => {
          this.props.onCoinClick(this.props.coinText);
          this.props.incrementCounter(this.props.coinText);
        }}
      >
        <img
          className="coin-image"
          src={this.props.imageName} 
          alt={this.props.coinText}
        />
        <span className="coin-text">{this.props.coinText}</span>
        {this.props.coinCounter > 0 ? (
          <span className="coin-badge">{this.props.coinCounter}</span>
        ) : null}
      </div>
    );
  }
}
