import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5'>
             <div className='row'>
             <div className='col-6 p-5'>
                <img src='./images/largestBroker.svg' alt="Largest Broker"/>
                </div>
                <div className='col-6 p-5 mt-5'>
                <h1>Largest stock broker in Asia</h1>
                <p className='mb-5'>75+ million BIG BULL contribute to over 80% of all retail order volumes
                in Asia daily by trading and investing in:
                </p>
                <div className='row'>
                    <div className='col-6' >
                <ul>

                    <li>
                        <p>Future and options</p>
                    </li>

                    <li>
                        <p>Commodity derivatives</p>
                    </li>

                    <li>
                        <p>Currency derivatives</p>
                    </li>
                    </ul>
                  </div>

                  <div className='col-6' >
                <ul>

                    <li>
                        <p>Stocks & IPOs</p>
                    </li>

                    <li>
                        <p>Direct mutual funds</p>
                    </li>

                    <li>
                        <p>Bonds and Govt, Securities</p>
                    </li>
                    </ul>
                  </div>
                  </div>

               <img src='./images/pressLogos.png' alt="Press Logos" style={{width:"95%"}}/>
                </div>
    </div>
        </div>
        
     );
}

export default Award;