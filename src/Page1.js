import brave001_01 from './brave001_01.png'; // Tell webpack this JS file uses this image
import brave002_01 from './brave002_01.png'; // Tell webpack this JS file uses this image

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


export default function Page1() {
return (
        <div>
		   <div>
            <h1>Page 1. Instruction.</h1>
            <h4>1. Create an ethereum account with the Brave Wallet</h4>
            <p>i. Install brave browser</p>
            <p>i. Where is the Brave Wallet?</p>
            <p>i. In the Brave windows click the 3 lines menu on the top left (image1)</p>
            <p>i. Click wallet and create an account (ethereum account)</p>
            <p>i. Now you have an ethereum address (image2)</p>
            <p>i. For more ionformation search online: configure brave wallet ethereum</p>
            <p>https://www.makeuseof.com/configure-use-brave-browser-crypto-wallet/</p>
            <h4>2. Run this app with brave browser</h4>
           </div>

		  {/*new block. Horizontal white space*/}
          <div style={{height: '50px'}}></div>
           
           
		
	<div>
	 <h4>3. Images</h4>
	 <h4>Image1</h4>
	 <img src={brave001_01} alt="brave001_01" />;
	 
	 <div style={{height: '100px'}}></div>
			
	 <h4>Image2</h4>
	 <img src={brave002_01} alt="brave002_01" />;
			
	 <div style={{height: '50px'}}></div>
	</div>
           
           
	{/*new block. Horizontal white space*/}
	<div style={{height: '30px'}}></div>
          
          
	</div>
    )
}