import React from "react"
import {Image} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import star from "../image/star.png"
import {imgURL} from "../api/api";

//Карточка одного элемента фильма
export const MovieItem = ({movie}) => {

    const history = useHistory()
    return (
        <div className="movieItem__item__wrapper"
             onClick={() => history.push('/' + movie.id)}>
            <div className="movieItem__item__image"><img src={imgURL + movie.poster_path}/></div>
            <div className="movieItem__item__info">
                <div>Дата выхода:{movie.release_date}</div>
                <div className="movieItem__item__rating">
                    <div>{movie.vote_average} <Image width={18} height={18} src={star}/></div>
                </div>
            </div>
            <div className="movieItem__item__name">{movie.title}</div>
        </div>
    )
}