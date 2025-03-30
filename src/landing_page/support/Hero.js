import React from 'react';

function Hero(){
    return ( 
        <>
                <section className="container-fluid"id="supportHero">
        <div className="p-5"id="supportWrapper">
          <h4>
            Support Portal
          </h4>
          <a href="0">Track Tickets</a>
       </div>
       <div className="row p-5 m-3">
       <div className="col-6 p-5 p-5">
        <h1 className="fs-3">
        Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder="Eg. how do I activate F&O" /><br/>
        <a href="1">Track account opening</a>
        <a href="2">Track segment activation</a>
        <a href="3">Intraday margins</a>
        <a href="4">kite user manual</a>
       </div>
       <div className="col-6 p-5">
        <h1 className="fs-3">Featured</h1>
        <ol><li>
        <a href="5">Current take over and Delisting - January 2025</a></li>
        <li>
        <a href="6">Latest Intraday levrages - MIS & CO</a></li>
        </ol>
       </div>
       </div>
       </section>
        </>
     );
}
 
export default Hero;