import React from 'react';
import {BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import DashBoardHome from "./DashBoardHome/DashBoardHome";
import New from './new/New'
import Single from './Single/Single'
import  List from './List/List'
import {userInputs,productInputs} from './formSource';

const DashBoard = () => {
  return (
    <div className="dashBoard">

    <Routers>
      <Routes>
          <Route path="/user">

            <Route index element= { <DashBoardHome/> } />
            
                <Route path="/all" element= { <List/> } />
                <Route path=":userId" element= { <Single/> } />
                <Route path="new" element= { <New inputs={userInputs} title="Add New User"/> } />
              </Route> 
            
              <Route path="product">
                <Route path=":productId" element= { <Single/> } />
                <Route path="new" element= { <New  inputs={productInputs}title="Add New User"/> } />
              </Route> 

          </Route>
      </Routes>
    </Routers>
  
  </div>
  )
}

export default DashBoard