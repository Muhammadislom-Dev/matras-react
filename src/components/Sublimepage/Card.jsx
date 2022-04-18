import React from "react";

const Card = ({date, cardIndexs}) =>{
    return(
        <div>
            {
                date[cardIndexs].map(items =>(
                    <div className='cards'>
                        <img className="sublimepage__pictures img-fluid" src={items.img} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
export default Card