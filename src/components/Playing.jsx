import React, { useState , useEffect , useRef } from 'react'
import Quitgame from './Quitgame'
import { Link } from 'react-router-dom';
import Teamselect from './Teamselect';

function Playing() {

    let [userChoice, setUserChoice] = useState("none");
    let [matchStart , setMatchStart] = useState(false);
    let [matchEnd , setMatchEnd] = useState(false);
    let [toss, setToss] = useState(false);
    let [tossSub , setTossSub ] = useState(false);
    let [ random , setRandom ] = useState(0);
    let [yourChoice , setYourChoice] = useState(0);
    let [commentery , setCommentery] = useState("Start the game by clicking on any number above");
    let [ tossDone , setTossDone ] = useState(false);
    let [tossWinner , setTossWinner] = useState("none");
    let [ winnerChoice , setWinnerChoice ] = useState("none");
    let [choiceDone , setChoiceDone] = useState(false);
    let [currScore , setCurrScore] = useState(0);
    let [target , setTarget] = useState(0);
    let [firstInning , setFirstInning] = useState(false);
    let [battingOut , setBattingOut] = useState(false);
    let [scoreName , setScoreName] = useState("You");
    let [nextToDo , setNextToDo] = useState("bowling");
    let [userTeam , setUserTeam] = useState('');
    let [roboTeam , setRoboTeam] = useState('');
    let [userPhoto , setUserPhoto] = useState('');
    let [roboPhoto , setRoboPhoto] = useState('');
    let [teamSel , setTeamSel] = useState(false);

    const prevScore = useRef();

    const tossAgain = () => {
      setMatchStart(false);
      setTossDone(false);
      setUserChoice("none");
      setToss(false);
      setTossSub(false);
      setRandom(0);
      setYourChoice(0);
      setCommentery("Start the game by clicking on any number above");
      setTossDone(false);
      setTossWinner("none");
      setWinnerChoice("none");
      setChoiceDone(false);
      setCurrScore(0);
      setTarget(0);
      setFirstInning(false);
      setBattingOut(false);
      setScoreName("You");
      setNextToDo("bowling");
      setUserPhoto('');
      setRoboPhoto('');
      setUserTeam('');
      setRoboTeam('');
      setTeamSel(false);
      setMatchEnd(false);
    }

    const next = () => {
      setTossDone(true);
      setMatchStart(true);
      setCommentery("Start the game by clicking on any number above");
      setRandom(0);
      setYourChoice(0);
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

    const randomChoice = () => {
      let choices = [ "batting" , "bowling" ];
      let choiceIndex = Math.floor(Math.random()*2);
      setWinnerChoice(choices[choiceIndex]);
      return(choices[choiceIndex]);
    }
    
    const updateScore =  (num) => {
        anyRandom();
        setYourChoice(num);
    }

    const tossDes = (str) => {
      setCommentery(`${userTeam} have decided to ${str} first , Click on next to play the game`);
      setWinnerChoice(str);
      setChoiceDone(true);
    }

    const changeRoboPhoto = (data) => {
      setRoboPhoto(data);
    }

    const changeUserPhoto = (data) => {
      setUserPhoto(data);
    }

    const changeRoboTeam = (data) => {
      setRoboTeam(data);
    }

    const changeUserTeam = (data) => {
      setUserTeam(data);
    }

    const changeSel = (data) => {
      setTeamSel(data);
    }

    useEffect(() => {
        if( random != 0 && yourChoice !=0 && tossDone == false ){
          if( (random + yourChoice ) % 2 == 0 && userChoice === "even" ){
            setTossWinner("You");
            setCommentery(`Hurray! , ${userTeam} won the toss because ${random + yourChoice} is even , click below to choose`)
          }
      
          else if( (random + yourChoice ) % 2 != 0 && userChoice === "odd" ){
            setTossWinner("You"); 
            setCommentery(`Hurray! , ${userTeam} won the toss because ${random + yourChoice} is odd , click below to choose`)
          }

          else{
            setTossWinner("Comp");
            if( (random + yourChoice) % 2 == 0 ){
              setCommentery(`Hard Luck! , ${userTeam} lost the toss because ${random + yourChoice} is even , ${roboTeam} decide to ${randomChoice()} first`);
            }
            else{
              setCommentery(`Hard Luck! , ${userTeam} lost the toss because ${random + yourChoice} is a odd , ${roboTeam} decide to ${randomChoice()} first`);
            }
      
          }
          
        }

      }, [random , yourChoice , tossDone])

      useEffect(() => {
        if( ( tossWinner == "You" && winnerChoice == "batting" ) || ( tossWinner == "Comp" && winnerChoice == "bowling" ) ){
          setScoreName("You");
          setNextToDo("bowling");
        }
        else{
          setScoreName("Comp");
          setNextToDo("batting");
        }
      } , [tossWinner , winnerChoice])

      const secondInning = () => {
        setFirstInning(true);
        setBattingOut(false);
        setCurrScore(0);
        if(scoreName == "You"){
          setScoreName("Comp");
        }
        else{
          setScoreName("You");
        }
      }

      useEffect (() => {
        if(tossDone){
          if( (winnerChoice == "batting" && tossWinner == "You") || (winnerChoice == "bowling" && tossWinner == "Comp") ){
            prevScore.current = currScore;
            if(!firstInning && random != 0){
              setCurrScore(currScore + yourChoice);
            }
            if( yourChoice == random && random !=0 && !firstInning ){
              setCurrScore(prevScore.current);
              setBattingOut(true);
              const newTarget = currScore + 1;
              setTarget(currScore + 1);
              setCommentery(`${userTeam} out on ${currScore} and the target for ${roboTeam} is ${newTarget}`);
              setRandom(0);
            }
            if(firstInning){
              setCurrScore(currScore + random);
              const updScore = currScore + random;
              if(updScore > target){
                setCommentery(`${userTeam} lost , Click on play again below to beat ${roboTeam}`);
                setBattingOut(true);
                setMatchEnd(true);
              }
              else if(yourChoice == random){
                setCurrScore(prevScore.current);
                setCommentery(`${userTeam} won by ${target - currScore - 1} runs , Click on play again below to beat ${roboTeam} again`);
                setBattingOut(true);
                setMatchEnd(true);
              }
            }
          }

          else if ( (winnerChoice == "batting" && tossWinner == "Comp") || (winnerChoice == "bowling" && tossWinner == "You") ){
            prevScore.current = currScore;
            if(!firstInning && random != 0){
              setCurrScore(currScore + random);
            }
            if( yourChoice == random && random != 0 && !firstInning ){
              setCurrScore(prevScore.current);
              setBattingOut(true);
              const newTarget = currScore + 1;
              setTarget( currScore + 1 );
              setCommentery(`${roboTeam} out on ${currScore} and the target for ${userTeam} is ${newTarget}`);
              setRandom(0);
            }
            if(firstInning){
              setCurrScore(currScore + yourChoice);
              const updScore = currScore + yourChoice;
              if(updScore > target){
                setCommentery(`${userTeam} won , Click on play again below to beat ${roboTeam} again`);
                setBattingOut(true);
                setMatchEnd(true);
              }
              else if(yourChoice == random){
                setCurrScore(prevScore.current);
                setCommentery(`${userTeam} lose by ${target - currScore - 1} runs , Click on play again below to beat ${roboTeam}`);
                setBattingOut(true);
                setMatchEnd(true);
              }
            }
          }
        }
      } , [tossDone , yourChoice , random , target])


  return (
    <>
    {(!teamSel) ? <Teamselect userPhoto={changeUserPhoto} roboPhoto={changeRoboPhoto} userTeam={changeUserTeam} roboTeam={changeRoboTeam} selection={changeSel} /> : null }
    {(tossDone || !teamSel) ? null : (<div>
    <Quitgame/>
    <h1 className=' text-2xl font-bold text-center pb-5 max-sm:text-lg'>Toss Time<br/>{userTeam} Vs {roboTeam}</h1>
    <div className=' flex justify-center space-x-10'>
      <button onClick={ setOdd } disabled = {toss} className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-sm:h-20 max-sm:w-20'>Odd</button>
      <button onClick={ setEven } disabled = {toss} className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-sm:h-20 max-sm:w-20'>Even</button>
    </div>
    <div className=' text-center font-semibold text-lg pt-5 max-sm:text-base'>  {toss ? `${userTeam} have choose ${userChoice}` : "Choose wether odd or even"} </div>
    <div className=' pt-3 pb-5 flex justify-center space-x-5'>
      <button onClick={reset} disabled={tossSub} className=' bg-blue-900 text-white py-2 px-4 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>
        RESET
      </button>
      <button onClick={submit} className=' bg-blue-900 text-white py-2 px-4 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>
        SUBMIT
      </button>
    </div>
    { tossSub ? (<div className=' flex justify-center space-x-40 max-lg:space-x-20 max-md:space-x-10 max-sm:space-x-3 pt-8'>
        <div className=' flex flex-col space-y-8'>
            <h1 className=' text-center font-bold text-xl max-sm:text-base max-[450px]:text-xs'>Comp Choice</h1>
            <button className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs '>{random}</button>
        </div>
        <div className=' flex flex-col space-y-8'>
            <h1 className=' text-center font-bold text-xl max-sm:text-base max-[450px]:text-xs'>Your Choice</h1>
            <div className=' flex space-x-6 max-lg:space-x-3 max-sm:space-x-2'>
                <button onClick={() => {updateScore(1)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>1</button>
                <button onClick={() => {updateScore(2)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>2</button>
                <button onClick={() => {updateScore(3)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>3</button>
                <button onClick={() => {updateScore(4)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>4</button>
                <button onClick={() => {updateScore(5)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>5</button>
                <button onClick={() => {updateScore(6)}} className=' border-2 border-black rounded-full max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600'>6</button>
            </div>
        </div>
    </div>) : null}
    { tossSub ? (<h1 className=' pt-6 text-center font-semibold text-lg max-sm:text-base'><p className=' inline font-bold max-sm:text-base'>Commentery: </p>{commentery}</h1>) : null}
    { tossWinner == "You" ? (<div className=' py-3 flex justify-center space-x-4'>
      <button onClick={() => {tossDes("batting")}} disabled = {choiceDone} className=' bg-blue-900 text-white py-1 px-3 rounded-md font-semibold active:bg-blue-950 '>
        Batting
      </button>
      <button onClick={() => {tossDes("bowling")}} disabled = {choiceDone} className=' bg-blue-900 text-white py-1 px-3 rounded-md font-semibold active:bg-blue-950 '>
        Bowling
      </button>
    </div>) : null}
    { !(tossWinner == "none" || winnerChoice == "none") ? (<div className=' text-center pt-2'>
      <button onClick = {next} className=' font-semibold bg-black text-white px-3 py-1 rounded-sm active:bg-white active:text-black max-sm:text-sm max-sm:px-1 '>Next</button>
    </div>) : null}
    </div>)}




    {matchStart ? (<div>
        <div className=' flex justify-between'>
            <Quitgame/>
            <button onClick={tossAgain} className=' capitalize border-2 border-black rounded-md py-4 px-8 bg-black text-red-600 active:bg-gray-900 max-sm:px-4 max-sm:py-2'>Toss Again</button>
        </div>
        <h1 className=' text-center text-2xl font-extrabold uppercase max-sm:text-lg max-sm:mt-8'>match time</h1>
        <div className=' flex justify-center space-x-2 mt-4'>
          <div>
            <div style={{ backgroundImage: `url(${userPhoto})` }} className=' w-36 h-24 bg-cover max-sm:w-36 max-sm:h-24 border-2 border-black'>
            </div>
            <p className=' text-center text-lg font-bold'>{userTeam}</p>
          </div>
          <p className=' text-center text-2xl font-extrabold pt-8'>V/S</p>
          <div>
            <div style={{backgroundImage: `url(${roboPhoto})`}} className=' w-36 h-24 bg-cover max-sm:w-36 max-sm:h-24 border-2 border-black'>
            </div>
            <p className=' text-center text-lg font-bold'>{roboTeam}</p>
          </div>
        </div>
        <h1 className=' flex justify-center py-10 space-x-4'>
            <p className=' font-bold text-lg max-sm:text-sm'>Toss Update: </p>
            <p className=' font-semibold text-lg max-sm:text-sm'>{ (tossWinner == "You") ? `${userTeam} won the toss and decided to ${winnerChoice} first` : `${roboTeam} won the toss and decided to ${winnerChoice} first` }</p>
        </h1>
        <nav className=' list-none bg-blue-900 flex justify-center space-x-40 max-lg:space-x-20 max-md:space-x-10  max-sm:space-x-6 max-sm:h-12 max-[356px]:space-x-2 font-extrabold text-lg text-white uppercase'>
          <li><div style={{backgroundImage: `url(${userPhoto})`}} className=' bg-cover w-24 max-sm:w-16 h-full'></div></li>
          <li className='py-4 max-sm:text-xs'>{(scoreName == "You") ? `${userTeam} Score: ${currScore}` : `${roboTeam} Score: ${currScore}`}</li>
          <li className='py-4 max-sm:text-xs'>Target: {target}</li>
          <li><div style={{backgroundImage: `url(${roboPhoto})`}} className=' bg-cover w-24 max-sm:w-16 h-full'></div></li>
        </nav>
        <div className=' flex justify-center space-x-32 max-lg:space-x-10 pt-10 max-sm:space-x-5 '>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-xs'>Comp Choice</h1>
                <button className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs '>{random}</button>
            </div>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-xs'>Your Choice</h1>
                <div className=' flex space-x-6 max-lg:space-x-3 max-sm:space-x-2'>
                <button onClick={() => {updateScore(1)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>1</button>
                <button onClick={() => {updateScore(2)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>2</button>
                <button onClick={() => {updateScore(3)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>3</button>
                <button onClick={() => {updateScore(4)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>4</button>
                <button onClick={() => {updateScore(5)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>5</button>
                <button onClick={() => {updateScore(6)}} disabled = {battingOut} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>6</button>
            </div>
            </div>
        </div>
        <h1 className=' pt-6 text-center font-semibold text-lg max-sm:text-base'><p className=' inline font-bold max-sm:text-base'>Commentery: </p>{commentery}</h1>
        { (battingOut) ? (<div className=' flex justify-center pt-2 '>
              { (!matchEnd) ? (<button onClick={secondInning} className=' px-1 py-1 bg-black text-white max-sm:text-sm max-sm:px-1'>Click for {nextToDo}</button>) : (<button onClick={tossAgain} className=' px-2 py-1 bg-black text-white max-sm:text-sm max-sm:px-1 '>Play Again</button>)}
              </div>) : null}
    </div>) : null}
    </>
  )
}

export default Playing