import React from 'react';

function CreateTicket(){
    return ( 
        <>
        <div className="container">
        <div className="row p-5 mt-5 mb-5">
          <h1 className="fs-2">
            To create a ticket, select a relative topic
          </h1>
       
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>Account opening
          </h4>
          <a href="/online-account" style={{textdecoration:"none",lineHeight:"2.5"}}>Online account opening</a><br/>
          <a href="/offline-account" style={{textdecoration:"none",lineHeight:"2.5"}}>Offline account opening</a><br/>
          <a href="/company-account" style={{textdecoration:"none",lineHeight:"2.5"}}>Company, Partnership and HUF Account</a><br/>
          <a href="/opening" style={{textdecoration:"none",lineHeight:"2.5"}}>Opening</a><br/>
          <a href="/nri-account" style={{textdecoration:"none",lineHeight:"2.5"}}>NRI account opening</a><br/>
          <a href="/charges" style={{textdecoration:"none",lineHeight:"2.5"}}>Charges at BIG BULL</a><br/>
          <a href="/bank-account" style={{textdecoration:"none",lineHeight:"2.5"}}>BIG BULL IDFC FIRST Bank 3-in-1 Account</a><br/>
          <a href="/getting-started" style={{textdecoration:"none",lineHeight:"2.5"}}>Getting started</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-address-book" aria-hidden="true"></i>Your BIG BULL account
          </h4>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Login credentials</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Your profile</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Account modification and segment addition</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>CMR and DP ID</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Nomination</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-empire" aria-hidden="true"></i>Funds
          </h4>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Fund withdrawl</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Adding Funds</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>Adding bank account</a><br/>
          <a href=""style={{textdecoration:"none",lineHeight:"2.5"}}>eMandates</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-trademark" aria-hidden="true"></i>Trading and markets
          </h4>
          <a href="/trading-faqs" style={{textdecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br/>
          <a href="/kite" style={{textdecoration:"none",lineHeight:"2.5"}}>Kite</a><br/>
          <a href="/margins" style={{textdecoration:"none",lineHeight:"2.5"}}>Margins</a><br/>
          <a href="/product-types" style={{textdecoration:"none",lineHeight:"2.5"}}>Product and order types</a><br/>
          <a href="/corporate-actions" style={{textdecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br/>
          <a href="/kite-features" style={{textdecoration:"none",lineHeight:"2.5"}}>Kite features</a><br/>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-connectdevelop" aria-hidden="true"></i>Console
          </h4>
          <a href="/ipo" style={{textdecoration:"none",lineHeight:"2.5"}}>IPO</a><br/>
          <a href="/portfolio" style={{textdecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br/>
          <a href="/funds" style={{textdecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br/>
          <a href="/profile" style={{textdecoration:"none",lineHeight:"2.5"}}>Profile</a><br/>
          <a href="/reports" style={{textdecoration:"none",lineHeight:"2.5"}}>Reports</a><br/>
          <a href="/referral" style={{textdecoration:"none",lineHeight:"2.5"}}>Referral program</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa-solid fa-coins"></i>Coin 
          </h4>
          <a href="/mutual-funds" style={{textdecoration:"none",lineHeight:"2.5"}}>Understanding mutual funds and coin</a><br/>
          <a href="/coin-app" style={{textdecoration:"none",lineHeight:"2.5"}}>Coin app</a><br/>
          <a href="/coin-web" style={{textdecoration:"none",lineHeight:"2.5"}}>Coin web</a><br/>
          <a href="/opening" style={{textdecoration:"none",lineHeight:"2.5"}}>Opening</a><br/>
          <a href="/transactions" style={{textdecoration:"none",lineHeight:"2.5"}}>Transactions and reports</a><br/>
          <a href="/pension" style={{textdecoration:"none",lineHeight:"2.5"}}>National Pension scheme</a><br/>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default CreateTicket;