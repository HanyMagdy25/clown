import React, { useEffect, useState } from "react";
import "./App.css";
import pic1 from "./assets/1.jpg"
import pic2 from "./assets/2.jpg"
import pic3 from "./assets/3.jpg"


function App() {

  //API key: e09d99c9ff5f1a38699f
  const [trk, setTrk] = useState("");
  const [click,setClick] = useState(false);

  useEffect(()=>{
    const getCurrency = async ()=>{
      const respnse = await fetch("https://free.currconv.com/api/v7/convert?q=USD_TRY&compact=ultra&apiKey=e09d99c9ff5f1a38699f")
      const data = await respnse.json();
      console.log(data.USD_TRY);
      setTrk(data.USD_TRY)
    }
    getCurrency();
  },[])

  const image_array =[
    pic1,
    pic2,
    pic3
  ]
  // function get_random_image(){
  //   const random_index = Math.floor(Math.random() * image_array.length);
  //   var selected_image = image_array[random_index];
    
  // }
  // console.log(selected_image)

  return <div className="App">
    
  <div className="currency">
    <div className="currency-inner">
      <span>1 Dollar</span>
      <span> = </span>
      <span>{trk} Turkish lira</span>
      
      
    </div>
    
  </div>
  <div>
    <button onClick={()=> setClick(!click)} >Get a Meme</button>
  </div>
  <div className="memes">
        
        <div className="pics">
        {click ? <span></span> :<div className="pic"><img src={image_array[Math.floor(Math.random() * image_array.length)]} alt="aa"/></div>}
        </div>
  </div>



    </div>;
}

export default App;
