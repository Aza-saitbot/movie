import React, {useEffect, useState} from "react"
import {fetchNameGenres} from "../api/api";
import {Dropdown} from "react-bootstrap";

//Выбор жанров
export const GenreBy = ({setSelectedGenre}) => {
    //добавления в состояние идентфикаторов и наименование жанров
    const [genres, setGenres] = useState([])
    //локальное состояния текущего жанра
    const [genreName, setNameGenre] = useState('')

    //Запрос на сервер, для извлечения идентификаторов и наименование жанров
    useEffect(() => {
        fetchNameGenres().then(data => {
            setGenres(data.genres)
        })
    }, [])

    const selectedGenre = (id) => {
        //отправка идентификатора к глобальному состоянию в App
        setSelectedGenre(id)
        //поиск для наименование заголовки категории
        let nameGenre = genres.find(m => m.id === id)
        //установка для наименование категории
        setNameGenre(nameGenre.name)
    }


    if (genres.length === 0) {
        return <div></div>
    }

    return (
        <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
                {genreName || "жанр"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {genres.map(genre => (
                    <Dropdown.Item
                        onClick={() => selectedGenre(genre.id)}
                        key={genre.id}
                    >
                        {genre.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
