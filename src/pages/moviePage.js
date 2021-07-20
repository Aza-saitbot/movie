import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./moviePage.css";

const imgUrl = "https://image.tmdb.org/t/p/w500";

export const MoviePage = ({movies,addSelectedMovie}) => {
    const [currentMovie, setCurrentMovie] = useState("");

    const {id} = useParams();

    useEffect(() => {
            let current = movies.find((m) => m.id == id);
            setCurrentMovie(current);

    }, [id]);


    return (
        <div
            className="moviePage-wrapper"
            style={{
                backgroundImage: currentMovie.backdrop_path &&`url(${imgUrl + currentMovie.backdrop_path})`
            }}
        >
            <div className="moviePage__info">
                <h1>{currentMovie.title}</h1>
                <div className="moviePage__info__genre">
                    <div>
                        <p>{currentMovie.vote_average}</p>
                    </div>
                    <div>
                        <span>Дата релиза: {currentMovie.release_date}</span>
                    </div>
                    <div></div>
                </div>
                <p>{currentMovie.overview}</p>
            </div>
            <div className="moviePage-footer">
                <div className="moviePage-wrapper_footer">
                    <div className="moviePage-wrapper_footer_item">Смотреть</div>
                    <div className="moviePage-wrapper_footer_item">Выбрать сезон</div>
                    <div className="moviePage-wrapper_footer_item">Трейлер</div>
                </div>
                <div className="moviePage-wrapper_footer_addSelected"
                     onClick={()=>addSelectedMovie(id)}>
                    Добавить в избранное
                </div>
            </div>
        </div>
    );
};
