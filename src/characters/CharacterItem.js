import React from 'react'


const CharacterItem = ({item}) =>{
    console.log(item);
    return(
        <div className="card mt-3">
            <div className="card-inner">
                <div className="card-font">
                    <img src={item.img} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Actor name: </strong>{item.portrayed}</li>
                        <li><strong>Nickname: </strong>{item.nickname}</li>
                        <li><strong>Birthday: </strong>{item.birthday}</li>
                        <li><strong>Status: </strong>{item.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default CharacterItem;

