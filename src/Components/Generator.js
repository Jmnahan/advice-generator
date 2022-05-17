import React, {useState, useEffect} from 'react';
import divider from '../Assets/pattern-divider-desktop.svg';
import dice from '../Assets/icon-dice.svg';

function Generator() {

  const [getId, setGetId] = useState("");
  const [advice, setAdvice] = useState("");

  useEffect(() => { 
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (getId) => {
          setGetId(getId.slip.id);
          setAdvice(getId.slip.advice);
        })

  },[]);

  let fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (getId) => {
          setGetId(getId.slip.id);
          setAdvice(getId.slip.advice);
        })
  }

  return (
    <div className="flex-col bg-darkgrayishblue max-w-md rounded-lg font-sans">
    <h1 className=" text-neongreen tracking-widest text-center text-sm py-7">ADVICE #{getId}</h1>
    <p className="text-lightcyan text-center text-base px-6 ">"{advice}"</p>
      <img className="pb-14 pt-10 px-8" src={divider} alt="pattern-divider"/>    
        <div className="flex min-w-full justify-center">
        <button className="border-neongreen bg-neongreen absolute rounded-full active:shadow-2xl -my-6 border-14" onClick={fetchNewAdvice}>
          <img className="bg-neongreen rounded scale-90" src={dice} alt="dice-button"/></button>    
        </div> 
  </div>
  )
}

export default Generator;