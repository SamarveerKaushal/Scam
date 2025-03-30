import React from "react";

function Team() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row p-3 mt-5 ">
          <h1 className="text-center mt-5 ">People</h1>
        </div>
        <div
          className="row p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-5 text-center">
            <img
              src="./images/Samarveer.jpg"
              style={{ borderRadius: "100%", width: "70%" }}
            />
            <h4 className="mt-5">Samarveer Kaushal</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-5">
            <p>
              Samarveer Kaushal bootstrapped and founded BIG BULL in 2025 to
              overcome the hurdles he faced during his decade long stint as a
              trader. Today, BIG BULL has changed the landscape of the Indian
              broking industry.</p>
              <p> He has done his Btech in Computer scince from Manipal University
                Jaipur.</p> 
               <p> Playing basketball is his zen.</p> 
              <p>Connect on <a href=""> Homepage</a> / <a href="">TradingQnA </a>/ <a href="">Twitter </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
