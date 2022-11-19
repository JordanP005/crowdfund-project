import React from "react";

function Thank(props) {
  function handleClick() {
    props.setThankState(false);
  }

  return (
    <div className="thank-background">
      <div className="thank-box">
        <div className="thank-block">
          <img src="images\icon-check.svg" alt="check" />
          <h1>Thanks for your support</h1>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed
          </p>
          <div className="thank-close" onClick={handleClick}>
            Got it!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thank;
