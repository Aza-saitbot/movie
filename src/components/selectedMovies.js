import React from "react"
import {Image, Row} from "react-bootstrap";
import {imgURL} from "../api/api";
import star from "../image/star.png";
import {useHistory} from "react-router-dom"

//обрабатывает страницу избранных фильмов
export const SelectedMovies = ({selectedMovie, removeSelectedMovie}) => {

    const history = useHistory()

    if (selectedMovie.length > 0) {
        const arrSelectedMovies = selectedMovie.map(movie =>
            <div className="movieItem__item"
                 key={movie.id}>
                <div className="movieItem__item__close"
                     onClick={() => removeSelectedMovie(movie.id)}
                ><p>X</p></div>
                <div className="movieItem__item__image"><img src={imgURL + movie.poster_path}/></div>
                <div className="movieItem__item__info" onClick={() => history.push('/' + movie.id)}>
                    <div>Дата выхода:{movie.release_date}</div>
                    <div className="movieItem__item__rating">
                        <div>{movie.vote_average} <Image width={18} height={18} src={star}/></div>
                    </div>
                </div>
                <div className="movieItem__item__name">{movie.title}</div>
            </div>
        )
        return (
            <div className="selected__wrapper__app">
                <h2>Избранное</h2>
                <Row className="selected__wrapper">
                    {arrSelectedMovies}
                </Row>
            </div>
        )
    }

    return (
        <div className="no__selectedMovies">
            <h2>Добавьте фильмы в избранное</h2>
        </div>
    )
}