import { BrowserRouter as Router, Route, Link, Routes,  useParams } from "react-router-dom";
import { Provider } from '@self.id/framework'

//Import the pages

import Page1 from "./Page1"
import Page2 from "./Page2"
//import Home from "./CeramicSelfIdFramework"
//import OrbisConnectWrap from "./OrbisConnectWrap"
//import OrbisConnectSendPost from "./OrbisConnectSendPost"
//import OrbisConnectFetchPost from "./OrbisConnectFetchPost"


//return <Provider client={{ ceramic: 'testnet-clay' }}>{children}</Provider>


export default function App() {
return (
<Provider client={{ ceramic: 'testnet-clay' }}>	  
    <div className="App">
	  <h4> APPNAME: ceramic selfidframework</h4>
	  <p>https://developers.ceramic.network/tools/self-id/framework/ </p>
      <Router>

	
	   {/*block1: links*/}
       <div style={{border: '3px solid red'}}>
        <div className="list">
		  <h4> BLOCK1: LINKS </h4>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
            {/*
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/orbisconnect">OrbisConnectWrap</Link></li>
            <li><Link to="/OrbisConnectSendPost">OrbisConnectSendPost</Link></li>
            <li><Link to="/OrbisConnectFetchPost">OrbisConnectFetchPost</Link></li>
            */}
          </ul>
        </div>
       </div>
        

        
	   {/*new block. Horizontal white space*/}
       <div style={{height: '30px'}}>
       </div>
       
        
        
	   {/*block2: react pages, aka react components*/}
       <div style={{border: '2px solid BLUE'}}>
		<h4> BLOCK2: COMPONENTS </h4>
        <Routes>
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
          {/*
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/orbisconnect" element={<OrbisConnectWrap />} />
          <Route exact path="/OrbisConnectSendPost" element={<OrbisConnectSendPost/>} />
          <Route exact path="/OrbisConnectFetchPost" element={<OrbisConnectFetchPost/>} />
          */}
        </Routes>
	   </div>
      </Router>
    </div>
</Provider>    
    
  ); //endreturnmain
}


