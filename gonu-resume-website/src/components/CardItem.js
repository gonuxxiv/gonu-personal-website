import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <a className="cards__item__link" href={props.path} target="_blank">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="some image" className="cards__item__img"></img>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem
