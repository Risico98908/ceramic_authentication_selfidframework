import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ConnectButton from "./CeramicSelfIdFramework2"
import {ShowViewerName, SetViewerName} from "./CeramicSelfIdFramework2"


export default function Page2() {
return (
 <div>
	  <ConnectButton/>
	  <ShowViewerName/>
	  <SetViewerName/>
 </div>
 )
}