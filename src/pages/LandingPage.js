import React from "react";
import Jumbo from "../components/Jumbo"

function LandingPage() {
  return (
      
    <Jumbo />
   
       <h2 className="subtitle">Recommendation</h2>
       <div className="row">
           <div className="col">
               <div className="card-group">
                   <div className="card"><img className="card-img-top w-100 d-block" />
                       <div className="card-body">
                           <h4 className="card-title">Title</h4>
                           <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">Button</button></div>
                   </div>
                   <div className="card"><img className="card-img-top w-100 d-block" />
                       <div className="card-body">
                           <h4 className="card-title">Title</h4>
                           <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">Button</button></div>
                   </div>
               </div>
           </div>
       </div>
       <div className="row">
           <div className="col">
               <div className="card-group">
                   <div className="card"><img className="card-img-top w-100 d-block" />
                       <div className="card-body">
                           <h4 className="card-title">Title</h4>
                           <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">Button</button></div>
                   </div>
                   <div className="card"><img className="card-img-top w-100 d-block" />
                       <div className="card-body">
                           <h4 className="card-title">Title</h4>
                           <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button className="btn btn-primary" type="button">Button</button></div>
                   </div>
               </div> 
           </div>
       </div>

    );
}

export default LandingPage;