import React, { Fragment, useEffect, useState } from "react";
import TheRef from "./TheRef";
import "./App.css";
import Header  from "./MarvelApplication/component/Header";

import WelcomePage from "./MarvelApplication/component/WelcomePage";

import Footer from "./MarvelApplication/component/Footer";
import Connexion from "./MarvelApplication/component/Connexion";
import Errorpage from "./MarvelApplication/component/ErrorPage";
import Inscription from "./MarvelApplication/component/Inscription";
import { BrowserRouter, Routes } from "react-router-dom";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import { USERContext } from "./Contexte";
import { ColorContext } from "./Contexte";
import UserPage from "./MarvelApplication/component/UserPage";
import ForgetPassword from "./MarvelApplication/component/ForgetPassword";
import QuestionQuiz from "./MarvelApplication/component/Firebase/QuestonQuiz";






const App=(props)=>{
 

   
  /*const [user , setUser] =useState({nom : "diop" , prenom : "moussa" , age :21 })
  const [myStyle , setMyStyle ] =useState({
    listStyle : "none" ,
    color : "red"
  })      */ 
        return(
                    
       
          <Fragment>

     
         
    <BrowserRouter>

    <Header></Header>

<Routes> 

   

    <Route path={"/"} exact   element={<WelcomePage/>}  />

    <Route path={"/Inscription"}   element={<Inscription/>}  />

    <Route path={"/Connexion"}   element={<Connexion/>}  />

    <Route path="/UserPage"  element={<UserPage></UserPage>}  />
     
     <Route path="/Question" element={<QuestionQuiz/>}></Route>
     <Route/>
     
    <Route path="/ForgetPassword" element={<ForgetPassword></ForgetPassword>}     />
    
    <Route path="*" element={<Errorpage/>}/>
    

    </Routes>


   

    <Footer></Footer>
    
        </BrowserRouter>
        

           

    
         



          </Fragment>

        
        )
      }




export default App;
