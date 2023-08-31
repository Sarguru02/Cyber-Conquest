import React from "react";
import "./Board.css";
import StatsPane from "./StatsPane";
import CardDetails from "./CardDetails";

const Board = () => {
  async function rollDice(){
    "use server"
    return 0;
  }
  return (
    <div className="flex">
    <div className="board-container">
      <div className="table">
        <div className="board">
          <div className="center">
            <h1 className="title">Cyber Conquest</h1>
            <CardDetails />
            <div
                className="
              dice-container"
                onClick={rollDice}
              >
                {dice1 !== 0 ? (
                  <img
                    src={`/dice${dice1}.png`}
                    alt=""
                    className="dice-image"
                  />
                ) : (
                  <img
                    src={`/dice1.png`}
                    alt=""
                    className="dice-image"
                  />
                )}
                {dice2 !== 0 ? (
                  <img
                    src={`/dice${dice2}.png`}
                    alt=""
                    className="dice-image"
                  />
                ) : (
                  <img
                    src={`/dice1.png`}
                    alt=""
                    className="dice-image"
                  />
                )}
              </div>
          </div>
          <div className="space corner go">
            <div className="container">
              <div className="instructions">
                Collect $200.00 salary as you pass
              </div>
              <div className="go-word">go</div>
            </div>
            <div className="arrow fa fa-long-arrow-left" />
          </div>
          <div className="row horizontal-row bottom-row">
            <div className="space property">
              <div className="container">
                <div className="color-bar light-blue" />
                <div className="name">Connecticut Avenue</div>
                <div className="price">PRICE $120</div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar light-blue" />
                <div className="name">Vermont Avenue</div>
                <div className="price">Price $100</div>
              </div>
            </div>
            <div className="space chance">
              <div className="container">
                <div className="name">Chance</div>
                <i className="drawing fa fa-question" />
              </div>
            </div>
            <div className="space railroad">
              <div className="container">
                <div className="name">Reading Railroad</div>
                <i className="drawing fa fa-subway" />
                <div className="price">Price $200</div>
              </div>
            </div>
            <div className="space fee income-tax">
              <div className="container">
                <div className="name">Income Tax</div>
                <div className="diamond" />
                <div className="instructions">
                  Pay 10%
                  <br />
                  or
                  <br />
                  $200
                </div>
              </div>
            </div>
            <div className="space community-chest">
              <div className="container">
                <div className="name">Community Chest</div>
                <i className="drawing fa fa-cube" />
                <div className="instructions">
                  Follow instructions on top card
                </div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar dark-purple" />
                <div className="name three-line-name">
                  Mediter-
                  <br />
                  ranean
                  <br />
                  Avenue
                </div>
                <div className="price">Price $50</div>
              </div>
            </div>
          </div>
          <div className="space corner jail">
            <div className="just">Just</div>
            <div className="drawing">
              <div className="container">
                <div className="name">In</div>
                <div className="window">
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <i className="person fa fa-frown-o" />
                </div>
                <div className="name">Jail</div>
              </div>
            </div>
            <div className="visiting">Visiting</div>
          </div>
          <div className="row vertical-row left-row">
            <div className="space property">
              <div className="container">
                <div className="color-bar orange" />
                <div className="name">Tennessee Avenue</div>
                <div className="price">Price $180</div>
              </div>
            </div>
            <div className="space community-chest">
              <div className="container">
                <div className="name">Community Chest</div>
                <i className="drawing fa fa-cube" />
                <div className="instructions">
                  Follow instructions on top card
                </div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar orange" />
                <div className="name">St. James Avenue</div>
                <div className="price">Price $180</div>
              </div>
            </div>
            <div className="space railroad">
              <div className="container">
                <div className="name long-name">Pennsylvania Railroad</div>
                <i className="drawing fa fa-subway" />
                <div className="price">Price $200</div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar purple" />
                <div className="name">States Avenue</div>
                <div className="price">Price $140</div>
              </div>
            </div>
            <div className="space utility electric-company">
              <div className="container">
                <div className="name">Electric Company</div>
                <i className="drawing fa fa-lightbulb-o" />
                <div className="price">Price $150</div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar purple" />
                <div className="name">St. Charles Place</div>
                <div className="price">Price $140</div>
              </div>
            </div>
          </div>
          <div className="space corner free-parking">
            <div className="container">
              <div className="name">Free</div>
              <i className="drawing fa fa-car" />
              <div className="name">Parking</div>
            </div>
          </div>
          <div className="row horizontal-row top-row">
            <div className="space property">
              <div className="container">
                <div className="color-bar red" />
                <div className="name">Kentucky Avenue</div>
                <div className="price">Price $220</div>
              </div>
            </div>
            <div className="space chance">
              <div className="container">
                <div className="name">Chance</div>
                <i className="drawing fa fa-question blue" />
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar red" />
                <div className="name">Indiana Avenue</div>
                <div className="price">Price $220</div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar red" />
                <div className="name">Illinois Avenue</div>
                <div className="price">Price $200</div>
              </div>
            </div>
            <div className="space railroad">
              <div className="container">
                <div className="name">B &amp; O Railroad</div>
                <i className="drawing fa fa-subway" />
                <div className="price">Price $200</div>
              </div>
            </div>
            <div className="space utility waterworks">
              <div className="container">
                <div className="name">Waterworks</div>
                <div className="space property"></div>
                <i className="drawing fa fa-tint" />
                <div className="price">Price $120</div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar yellow" />
                <div className="name">Marvin Gardens</div>
                <div className="price">Price $280</div>
              </div>
            </div>
          </div>
          <div className="space corner go-to-jail">
            <div className="container">
              <div className="name">Go To</div>
              <i className="drawing fa fa-gavel" />
              <div className="name">Jail</div>
            </div>
          </div>
          <div className="row vertical-row right-row">
            <div className="space property">
              <div className="container">
                <div className="color-bar green" />
                <div className="name three-line-name">
                  North Carolina Avenue
                </div>
                <div className="price">Price $300</div>
              </div>
            </div>
            <div className="space community-chest">
              <div className="container">
                <div className="name">Community Chest</div>
                <i className="drawing fa fa-cube" />
                <div className="instructions">
                  Follow instructions on top card
                </div>
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar green" />
                <div className="name long-name">Pennsylvania Avenue</div>
                <div className="price">Price $320</div>
              </div>
            </div>
            <div className="space railroad">
              <div className="container">
                <div className="name">Short Line</div>
                <i className="drawing fa fa-subway" />
                <div className="price">Price $200</div>
              </div>
            </div>
            <div className="space chance">
              <div className="container">
                <div className="name">Chance</div>
                <i className="drawing fa fa-question" />
              </div>
            </div>
            <div className="space property">
              <div className="container">
                <div className="color-bar dark-blue" />
                <div className="name">Park Place</div>
                <div className="price">Price $350</div>
              </div>
            </div>
            <div className="space fee luxury-tax">
              <div className="container">
                <div className="name">Luxury Tax</div>
                <div className="drawing fa fa-diamond" />
                <div className="instructions">Pay $75.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StatsPane />
    </div>
  );
};

export default Board;
