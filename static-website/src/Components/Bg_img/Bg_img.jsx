import React from 'react'
import "./Bg_img.css"
import Background_img from "../../assets/Background_img.jpg";


const Bg_img = () => {
    return (
        <>
            <div className="bgimg">
                <img src={Background_img} alt="" />

            </div>
            <div className="idea">Your Ideas, Our Expertise—Let’s Build Something Great.</div>

        </>
    )
}

export default Bg_img
