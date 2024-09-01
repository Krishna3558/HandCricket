import React from 'react'
import Quitgame from './Quitgame'
import { useState , useEffect } from 'react';

function Fullgame() {
  let [userChoice, setUserChoice] = useState("none")
  let [toss, setToss] = useState(false);
  let [tossSub , setTossSub ] = useState(false);
  let [yourScore , setYourScore] = useState(0);
  let [compScore , setCompScore] = useState(0);
  let [ random , setRandom ] = useState(0);
  let [yourChoice , setYourChoice] = useState(0);
  let [commentery , setCommentery] = useState("Start the game by clicking on any number above");
  let [tossDone , setTossDone] = useState(false);

  const restart = () => {
    setUserChoice("none");
    setToss(false);
    setTossSub(false);
    setYourChoice(0);
    setYourScore(0);
    setCompScore(0);
    setRandom(0);
    setCommentery("Start the game by clicking on any number above");
    setTossDone(false);
  }

  const playAgain = () => {
    setTossDone(false);
  }
  
  const setOdd = () => {
    setUserChoice("odd");
    setToss( true );
    setVisible("visible");
  } 
  const setEven = () => {
    setUserChoice("even");
    setToss( true );
    setVisible("visible");
  }
  const reset = () => {
    setToss(false);
    setUserChoice("none");
  }

  const submit = () => {
    setTossSub(true);
  }

  const anyRandom = () => {
    let a = [ 1 , 2 , 3 , 4 , 5 , 6];
    let index = Math.floor(Math.random()*6);
    setRandom(a[index]);
  }

  const updateScore =  (num) => {
    anyRandom();
    setYourChoice(num);
  }

  useEffect(() => {
    if( random != 0 && yourChoice !=0 ){
      if( (random + yourChoice ) % 2 == 0 && userChoice === "even" ){
        setYourScore(yourScore + 1);
        setCommentery(`Hurray! , You won the toss because ${random + yourChoice} is a even number , Play again to continue the streak `);
      }
  
      else if( (random + yourChoice ) % 2 != 0 && userChoice === "odd" ){
        setYourScore(yourScore + 1);
        setCommentery(`Hurray! , You won the toss because ${random + yourChoice} is a odd number , Play again to continue the streak`);
      }
  
      else{
        setCompScore(compScore + 1);
        if( (random + yourChoice) % 2 == 0 ){
          setCommentery(`Hard Luck! , You lost the toss because ${random + yourChoice} is a even number , Play again to won the next chance`);
        }
        else{
          setCommentery(`Hard Luck! , You loss the toss because ${random + yourChoice} is a odd number , Play again to won the next chance`);
        }
  
      }

      setTossDone(true);
      
    }
  }, [random , yourChoice])
  

  return (
    <>
    <Quitgame/>
    <h1 className=' text-3xl font-bold text-center pb-5 max-sm:text-lg'>Toss Time</h1>
    <div className=' flex justify-center space-x-10'>
      <button onClick={ setOdd } disabled = {toss} className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-sm:h-20 max-sm:w-20'>Odd</button>
      <button onClick={ setEven } disabled = {toss} className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-sm:h-20 max-sm:w-20'>Even</button>
    </div>
    <div className=' text-center font-semibold text-lg pt-5 max-sm:text-base'>  {toss ? `You have choose ${userChoice}` : "Choose wether odd or even"} </div>
    <div className=' pt-3 pb-5 flex justify-center space-x-5'>
      <button onClick={reset} disabled={tossSub} className=' bg-blue-900 text-white py-2 px-4 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>
        RESET
      </button>
      <button onClick={submit} className=' bg-blue-900 text-white py-2 px-4 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>
        SUBMIT
      </button>
    </div>
    {tossSub ? ( <div>
      <nav className=' list-none bg-blue-900 flex justify-center space-x-32 max-lg:space-x-20 max-md:space-x-10  max-sm:space-x-6 max-sm:h-12 max-[356px]:space-x-2 font-extrabold text-lg text-white uppercase'>
        <li className=' py-4 max-sm:text-xs'>Your Score: {yourScore}</li>
        <li className=' py-4 max-sm:text-xs'>Comp Score: {compScore}</li>
    </nav>
    <div className=' flex justify-center space-x-32 max-lg:space-x-10 pt-10 max-sm:space-x-5 '>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-[10px]'>Comp Choice</h1>
                <button className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs '>{random}</button>
            </div>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-[10px]'>Your Choice</h1>
                <div className=' flex space-x-6 max-lg:space-x-3 max-sm:space-x-2'>
                <button onClick={() => {updateScore(1)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>1</button>
                <button onClick={() => {updateScore(2)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>2</button>
                <button onClick={() => {updateScore(3)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>3</button>
                <button onClick={() => {updateScore(4)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>4</button>
                <button onClick={() => {updateScore(5)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>5</button>
                <button onClick={() => {updateScore(6)}} disabled={tossDone} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>6</button>
            </div>
            </div>
        </div>
    <h1 className=' pt-12 text-center font-semibold text-lg max-sm:text-base'><p className=' inline font-bold max-sm:text-base'>Commentery: </p>{commentery}</h1></div>)  : null}
     {tossDone ? <div className=' text-center pt-2 flex justify-center gap-4'>
      <button onClick={playAgain} className=' bg-blue-900 text-white py-1 px-3 rounded-md font-semibold active:bg-blue-950 '>PLAY AGAIN</button>
      <button onClick={restart} className=' bg-blue-900 text-white py-1 px-3 rounded-md font-semibold active:bg-blue-950 '>RESTART</button>
    </div> : null}
    </>
  )

}

export default Fullgame