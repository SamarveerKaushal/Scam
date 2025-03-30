import React from 'react';

function Brokerage(){
    return ( 
        <>
        {" "}
        <div className="container">
          
        
           <div className="row p-5 mt-5 text-center border-top">
            
            <div className="col-8 p-4">
                <a href=""style={{textDecoration:"none"}}>
                    <h3 className="fs-5">Brokerage calculator</h3></a>
                    <ul
                    style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} 
                    >
                        <li>A brokerage calculator is an online tool designed to help traders estimate the brokerage fees they will incur on their trades.</li>
                        <li>It is a unique online tool that is designed to help you quickly determine the net P&L of trades executed.</li>
                        <li>It helps traders estimate the total costs of their trades, covering equity, futures, options, commodities, currency, intraday, and delivery ...</li>
                        <li>Calculate brokerage, GST, STT, SEBI charges for equity delivery & intraday trading at Upstox with our easy-to-use Brokerage Calculator.</li>
                        <li>Dhan Brokerage Calculator is a tool that gives you an upfront estimate of the brokerage that will be charged to you for carrying out any trade.</li>
                        <li>Brokerage Calculator - Calculate how much brokerage and regulatory charges like Transaction Charges, GST, STT Charges, SEBI Charges for equity delivery. </li>
                    </ul>
                
           
            </div>
            <div className="col-4 p-4">
            <a href=""style={{textDecoration:"none"}}>
                    <h3 className="fs-5">List of charges</h3>
                </a>
                <ul
                    style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} 
                    >
                        <li>Brokerage Charges: Flat fees or percentage-based charges, e.g., ₹20 or 0.03% per executed order, whichever is lower.</li>
                        <li>Statutory Charges: Includes STT/CTT, GST (18%), SEBI fees (₹10/crore), and stamp duty based on trade type.</li>
                        <li>Transaction Charges: Levied by exchanges like NSE/BSE, varying by trade type and value (e.g., 0.00297% for equity delivery).</li>
                        <li>Demat Account Fees: Includes maintenance fees, DP charges (e.g., ₹20 per sell transaction), and rematerialization costs.</li>
                        <li>Pledge & Margin Charges: Fees for pledging/unpledging securities, typically ₹20 per reques.</li>
                        <li>Miscellaneous Fees: Covers call-and-trade services, courier charges, and physical statement requests.</li>
                    </ul>
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Brokerage;