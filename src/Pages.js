import React from "react";

class Line extends React.Component {
  render() {
    return <div className="Line"> {this.props.children} </div>;
  }
}

var count = 200;
var defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio, opts) {
  window.confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  validatePage(expected, value, page) {
    if (expected === value.toLowerCase()) {
      console.log(page);
    }
    if (expected === value.toLowerCase() && this.state.page < page) {
      this.setState({
        page,
      });
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }

  render() {
    console.log(this.state);
    if (this.state.page === 0) {
      return (
        <div>
          <Line>
            Hallo Sexi Lexi (oder Eli),
            <br /> dein Geschenk wartet am Ende auf dich 😘.
            <br />
            <br /> Bist du bereit?
          </Line>
          <input
            size="2"
            maxLength="2"
            placeholder="?"
            onChange={(e) => this.validatePage("ja", e.target.value, 1)}
          ></input>
        </div>
      );
    } else {
      return (
        <div>
          <Line>
            Ich habe dich wirklich gern,
            <br /> deshalb liegt mir dir kein Geschenk zu schenken sehr&nbsp;
            <input
              size="4"
              maxLength="4"
              placeholder="?"
              onChange={(e) => this.validatePage("fern", e.target.value, 2)}
            ></input>
          </Line>
          {this.state.page > 1 && (
            <Line>
              Ich will dich jetzt nicht hetzen,
              <br />
              aber könntest du bitte リンゴ auf Emoji übersetzten?&nbsp;
              <input
                size="2"
                maxLength="2"
                placeholder="?"
                onChange={(e) => this.validatePage("🍎", e.target.value, 3)}
              ></input>
            </Line>
          )}
          {this.state.page > 2 && (
            <Line>
              Von welcher Marke willst du am liebsten einen Ring geschenkt
              bekommen (verbindlich)?&nbsp;
              <input
                size="3"
                maxLength="3"
                placeholder="?"
                onChange={(e) => this.validatePage("h&m", e.target.value, 4)}
              ></input>
            </Line>
          )}

          {this.state.page > 3 && (
            <Line>
              Achja und was müssen wir denn laut Flo umbedingt machen?&nbsp;
              <input
                size="7"
                maxLength="7"
                placeholder="?"
                onChange={(e) =>
                  this.validatePage("wachsen", e.target.value, 5)
                }
              ></input>
            </Line>
          )}
          {this.state.page > 4 && (
            <Line>
              Hast du den Durchblick? Zwei Sauerstoff und ein Silizium
              ergeben?&nbsp;
              <input
                size="4"
                maxLength="4"
                placeholder="?"
                onChange={(e) => this.validatePage("glas", e.target.value, 6)}
              ></input>
            </Line>
          )}
          {this.state.page > 5 && (
            <Line>
              Es ist klar, dass ich dir das heute 01110011 01100001 01100111
              <br />
              aber es ist auch klar, dass ich dich&nbsp;
              <input
                size="26"
                maxLength="26"
                placeholder="?"
                onChange={(e) =>
                  this.validatePage(
                    "01101101 01100001 01100111",
                    e.target.value,
                    7
                  )
                }
              ></input>
            </Line>
          )}
          {this.state.page > 6 && (
            <Line>
              Was ist eine Sammelbezeichnung für die französischsprachigen
              Gebiete der Schweiz laut Flö?&nbsp;
              <input
                size="9"
                maxLength="9"
                placeholder="?"
                onChange={(e) =>
                  this.validatePage("normandie", e.target.value, 8)
                }
              ></input>
            </Line>
          )}
          {this.state.page > 7 && (
            <Line>
              Wieviele Minuten sind heute schon vergangen?&nbsp;
              <input
                size="4"
                maxLength="4"
                placeholder="?"
                onChange={(e) => {
                  const d = new Date();
                  this.validatePage(
                    (d.getHours() * 60 + d.getMinutes()).toString(),
                    e.target.value,
                    9
                  );
                }}
              ></input>
            </Line>
          )}
          {this.state.page > 8 && (
            <Line>
              Und zu guter letzt: Wer hat dich gerne?&nbsp;
              <input
                size="3"
                maxLength="3"
                placeholder="?"
                onChange={(e) => this.validatePage("flo", e.target.value, 10)}
              ></input>
            </Line>
          )}
          {this.state.page > 9 && (
            <Line>
              Bravo Frau Leyer!
              <br />
              Sie haben es geschafft.
              <br />
              Ihr Geschenk befindet sich in Herr Gaugers Rucksack.
              <br />
              ❤️
            </Line>
          )}
        </div>
      );
    }
  }
}

export default Pages;
