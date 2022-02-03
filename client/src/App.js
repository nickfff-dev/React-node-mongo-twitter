import React, { useState, useEffect } from "react";
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function App() {
  const [state, setState] = useState({
    user: null,
  });

  const apiURL =   "http://127.0.0.1:4000"
  useEffect(() => {
    fetch(`${apiURL}/auth`, {
      method: "GET",
      credentials: "include", // Fetch does not send cookies. So we need this line
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((responseJson) => {
        const { user } = responseJson;
        setState({
          user: user ? user : null,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
   
     
     <div className="container-fluid w-80">
      {state.user ? (
        <>
          <div className="col mx-auto">
            
          <div className="mt-4 text-center"><h1 className="text-white">Welcome {state.user.name}</h1>
          <div className=" mt-4 text-center"><a className="button btn btn-block btn-social logout " href={`${apiURL}/auth/logout`}>Logout</a></div>
          </div>
          
          </div>
          <div className="row mt-5 text-center mx-auto" >
          <ul >
            <li>Name: {state.user.name}</li>
            <li>User Id: {state.user._id}</li>
            <li>Screen Name: {state.user.screenName}</li>
            <li>Verified: {state.user.verified ? "Yes" : "No"}</li>

          </ul>

          </div>
          <div className="container w-50 mx-auto twitter my-2">
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName={state.user.screenName}
          theme= "dark"
         options={{ showReplies: true, autoHeight:true, theme:"dark"}}/>
          </div>
        
        </>
      ) : (
        <div className="container">
          <div className="col mx-auto login card w-25 p-5">
          <div  className="text-center "><h1 className="welcome">Welcome!</h1></div>
         <div className="text-center"> <a id="twitter-button" className="btn btn-block btn-social btn-twitter" href={`${apiURL}/auth/login`}><i class="fa fa-twitter"></i> Sign in with Twitter</a></div>
        
          </div>
        </div>
      )}
    </div>

     
     

  

  );
}
