import React, { useState } from "react";
import Thank from "./Thank";

function ModalA(props) {
  const left = props.left;
  const [newState, setNewState] = useState("");

  function handleChange(event) {
    setNewState(event.target.value);
    event.preventDefault();
  }

  function handleSubmit(event) {
    console.log(newState);

    props.setMoneyState(
      (prevValue) => parseInt(prevValue) + parseInt(newState)
    );
    props.setBackers((prevValue) => parseInt(prevValue) + parseInt(1));
    event.preventDefault();
    props.setLeft((prevState) =>
      prevState.map((state, idx) =>
        idx === event.target.id - 2 ? parseInt(state) - parseInt(1) : state
      )
    );
    props.state(false);
    props.setThankState(true);
  }

  function handle1Sub() {
    props.setBackers((prevValue) => parseInt(prevValue) + parseInt(1));
    props.state(false);
    props.setThankState(true);
  }

  function handleerr(event) {
    event.preventDefault();
  }

  const [pledgeState, setPledgeState] = useState([false, false, false, false]);

  function handlePledge(event) {
    const id1 = event.target.id;
    console.log(id1);
    setPledgeState((prevState) =>
      prevState.map((state, idx) => (idx === id1 - 1 ? !state : false))
    );
  }

  function PledgeBox(props) {
    return (
      <div className="pledge-box">
        {props.id > 1 ? <p>Enter your pledge</p> : <p>Confirm your pledge</p>}
        <form
          id={props.id}
          className="pledge-box-end"
          onSubmit={
            props.id === 1
              ? handle1Sub
              : newState < props.min
              ? handleerr
              : handleSubmit
          }
        >
          {props.id > 1 ? (
            <div className="pledge-a-div">
              $
              <input
                type="number"
                min={props.min}
                placeholder={props.min}
                value={newState}
                autoFocus="autoFocus"
                onChange={handleChange}
              ></input>
            </div>
          ) : null}
          {left[props.id - 2] === 0 && props.id != 1 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="pledge-a-submit"
            >
              N/A
            </div>
          ) : (
            <button className="pledge-a-submit" type="submit">
              Continue
            </button>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modalA-body">
        <div className="modalA-outline">
          <img src="images\icon-close-modal.svg" onClick={props.state} />
          <div className="modalA-text">
            <h1>Back this project</h1>
            <p className="modalA-content">
              Want to support us in bringing Masterful Bamboo Monitor Riser out
              in the world?
            </p>
          </div>
          <div className="modalA-box">
            <div className="modalA-block">
              <container>
                <div className="modalA-block-button">
                  <input
                    type="radio"
                    id="1"
                    onClick={handlePledge}
                    style={
                      pledgeState[0]
                        ? { background: "hsl(176, 50%, 47%)" }
                        : null
                    }
                  ></input>
                </div>
                <div className="modalA-block-text">
                  <p
                    className="modalA-title-price"
                    onClick={handlePledge}
                    id="1"
                  >
                    Pledge with no reward
                  </p>
                  <p className="modalA-content">
                    Choose to support us without a reward if yyou simply believe
                    in our project. As a backer,you will be signed up to recieve
                    product updates by email.
                  </p>
                  {pledgeState[0] ? <PledgeBox id={1} /> : null}
                </div>
              </container>
            </div>
            <div className="modalA-block">
              <container>
                <div className="modalA-block-button">
                  <input
                    type="radio"
                    id="2"
                    min={25}
                    onClick={handlePledge}
                    style={
                      pledgeState[1]
                        ? { background: "hsl(176, 50%, 47%)" }
                        : null
                    }
                  ></input>
                </div>
                <div className="modalA-block-text">
                  <div className="modalA-text-head">
                    <div className="modalA-head-title">
                      <p
                        className="modalA-title-name"
                        onClick={handlePledge}
                        id="2"
                        min={25}
                      >
                        Bamboo Stand
                      </p>
                      <p className="modalA-title-price">Pledge $25 or more</p>
                    </div>
                    <div className="modalA-head-left">
                      <h1>{props.left[0]}</h1>
                      <p>left</p>
                    </div>
                  </div>
                  <p className="modalA-content">
                    You get an ergonomic stand made of natural bamboo. You've
                    helped us launch our promotional campaign,and you'll be
                    added to a special Backer member list.
                  </p>
                  {pledgeState[1] ? <PledgeBox min={25} id={2} /> : null}
                </div>
              </container>
            </div>
            <div className="modalA-block">
              <container>
                <div className="modalA-block-button">
                  <input
                    type="radio"
                    id="3"
                    min={75}
                    onClick={handlePledge}
                    style={
                      pledgeState[2]
                        ? { background: "hsl(176, 50%, 47%)" }
                        : null
                    }
                  ></input>
                </div>
                <div className="modalA-block-text">
                  <div className="modalA-text-head">
                    <div className="modalA-head-title">
                      <p
                        className="modalA-title-name"
                        onClick={handlePledge}
                        id="3"
                        min={75}
                      >
                        Black Edition Stand
                      </p>
                      <p className="modalA-title-price">Pledge $75 or more</p>
                    </div>
                    <div className="modalA-head-left">
                      <h1>{props.left[1]}</h1>
                      <p>left</p>
                    </div>
                  </div>
                  <p className="modalA-content">
                    You get a Black Special Edition computer stand and a
                    personal thank you. You'll be added to our Backer member
                    list. Shipping is included.
                  </p>
                  {pledgeState[2] ? <PledgeBox min={75} id={3} /> : null}
                </div>
              </container>
            </div>
            <div className="modalA-block">
              <container>
                <div className="modalA-block-button">
                  <input
                    type="radio"
                    id="4"
                    min={200}
                    onClick={handlePledge}
                    style={
                      pledgeState[3]
                        ? { background: "hsl(176, 50%, 47%)" }
                        : null
                    }
                  ></input>
                </div>
                <div className="modalA-block-text">
                  <div className="modalA-text-head">
                    <div className="modalA-head-title">
                      <p
                        className="modalA-title-name"
                        onClick={handlePledge}
                        id="4"
                        min="200"
                      >
                        Mahogany Special Edition
                      </p>
                      <p className="modalA-title-price">Pledge $200 or more</p>
                    </div>
                    <div className="modalA-head-left">
                      <h1>{props.left[2]}</h1>
                      <p>left</p>
                    </div>
                  </div>
                  <p className="modalA-content">
                    You get two Special Edition Mahogany stands,a Backer
                    T-shirt, and a personal thank you. You'll be added to our
                    Backer member list. Shippin is included.
                  </p>
                  {pledgeState[3] ? <PledgeBox min={200} id={4} /> : null}
                </div>
              </container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalA;
