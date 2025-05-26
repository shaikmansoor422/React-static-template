import React from 'react'
import "./Team.css"
import T1 from "../../assets/T1.jpg"
import T2 from "../../assets/T2.jpg"
import T3 from "../../assets/T3.jpg"


const Team = () => {
  return (
    <>
    <p className="p1">OUR TEAM</p>
    <p className="p2">Meet the team</p>
    <div className="team">
        <div className="developer">
            <div className="team-imgs">
                <img src={T1} alt="" /></div>
            <div className="team-names">John</div>
            <div className="team-content">DEVELOPER</div>
        </div>
        <div className="designer">
            <div className="team-imgs">
                <img src={T2} alt="" /></div>
            <div className="team-names">Ethan Blake</div>
            <div className="team-content">IT - ARCHITECT</div>
        </div>

        <div className="fixer">
            <div className="team-imgs">
                <img src={T3} alt="" /></div>
            <div className="team-names">Sophie Bennett</div>
            <div className="team-content">ADMINISTRATOR</div>
        </div>
    </div>
    </>
  )
}

export default Team
