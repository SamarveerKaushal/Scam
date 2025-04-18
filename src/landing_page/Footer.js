import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(225,225,225)"}}>
    <div class="container border-top mt-5">
      <div class="row mt-5">
        <div class="col">
          <img src="./images/BIG_BULL2.jpeg" style={{ width: "50%" }} alt="image"/> 
          <p>&copy; 2010 - 2025, BIG BULL Broking Ltd. All rights reserved.</p>
        </div>
        <div class="col">
          <p>Company</p>

          <a href="/about">About</a>
          <br />
          <a href="/products">Products</a>
          <br />
          <a href="/pricing">Pricing</a>
          <br />
          <a href="/referral">Referral programme</a>
          <br />
          <a href="/careers">Careers</a>
          <br />
          <a href="/tech">BIG BULL.tech</a>
          <br />
          <a href="/opensource">Open source</a>
          <br />
          <a href="/press">Press & media</a>
          <br />
          <a href="/">BIG BULL</a>
          <br />
        </div>
        <div class="col">
          <p>Support</p>
          <a href="/contact">Contact</a>
          <br />
          <a href="/support">Support portal</a>
          <br />
          <a href="/blog">Z-Connect blog</a>
          <br />
          <a href="/charges">List of charges</a>
          <br />
          <a href="/downloads">Download and resources</a>
          <br />
        </div>
        <div class="col">
          <p>Account</p>
          <a href="/signup">Open an account</a>
          <br />
          <a href="/transfer">Fund transfer</a>
          <br />
          <a href="/challenge">60 days challenge</a>
          <br />
        </div>
      </div>
    <div className="mt-5 text-muted" style={{fontSize: "14px"}}>
      <p> BIG BULL Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through BIG BULL Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through BIG BULL Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: BIG BULL Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@BIG BULL.com, for DP related to dp@BIG BULL.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>

<p>  Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
    
    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of BIG BULL and offering such services, please create a ticket here.</p>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
