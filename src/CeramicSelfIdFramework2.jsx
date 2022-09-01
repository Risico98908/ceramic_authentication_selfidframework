//imports
import { useViewerConnection } from '@self.id/framework'
import { useViewerRecord } from '@self.id/framework'
import { EthereumAuthProvider} from '@ceramicnetwork/blockchain-utils-linking'
import React, { Component, useContext, useState, useEffect, useLayoutEffect, useRef } from 'react';

 /***************************************************/












//definition component ConnectButton
export default function ConnectButton() {
  const [connection, connect, disconnect] = useViewerConnection()
  var [force_refresh, update_force_refresh]=useState(Date.now())
  //await update_force_refresh(!force_refresh)


  const ConditionalRenderingComponenByName = (arg1) => 
  {

  if(connection.status === 'connected') 
  {
	return <div>
     <button onClick={() => { disconnect() }}> Click to Disconnect</button>
	 <pre>Current ID: {connection.selfID.id}</pre>
	</div>
  } 
  else
  {
   if (typeof(window.ethereum) !== 'undefined') 
   {

	return <div>

	<button
      disabled={connection.status === 'connecting'}

      onClick={async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts',})
        await connect(new EthereumAuthProvider(window.ethereum, accounts[0]))
      }}>

      <p>Click to Connect</p>
	</button>
	<pre>Current ID: unavailable</pre>
 	</div>
   }
   else
   {

	return <div>

    <p>
      1. An injected Ethereum provider such as{' '} <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>

	<pre></pre>
    <p> 2. Try Brave Browser. It has an integrated crypto wallet </p>
	</div>
   }

  }


  }





  /*************/
  //returnblockstart ConnectButton


  return ( 
	<div style={{border: '3px solid green', marginBottom: '10px'}}> 
	<p> Component ConnectButton</p>
     <p> connection status: {connection.status} </p>
	 <ConditionalRenderingComponenByName arg1={Date.now()}/> 
     <pre>Date last refresh:  {force_refresh} </pre>
     <button onClick={() => { update_force_refresh(Date.now()) }}> refresh component and date </button>
	 <pre>Extra links: </pre>
	 <pre>https://developers.ceramic.network/tools/self-id/framework/</pre>
 
	</div> 
  )
  //returnblocksend ConnectButton 
  /*************/


  }













 /***************************************************/
/*
//definition componment ShowViewerName2
export function ShowViewerName2() {
  const record = useViewerRecord('basicProfile')

  const text = record.isLoading
    ? 'Loading...'
    : record.content
    ? `Hello ${record.content.username || 'stranger'}`
    : 'No profile to load'
  return (
	<div style={{border: '3px solid orange' , marginBottom: '10px'}}> 
		<p> Component ShowViewerName</p>
		<p>basicProfile username: {text}</p>
	</div>
  )

}


*/




export function ShowViewerName() {
  const record = useViewerRecord('basicProfile')

  const text = record.isLoading
    ? 'Loading...'
    : record.content
    ? `${record.content.name || 'stranger'}`
    : 'No profile to load'


  return (
	<div style={{border: '3px solid orange' , marginBottom: '10px'}}> 
		<p> Component ShowViewerName</p>
		<p>{'username_from_server (BasicProfile): '}{text}</p>
	</div>
  )
	
}



//  return <p>{text}</p>



























 /***************************************************/

//definition componment SetViewerName

export function SetViewerName() {
	
	
 //START VARIABLE DEFINITION
	
  const record = useViewerRecord('basicProfile')
  var [username_inthe_browser, update_username_inthe_browser]=useState('Alice1')
  var [username_from_server, update_username_from_server]=useState('Alice2')
  var [force_refresh, update_force_refresh]=useState(Date.now())
  var [force_refresh2, update_force_refresh2]=useState(Date.now())
  var [record_content_name_ok, update_record_content_name_ok]=useState(false)
 //END VARIABLE DEFINITION


  
  

 //START INTERNAL FUNCTION
  
  const cosolelog = async () => { console.log(username_inthe_browser);}
  
  const cosolelog2 = async () => 
  { 

	  var record_content_name=await SIdentity(record, ['content', 'name'], '');
	  await console.log('rid6767: ', record);
	  //await console.log(record.content.name);
	  //await console.log(record.content);
	  //await console.log(record);
  }
	

  //SIdentity gets value from nested json object
  //SIdentity= safe identity function
  const SIdentity = (a1, a2, a3) => 
  {

   if (typeof(a1) !== 'undefined') 
   {
	var i=0;
	
	var current_obj=a1;
	var stop=0
	var current_key=''
	
	for(i=0; i<a2.length; i=i+1)
	{
		if(stop==0)
		{
		 //cyclical assignments	
		 current_key=a2[i]
		 stop=1
		 
		 if(current_key in current_obj)  //check key is defined
		 {
			 
		  if(current_obj[current_key] !== undefined) //check the value of the key is defined
		  { 
			stop=0;	
			//switch current_obj with current_obj[current_key]
			current_obj=current_obj[current_key];
		  } //end if4

			
		 } //end if3
		} //end if2
		else {break} //else2
		
	}//end for
	
	
	if(stop==1) {return a3}
	else {return current_obj}
   } //end if1
   
   else {return a3} //else1
	   
  }	   
  
  

  //{!record.isMutable || record.isMutating}
  const set_and_getback_username_from_the_server = async (username_inthe_browser) =>   
  {
	await record.merge({ name: username_inthe_browser }) ;
	console.log('rid9661: ', record)
	console.log('rid9662: ', username_inthe_browser)
	var username_from_server_tmp1= await SIdentity(record, ['content', 'name'], null);
	await update_username_from_server(username_from_server_tmp1)
	console.log('rid9663: ', username_from_server_tmp1)
	await update_force_refresh2(Date.now())
  }
  

  const getback_username_from_the_server = async () =>   
  {
	  
	var username_from_server_tmp1= await SIdentity(record, ['content', 'name'], null);
	await update_username_from_server(username_from_server_tmp1)
	await update_username_inthe_browser(username_from_server_tmp1)
  }
  
  
  
  
  
  //useEffect(() => { getback_username_from_the_server()}, [username_from_server]);
  useEffect(() => {   if(!record.isLoading) {getback_username_from_the_server()} }, [record.isLoading, force_refresh2] );
  useEffect(() => {   if(!record.isLoading) {cosolelog2()} }, [record.isLoading] );
  
  //useEffect(() => {   if(!record.isLoading || !record.isMutable || !record.isMutating){set_and_getback_username_from_the_server(username_inthe_browser)} }, [username_inthe_browser] );










  
  
 //END INTERNAL FUNCTION



  
  //returnstart
  if(!record.isLoading)
  {
  
  return (
	<div style={{border: '3px solid brown', marginBottom: '10px'}}> 
	<p hidden> {force_refresh} </p>	
	<p> Component SetViewerName</p>
	<pre></pre>

	<p>{'Current username_from_server (BasicProfile): '}{username_from_server}</p>
	<pre></pre>

	{/*input field rid6565*/}
	<pre>1. Click connect in the component ConnectButton.</pre>
	<pre>2. Insert a new username and click the Set Button.</pre>
	<pre>(In the code, at first, the value of this field </pre>
	<pre>is stored in the variable username_inthe_browser )</pre>
    <input type="text" value={username_inthe_browser} onChange={(event)=>{update_username_inthe_browser(event.target.value)}} />

    
 	{/*button related to the input field rid6565*/}
	<pre> </pre>
    <button
      disabled={!record.isMutable || record.isMutating}
      onClick={async () => { await record.merge({ name: username_inthe_browser }); await set_and_getback_username_from_the_server(username_inthe_browser)} }>
      Set username (Basic profile)
    </button>


    
    {/*Print in the console the object username_inthe_browser*/}
    {/*
	<pre> </pre>
    <button
      onClick={async () => { await cosolelog()}}>
      Print username
    </button>
    */}


    
	<pre> </pre>
    <p>{'Print in the console the object RECORD returned by useViewerRecord ()'} </p>
    <button
      onClick={async () => { await cosolelog2()}}>
      Click
    </button>

	<pre> </pre>
	
	
	

	<pre></pre>
	<pre>Extra links: </pre>
	<pre>{'https://github.com/calehh/ceramic-example/blob/main/basic_profile.mjs'}</pre>

	</div> 
  )//returnmainend; SetViewerName
  }//returnmainend; SetViewerName
  else	  
  {
	  
	    /*At first the variable record is loading */
	    /*Check record.isLoading too */
	  	return (<div>	Loading 	</div>) 

  }//returnmainend; SetViewerName
	
}









