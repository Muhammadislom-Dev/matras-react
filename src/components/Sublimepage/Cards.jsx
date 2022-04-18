import React from 'react'

const Cards = ({data, cardIndex}) =>{
    return(
        <div>
            {
                data[cardIndex].map(item =>(
                    <div className='card'>
                        <p className='sublimepage__text'>{item.title}</p>
                        <p className='sublimepage__texts'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards