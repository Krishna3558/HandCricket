import React from 'react'
import Navbar from './Navbar'

function Help() {
  return (
    <div>
        <Navbar/>
        <h1 className=' text-center font-extrabold text-xl py-6'>How to play this game?</h1>
        <h2 className=' font-bold text-lg text-center'>This game has 4 options at start</h2>
        <li className=' list-disc font-semibold capitalize pt-6'>Play a full game
            <p className=' font-normal pl-6 normal-case'> In this you firstly have to play the toss which is based on the game of odd even and then
                you have to choose odd or even and the toss will start , there is a random number by computer 
                between 1 to 6 and you also have an option to select any number within this range i.e. 1 to 6
                and if the sum of you choosed number and the computer's number is odd or even whatever you selected
                , it means for example: you select 5 and computer has 2 , then the sum is 7 which is an odd number 
                if you firstly select odd then you win the toss but if you loss the toss then computer will select
                batting or bowling.
            </p>
            <br/>
            <p className=' font-normal pl-6 normal-case'>
                If you are batting first then you will put the runs on scoreboard and then defend it the procedure 
                of making runs is same you have to select any number within 1 to 6 and if the number you choose and
                the computer choose is not same then you continue hitting runs but if your number and computer's number
                is same then you will got out and then you have to defend the target by bowling , if you defend the 
                target then you won the match but if you fail to do so then you loose the match.
            </p>
            <br/>
            <p className=' font-normal pl-6 normal-case'>
                If you are bowling first then you have to stop the computer by creating same number as the computer
                choose and when computer got out you have to make 1 run extra then computer to win the match.
            </p>
        </li>
        <li className=' list-disc font-semibold capitalize pt-6'> chase a target
            <p className=' font-normal pl-6 normal-case'>
                In this game , you have given a target which you have to chase in the limited wickets and the target
                will be given as a random number which you have to choose and in this option you only need to bat so 
                that you only need to chase the target. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae esse aperiam consequuntur molestiae illo animi, recusandae, eveniet numquam, quod velit. Rem cupiditate minima sint ut quo fugit a dolores.
                Sint excepturi nulla at distinctio iste sapiente fugit quis quasi aperiam explicabo laudantium, ut molestias, architecto adipisci laborum accusamus mollitia. Quae quas totam hic culpa maiores recusandae perferendis ex est!
            </p>
        </li>
        <li className=' list-disc font-semibold capitalize pt-6'> defend a target
            <p className=' font-normal pl-6 normal-case'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio harum est amet expedita suscipit deserunt iure ab laboriosam error minima explicabo unde repudiandae, aperiam voluptatum ad voluptatem dicta ea.
                Voluptatem maxime vitae, tempora tenetur vel earum ipsum amet nam? Dicta iusto libero aliquam quam quis veritatis autem omnis praesentium, eligendi sint? Incidunt omnis voluptatibus aut ex odio tempora delectus.
                Expedita consectetur quaerat commodi sed hic dignissimos pariatur architecto dolores consequuntur velit ullam molestiae vel repellendus, adipisci officiis autem deleniti quisquam aliquid dolorum quas distinctio? Repellendus quasi atque eius accusantium!
                Error saepe doloribus libero praesentium commodi? Quibusdam assumenda quia at maiores? Reprehenderit ducimus, eveniet labore esse placeat ex, in laudantium eos consequuntur odit, iste maxime? In consequatur aliquid cumque corrupti.
            </p>
        </li>
        <li className=' list-disc font-semibold capitalize pt-6'> play a toss
            <p className=' font-normal pl-6 normal-case'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo eveniet vero commodi error eius, voluptatum iste assumenda ipsa beatae est doloribus quibusdam reiciendis, suscipit fugit et incidunt omnis possimus.
                Sint, modi culpa tempore atque, rerum nostrum facere sequi blanditiis vero, quas quibusdam. Debitis enim maiores voluptate, exercitationem, accusamus velit dicta dolor beatae eos iure hic excepturi deserunt, cumque reiciendis.
                Natus labore veniam, consectetur voluptas vitae quisquam quos doloribus. Odio labore cupiditate nemo, similique cumque in facere, temporibus, quas provident eos veniam harum molestias suscipit odit id nihil! Esse, hic.
            </p>
        </li>
    </div>
  )
}

export default Help