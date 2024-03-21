import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return(
       <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="description-box-nav">Description</div>
            <div className="description-box-nav fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and
              sell physical goods, services, and digital products over the
              internet rather than at a brick-and-mortar location. Through 
              an e-commerce website, a business can process orders, accept 
              payments, manage shipping and logistics, and provide customer 
              service.An ecommerce app allows users to shop online, browse 
              product catalogs, create wish lists, add items to a cart, and
              complete purchases. It also provides payment processing, shipping, 
              and order management capabilities.</p>
              <p>Ecommerce is a method of buying and selling goods and services
                 online. The definition of ecommerce business can also include 
                 tactics like affiliate marketing. You can use ecommerce 
                 such as your own website, an established selling website like
                Amazon, or social media to drive online sales.</p>
        </div>
       </div>
    )
}
export default DescriptionBox;