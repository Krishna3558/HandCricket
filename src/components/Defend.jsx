import React from 'react'
import { useState , useEffect , useRef } from 'react'
import Quitgame from './Quitgame';
import Teamselect from './Teamselect';

function Defend() {

    let [target , setTarget ] = useState(0);
    let [isCal , setIsCal ] = useState(false);
    let [tar , setTar ] = useState(false);
    let [currScore , setCurrScore] = useState(0);
    let [ tarDone , setTarDone ] = useState(false);
    let [ random , setRandom ] = useState(0);
    let [ gameOver , setGameOver ] = useState(false);
    let [commentery , setCommentery] = useState("Start the game by clicking on any number above");
    let [choice , setChoice ] = useState(0);
    let [you , setYou] = useState('');
    let [comp , setComp] = useState('');
    let [youPhoto , setYouPhoto] = useState('');
    let [compPhoto , setCompPhoto] = useState('');
    let [sel , setSel] = useState(false);
    let [tarComment , setTarComment] = useState('Choose difficulty mode');
    let [difficulty , setDifficulty] = useState('');

    const prevScore = useRef();

    const playAgain = () => {
        setTarget(0);
        setIsCal(false);
        setTar(false);
        setCurrScore(0);
        setCommentery("Choose difficulty mode");
        setRandom(0);
        setChoice(0);
        setTarDone(false);
        setGameOver(false);
        setYou('');
        setComp('');
        setYouPhoto('');
        setCompPhoto('');
        setSel(false);
        setTarComment('Click on calculate target to calculate the target');
        setDifficulty('');
    }

    const targGet = () => {
        let x = 0;
        if( difficulty == "hard" ){
            while( x < 10 ){
                x = Math.floor(Math.random()*30);
                setTarget(x);
            }
        }
        else if( difficulty == "medium"){
            while( x < 30 ){
                x = Math.floor(Math.random()*60);
                setTarget(x);
            }
        }
        else if( difficulty == "easy"){
            while( x < 60 ){
                x = Math.floor(Math.random()*100);
                setTarget(x);
            }
        }
        setTarget(x+1);
        setIsCal(true);
        setTarComment("Click on play button to defend the target");
        setTarDone(true);
    }

    const tarConf = () => {
        setTar(true);
    }

    const anyRandom = (num) => {
        let a = [ 1 , 2 , 3 , 4 , 5 , 6];
        let index = Math.floor(Math.random()*6);
        setRandom(a[index]);
        setChoice(num);
    }

    useEffect(() => {
        prevScore.current = currScore;
        setCurrScore( currScore + random );
    },[random])

    useEffect(() => {
        
      if( random == 1){
        setCommentery(`${comp} is trying to be steady`);
      }
      if( random == 2){
        setCommentery(`Remind some tricks , otherwise ${comp} win slowly by dobules`);
      }
      if( random == 3){
        setCommentery(`${comp} is smart enough`);
      }
    if( random == 4){
        setCommentery(`Oh , ${you} have to take a wicket`);
    }
    if( random == 5){
        setCommentery(`Out him otherwise ${comp} easily won`);
    }
    if( random == 6){
        setCommentery(`Show some skills to ${comp}`);
    }
    if( currScore > target ){
        console.log("win");
        setCommentery("Hard Luck! , You lost the match , Click below to play again");
        setGameOver(true);
    }
    if( choice == random && random != 0){
        setCommentery(`Hurray! , You won the match by ${target - currScore - 1} runs , Click below to play again`);
        setGameOver(true);
        setCurrScore(prevScore.current);
    }
    }, [random , target , choice , currScore])

    const changeRoboTeam = (data) => {
        setComp(data);
    }

    const changePhoto = (data) => {
        setYouPhoto(data);
    }

    const changeRobo = (data) => {
        setCompPhoto(data);
    }
  
    const changeUserTeam = (data) => {
        setYou(data);
    }
  
    const changeSel = (data) => {
        setSel(data);
    }
    


  return (
    <div>
        { !sel ? <Teamselect userTeam={changeUserTeam} roboTeam={changeRoboTeam} selection={changeSel} userPhoto={changePhoto} roboPhoto={changeRobo} /> : null }
    {(sel) ? <div>
    <Quitgame/>
    <h1 className=' text-center font-extrabold text-3xl uppercase pb-8 max-sm:text-lg'>{you} vs  {comp}</h1>
    <div>
        <div className=' flex justify-center space-x-4 mb-4'>
            <button onClick={() => {setDifficulty("easy") , setTarComment("You choose easy mode , Click on calculate target to get the target")}} disabled={isCal} className=' bg-blue-900 text-white py-1 px-1 h-10 w-20 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>Easy</button>
            <button onClick={() => {setDifficulty("medium") , setTarComment("You choose medium mode , Click on calculate target to get the target")}} disabled={isCal} className=' bg-blue-900 text-white py-1 px-1 h-10 w-20 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>Medium</button>
            <button onClick={() => {setDifficulty("hard") , setTarComment("You choose hard mode , Click on calculate target to get the target")}} disabled={isCal} className=' bg-blue-900 text-white py-1 px-1 h-10 w-20 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>Hard</button>
        </div>
        <div className=' flex justify-center'>
    {(difficulty == "easy" || difficulty == "medium" || difficulty == "hard") ? <button onClick={targGet} disabled = {isCal} className=' bg-blue-900 text-white py-2 px-2 rounded-md font-semibold active:bg-blue-950 max-sm:px-2 max-sm:py-1 '>Calculate Target</button> : null}
    </div></div>
    {!tar ? <div className=' text-center font-semibold text-lg mt-4 max-sm:text-base'>{tarComment}</div> : null }
    { tarDone ? (<h1 className=' text-center font-extrabold text-3xl uppercase py-4 max-sm:text-sm'>The target is : {target}</h1>) : null}
    { tarDone ? (<div className=' text-center pb-8 '>
        <button onClick={tarConf} disabled = {tar} className=' font-semibold bg-black text-white px-3 py-1 rounded-sm active:bg-white active:text-black'>Play</button>
    </div>) : null}
    { tar ? (<nav className=' list-none bg-blue-900 flex justify-center space-x-40 max-lg:space-x-20 max-md:space-x-10  max-sm:space-x-6 max-sm:h-12 max-[356px]:space-x-2 font-extrabold text-lg text-white uppercase'>
        <li><div style={{backgroundImage: `url(${compPhoto})`}} className=' bg-cover w-24 max-sm:w-16 h-full'></div></li>
        <li className=' py-4 max-sm:text-xs'>{comp}: {currScore}</li>
        <li className=' py-4 max-sm:text-xs'>Target: {target}</li>
        <li><div style={{backgroundImage: `url(${youPhoto})`}} className=' bg-cover w-24 max-sm:w-16 h-full'></div></li>
    </nav>) : null}
    { tar ? (<div className=' flex justify-center space-x-32 max-lg:space-x-10 pt-10 max-sm:space-x-5 '>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-[10px]'>Comp Choice</h1>
                <button className=' border-2 border-black rounded-full h-28 w-28 bg-blue-400 text-white max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs '>{random}</button>
            </div>
            <div className=' flex flex-col space-y-8'>
                <h1 className=' text-center font-bold text-lg max-sm:text-base max-[450px]:text-sm max-[388px]:text-[10px]'>Your Choice</h1>
                <div className=' flex space-x-6 max-lg:space-x-3 max-sm:space-x-2'>
                <button onClick={() => {anyRandom(1)}} disabled={gameOver}  className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>1</button>
                <button onClick={() => {anyRandom(2)}} disabled={gameOver} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>2</button>
                <button onClick={() => {anyRandom(3)}} disabled={gameOver} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>3</button>
                <button onClick={() => {anyRandom(4)}} disabled={gameOver} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>4</button>
                <button onClick={() => {anyRandom(5)}} disabled={gameOver} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>5</button>
                <button onClick={() => {anyRandom(6)}} disabled={gameOver} className=' border-2 border-black rounded-full  h-28 w-28 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16 max-sm:h-12 max-sm:w-12 max-[450px]:h-[40px] max-[450px]:w-[40px] max-[450px]:text-xs'>6</button>
            </div>
            </div>
        </div>) : null}
    { tar ? (<h1 className=' pt-12 text-center font-semibold text-lg max-sm:text-base '><p className=' inline font-bold max-sm:text-base'>Commentery: </p>{commentery}</h1>) : null }
    <div className=' text-center pt-4'>
        { gameOver ? (<button onClick={playAgain} className=' font-semibold bg-black text-white px-3 py-1 rounded-sm active:bg-white active:text-black'>
            Play Again
        </button>) : null }
    </div>
    </div> : null}
    </div>
  )
}

export default Defend