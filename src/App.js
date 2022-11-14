
import './App.css';
import Home from './components/home';
import { useDispatch } from 'react-redux';
import { setValue } from './slice';
import { useState } from 'react';
function App() {
   
   const dispatch = useDispatch();
   
   const homeData ="Elit culpa nulla laborum ea voluptate dolore et excepteur amet elit nisi qui tempor aliqua. Ea voluptate tempor irure in magna incididunt minim dolore culpa tempor amet. Voluptate non ea nostrud mollit consectetur fugiat occaecat anim mollit aute enim ipsum minim consequat. Aliquip sunt officia do laborum est mollit proident magna commodo. Velit minim deserunt tempor deserunt aliqua est qui cupidatat anim in. Culpa aliquip dolore in ipsum quis. Incididunt fugiat id voluptate ut.";
   const contactData ="contact me at akashram006@gmail.com"
   const serviceData="Services not available";
   const[componentToShow,setComponentToShow] = useState(1);
  // const[data,setData] = useState("");
  
    // useEffect(() => {
     if(componentToShow === 2){
      dispatch(setValue(contactData));
  }else if(componentToShow === 3){
    dispatch(setValue(serviceData));
  }else{
    dispatch(setValue(homeData));
  }
  // },([componentToShow]))
  console.log(componentToShow);
  const [isLight,setLight] = useState(true);
  const changeBackground = _ => {
      if(isLight === true){
       setLight(false);
      }
      else{
       setLight(true);
      }
  }
  return (
    <div className={isLight === true ? "white-container": "black-container"}>
      <p>I have changed theme to {isLight===true?"Light":"Dark"}</p>
      <h2>redux</h2>
      {/* <a href='#' onClick={() => {setComponentToShow(1)}}>Home</a><br />
      <a href='#'  onClick={() => {setComponentToShow(2)}}>Contact</a><br />
      <a href='#' onClick={() => {setComponentToShow(3)}}>service</a> */}
      <button onClick={() => {setComponentToShow(1)}}>Home</button>
      <button onClick={() => {setComponentToShow(2)}}>Contact</button>
      <button onClick={() => {setComponentToShow(3)}}>Service</button>
      <button onClick={changeBackground}>toggle theme to dark</button>
      <Home />
      
    </div>
  );
}

export default App;
