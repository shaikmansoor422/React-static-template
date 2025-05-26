import React from 'react'
import "./Our_work.css"
import ecommerce from "../../assets/ecommerce.jpg"
import portfolio from "../../assets/portfolio.jpg"
import messaging from "../../assets/messaging.jpg"

const Our_work = () => {
  return (
    <>
    <div className="work">
  <div className="our-work">
    <p style={{ fontSize: "40px", fontWeight: "bold" }}>Our Work</p>
    <p style={{ fontSize: "larger" }}>
      We are a passionate team of three dedicated to delivering innovative
      application development and web design solutions tailored to your
      needs. Our expertise ensures functional, visually stunning, and
      user-friendly designs that drive engagement and growth. From robust
      applications to dynamic websites, we create digital experiences that
      leave a lasting impact. Partner with us to transform your ideas into
      reality with cutting-edge technology and creative excellence.
    </p>
  </div>

  <div className="cust-1">
    <div className="work-img">
      <img src={messaging} alt="" />
    </div>
    <div className="cust">Customer-1</div>
    <div className="work-name">Messaging Application</div>
    <div className="work-exp">
      We developed a messaging application that allows real-time
      communication through text, voice, and multimedia messages. It
      includes advanced features like group chats, secure encryption, and
      file sharing for seamless connectivity.
    </div>
  </div>

  <div className="cust-2">
    <div className="work-img">
      <img src={portfolio} alt="" />
    </div>
    <div className="cust">Customer-2</div>
    <div className="work-name">Portfolio</div>
    <div className="work-exp">
      We built a portfolio platform to showcase skills, projects, and
      achievements effectively. It provides a professional and visually
      appealing way to demonstrate expertise to potential employers or
      clients.
    </div>
  </div>

  <div className="cust-3">
    <div className="work-img">
      <img src={ecommerce} alt="" />
    </div>
    <div className="cust">Customer-3</div>
    <div className="work-name">E-commerce Dashboard</div>
    <div className="work-exp">
      We created an e-commerce admin dashboard for real-time inventory,
      order tracking, and analytics. It features role-based access, intuitive
      charts, and responsive design for streamlined business management.
    </div>
  </div>
</div>


    </>
  )
}

export default Our_work
