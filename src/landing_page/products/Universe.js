import React from 'react';

function Universe(){
    return ( 
        <>
        <div className="container mt-5">
        <div className="row text-center">
           <h1>The BIG BULL Universe</h1>
           <p>
           Extend your trading and investment experience even further with our partner platforms
           </p>
            
                <div className="col-4 p-3 mt-5">
                <img src="./images/BIG_BULL3.jpg"/>
                <p className="text-small text-muted">Our asset management venture</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="./images/smallcaseLogo.png"/>
                <p className="text-small text-muted">Thematic investment platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="./images/streakLogo.png"/>
                <p className="text-small text-muted">Algo and stratergy platform</p>

            </div>

            <div className="col-4 p-3 mt-5">
                <img src="./images/sensibullLogo.png"/>
                <p className="text-small text-muted">Option trading platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="./images/dittoLogo.png"/>
                <p className="text-small text-muted">Insurance</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="./images/goldenpiLogo.png"/>
                <p className="text-small text-muted">Bonds trading platform</p>
            </div>
            <button className='p-3 btn btn-success fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
    
        </div>
       </div>
        </>
     );
}
 
export default Universe;