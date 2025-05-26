import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <>
        <p className="p1">PRICING</p>
    <p className="p2">Choose a pricing plan that fits your needs.</p>
    <div className="price-div">
        <div>
            <div className="price-var">Basic</div>
            <p>10GB Storage</p>
            <p>10 Emails</p>
            <p>10 Domains</p>
            <p>Endless Support</p>
            <div className="price-var">&#36;10 /month</div>
        </div>
        <div>
            <div className="price-var">Pro</div>
            <p>25GB Storage</p>
            <p> 25 Emails</p>
            <p>25 Domains</p>
            <p>Endless Support</p>
            <div className="price-var">&#36;25 /month</div>
        </div>
        <div>
            <div className="price-var">Premium</div>
            <p>50GB Storage</p>
            <p>50 Emails</p>
            <p>50 Domains</p>
            <p>Endless Support</p>
            <div className="price-var">&#36;50 /month</div>
        </div>
    </div>
    </>
  )
}

export default Pricing
