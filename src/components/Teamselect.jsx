import React, { useEffect, useState } from 'react'
import Quitgame from './Quitgame';

function Teamselect({ userTeam , roboTeam , userPhoto , roboPhoto , selection }) {

    const [contries , setContries] = useState([]);
    let [yourTeam , setYourTeam] = useState("India");
    let [compTeam , setCompTeam] = useState("Pakistan");
    let [yourPhoto , setYourPhoto] = useState('https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg');
    let [compPhoto , setCompPhoto] = useState("https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg");
    let [commentery , setCommentery] = useState("Click on next below to confirm all the teams selection");

    const changeYourTeam = (e) => {
        setYourTeam(e.target.value);
    }

    const changeCompTeam = (e) => {
        setCompTeam(e.target.value);
    }

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        .then((res) => res.json())
        .then((res) => setContries(res.data))
    } , [])

    console.log(contries);

    useEffect(() => {
        contries.forEach((country) => {
            if (country.name === yourTeam) {
                setYourPhoto(country.flag);
            }
            if (country.name === compTeam) {
                setCompPhoto(country.flag);
            }
        });
    }, [yourTeam, compTeam, contries]);

    const next = () => {
        if(yourTeam == compTeam){
            setCommentery("Sorry , but your team and opponent's team can't be same");
        }
        else{
            userTeam(yourTeam);
            roboTeam(compTeam);
            userPhoto(yourPhoto);
            roboPhoto(compPhoto);
            selection(true);
        }
    }

    const teamList = ["India" , "Pakistan" , "Netherlands" , "Australia" , "Afghanistan" , "Bangladesh" , "Sri Lanka" , "New Zealand" , "South Africa" , "Zimbabwe"];
  return (
    <div>
        <Quitgame/>
        <h1 className=' text-center font-extrabold text-3xl uppercase mb-8 max-sm:mt-16 max-sm:text-xl'>Choose your team</h1>
        <div className=' flex justify-center space-x-10 pt-20 max-sm:space-x-4 max-sm:pt-10 '>
            <div>
                <p className=' text-center mb-2 font-semibold max-[380px]:text-sm max-[360px]:text-xs'>Select Your Team</p>
                <div style={{ backgroundImage: `url(${yourPhoto})` }} className = ' bg-cover w-72 h-48 mb-2 max-md:w-48 max-md:h-32 max-sm:w-36 max-sm:h-24 border-black border-2'>

                </div>
                <div className=' text-center'>
                <select value={yourTeam} onChange={changeYourTeam}>
                    {teamList.map((team) => (
                        <option key={team} value={team}>
                            {team}
                        </option>
                    ))}
                </select>
                </div>
            </div>
            <p className=' text-3xl font-bold pt-24 max-sm:text-lg max-sm:pt-16'>V/S</p>
            <div>
                <p className=' text-center mb-2 font-semibold max-[380px]:text-sm max-[360px]:text-xs'>Select Computer's Team</p>
                    <div style={{ backgroundImage: `url(${compPhoto})` }} className='w-72 h-48 bg-cover max-md:w-48 max-md:h-32 max-sm:w-36 max-sm:h-24 border-black border-2 mb-2' >
                </div>
                <div className=' text-center'>
                <select value={compTeam} onChange={changeCompTeam}>
                    {teamList.map((team) => (
                        <option key={team} value={team}>
                            {team}
                        </option>
                    ))}
                </select>
                </div>
            </div>
        </div>
        <h1 className=' text-center font-bold mt-24 text-lg max-sm:font-medium max-sm:text-sm max-[390px]:text-sm'>{commentery}</h1>
        <div className=' text-center mt-5'>
        <button onClick={next} className=' font-semibold bg-black text-white px-3 py-1 rounded-sm active:bg-white active:text-black max-sm:px-1 max-sm:text-sm'>
            Next
        </button>
        </div>
    </div>
  )
}

export default Teamselect