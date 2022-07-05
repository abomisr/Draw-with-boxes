import React from "react"
import Box from './Box'
import Boxes from "../Boxes_data"

export default function Home(props){

    let [squers , setsquers] = React.useState(Boxes)

    function toggle(id){
        setsquers(prevSquers => {
            return prevSquers.map(squer=>{
                return squer.id === id? {...squer,on: !squer.on} : squer
            })
        })
    }

    let squersEle = squers.map(squer=>{return (
    <Box on={squer.on} key={squer.id} toggle={()=>toggle(squer.id)} />
    )})

    return(
        <div className="boxes">
            {squersEle}
        </div>
    ) 
}