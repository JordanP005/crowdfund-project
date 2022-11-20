import React from "react";
import ModalA from "./ModalA";
import Thank from "./Thank";

function App() {
  const [modalAstate, setModalAstate] = React.useState(false);
  const [bookState, setBookState] = React.useState(false);
  const [moneyState, setMoneyState] = React.useState(89914);
  const [backers, setBackers] = React.useState(5007);
  const [left, setLeft] = React.useState([101, 64, 0]);
  const [thankState, setThankState] = React.useState(false);

  function setModalA(event) {
    setModalAstate((prevValue) => !prevValue);
  }

  const bookstyle = {
    backgroundColor: "#DFDFDF",
    width: "fit-content",
    height: "5rem",
    border: "0px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "rgb(20 123 116)",
    paddingRight: "5rem",
  };

  const bookstyleSmall = {
    backgroundColor: "#DFDFDF",
    width: "fit-content",
    height: "4rem",
    border: "0px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "1rem",
    color: "rgb(20 123 116)",
    paddingRight: "4rem",
  };

  const bookstylePhone = {
    backgroundColor: "transparent",
    width: "4rem",
    height: "4rem",
    border: "0px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "0rem",
    color: "rgb(20 123 116)",
  };

  const bookimgstyle = {
    backgroundImage: "url(./images/icon-bookmark.svg)",
    boxShadow: "rgb(20 123 116 / 63%) 0px 0px 0px 2000px inset",
    borderRadius: "50%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    marginLeft: "-16%",
    marginTop: "-2%",
    height: "5rem",
    width: "5rem",
  };

  const bookimgstyleSmall = {
    backgroundImage: "url(./images/icon-bookmark.svg)",
    boxShadow: "rgb(20 123 116 / 63%) 0px 0px 0px 2000px inset",
    borderRadius: "50%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    marginLeft: "-25%",
    marginTop: "-8%",
    height: "4rem",
    width: "4rem",
  };

  const bookimgstylePhone = {
    backgroundImage: "url(./images/icon-bookmark.svg)",
    boxShadow: "rgb(20 123 116 / 63%) 0px 0px 0px 2000px inset",
    borderRadius: "50%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    marginTop: "-8%",
    height: "4rem",
    width: "4rem",
  };

  function handleBook() {
    setBookState((prevValue) => !prevValue);
  }

  const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
      height: 20,
      width: "100%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    };

    const fillerStyles = {
      height: "100%",
      width: `${Math.round(moneyState / 1000)}%`,
      backgroundColor: "hsl(176, 72%, 28%)",
      borderRadius: "inherit",
      textAlign: "right",
    };

    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold",
    };

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    );
  };

  const [burgerState, setBurgerState] = React.useState(false);

  function handleBurger() {
    setBurgerState((prevValue) => !prevValue);
  }

  const [anyStateBoo, setAnyStateBoo] = React.useState([false, false, false]);

  function anyState(event) {
    setAnyStateBoo((prevValue) => {
      prevValue.map((state, idx) =>
        idx === event.target.id - 1 ? true : state
      );
    });
  }

  function Burger() {
    return (
      <div className="modal-burger-overlay">
        <div className="burger-box">
          <div className="burger-item">
            <p>About</p>
          </div>
          <div className="burger-item">
            <p>Discover</p>
          </div>
          <div className="burger-item">
            <p>Get Started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="background">
      {burgerState ? <Burger /> : null}
      <nav>
        <h1>crowdfund</h1>
        <div className="nav-tags">
          {window.innerWidth <= 600 ? (
            <img
              src={
                burgerState
                  ? "images/icon-close-menu.svg"
                  : "images/icon-hamburger.svg"
              }
              style={{ zIndex: "4" }}
              onClick={handleBurger}
            />
          ) : (
            <div className="nav-tags">
              <p>About</p>
              <p>Discover</p>
              <p>Get Started</p>
            </div>
          )}
        </div>
      </nav>
      {modalAstate ? (
        <ModalA
          state={setModalA}
          left={left}
          setMoneyState={setMoneyState}
          setBackers={setBackers}
          setLeft={setLeft}
          setThankState={setThankState}
          anyState={anyStateBoo}
        />
      ) : null}
      {thankState ? <Thank setThankState={setThankState} /> : null}
      <div className="main-box">
        <div className="box-1">
          <div className="box-1-main">
            <img
              className="mastercraft-logo"
              src="images\logo-mastercraft.svg"
            />
            <div className="box-1-text">
              <h1>Masterful Bamboo Monitor Riser</h1>
              <br />
              <p>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain
              </p>
            </div>
            <div className="box-1-button">
              <button className="button-back" onClick={setModalA}>
                Back this project
              </button>
              <button
                className="button-bookmark"
                onClick={handleBook}
                style={
                  bookState
                    ? window.innerWidth <= 1600
                      ? window.innerWidth <= 600
                        ? bookstylePhone
                        : bookstyleSmall
                      : bookstyle
                    : null
                }
              >
                <button className="book">
                  <div
                    className="book-img"
                    style={
                      bookState
                        ? window.innerWidth <= 1600
                          ? window.innerWidth <= 600
                            ? bookimgstylePhone
                            : bookimgstyleSmall
                          : bookimgstyle
                        : null
                    }
                  ></div>
                </button>
                {bookState ? "bookmarked" : "bookmark"}
              </button>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="box-2-main">
            <div className="box-2-text">
              <div className="box-2-child-1">
                <h1>
                  $
                  {moneyState >= 100000
                    ? "100,000"
                    : moneyState.toLocaleString()}
                </h1>
                <p>of $100,000 backed</p>
              </div>
              <div className="box-2-child-2">
                <h1>{backers.toLocaleString()}</h1>
                <p>total backers</p>
              </div>
              <div className="box-2-child-3">
                <h1>56</h1>
                <p>days left</p>
              </div>
            </div>

            <ProgressBar />
          </div>
        </div>
        <div className="box-3">
          <div className="box-3-text">
            <p className="box-3-text-title">About this project</p>
            <br />
            <p className="box-3-text-content">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <br />
            <p className="box-3-text-content">
              Featuring artisan craftmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads,pens,and
              USB sticks to be stored under the stand
            </p>
          </div>
          <div className="box-3-block">
            <div className="box-3-box">
              <div className="box-3-b-title">
                <p className="box-3-b-name">Bamboo Stand</p>
                <p className="box-3-b-cost">Pledge $25 or more</p>
              </div>
              <div className="box-3-b-text">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign,and you'll be added to a
                specail Backer member list.
              </div>
              <div className="box-3-b-end">
                <div className="box-3-b-counter">
                  <h1>{left[0]}</h1>
                  <p>left</p>
                </div>
                <button onClick={setModalA} name="bottom-box" id={1}>
                  select reward
                </button>
              </div>
            </div>
            <div className="box-3-box">
              <div className="box-3-b-title">
                <p className="box-3-b-name">Black Edition Stand</p>
                <p className="box-3-b-cost">Pledge $75 or more</p>
              </div>
              <div className="box-3-b-text">
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </div>
              <div className="box-3-b-end">
                <div className="box-3-b-counter">
                  <h1>{left[1]}</h1>
                  <p>left</p>
                </div>
                <button onClick={setModalA} name="bottom-box" id={2}>
                  select reward
                </button>
              </div>
            </div>
            <div className="box-3-box">
              <div className="box-3-b-title">
                <p className="box-3-b-name">Mahogany Special Edition</p>
                <p className="box-3-b-cost">Pledge $200 or more</p>
              </div>
              <div className="box-3-b-text">
                You get two Special Edition Mahogany stands,a Backer T-shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shippin is included.
              </div>
              <div className="box-3-b-end">
                <div className="box-3-b-counter">
                  <h1>{left[2]}</h1>
                  <p>left</p>
                </div>
                <button onClick={setModalA} name="bottom-box" id={3}>
                  select reward
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
