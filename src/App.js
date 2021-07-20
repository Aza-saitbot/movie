import React, {useEffect, useState} from "react"
import './App.css';
import {fetchAllMovies, fetchMoviesByGenre, fetchMoviesSortBy, fetchMoviesSortByYear} from "./api/api";
import {Route, Switch} from "react-router-dom";
import {MoviePage} from "./pages/moviePage";
import {Spinner} from "react-bootstrap"
import {MainPage} from "./pages/mainPage";
import {SelectedMovies} from "./components/selectedMovies";

const portionSize = 10

function App() {
    //добавление всех фильмов
    const [movies, setMovies] = useState('')
        //состояние текущей стр
    const [currentPage, setCurrentPage] = useState(1)
        //добавление фильмов в избранное
    const [selectedMovie, setSelectedMovie] = useState([])
        //Информация о кол-во стр
    const [pagesCount, setCountPages] = useState(1)
        //состояние текущего жанра
    const [selectedGenre, setSelectedGenre] = useState('')
        //состояние текщего категории: популярные, новинки, высокий рейтинг
    const [selectedSort, setSelectedSort] = useState('')
        //состояние для preloader-загрузки
    const [loading, setLoading] = useState(true)

//добавление в избранное
    const addSelectedMovie = (movieId) => {
        let coincidence = selectedMovie.find(m => m.id == movieId)
        if (!coincidence) {
            setSelectedMovie([...selectedMovie, movies.find(movie => movie.id == movieId)])
        }
    }
//удаление из избранных
    const removeSelectedMovie = (movieId) => {
        setSelectedMovie(selectedMovie.filter(m => m.id !== movieId))
    }


//запрос фильмов по жанру
    useEffect(() => {
        if (selectedGenre !== "") {
            fetchMoviesByGenre(selectedGenre, currentPage).then(data => {
                setMovies(data.results)
                setCountPages(data.total_pages)
            })
        }
    }, [selectedGenre, currentPage])

    //запрос всех фильмов
    useEffect(() => {
        fetchAllMovies(currentPage).then(data => {
            setMovies(data.results)
            setCountPages(data.total_pages)
        }).finally(() => setLoading(false))
    }, [currentPage])

        //запрос по категории
    useEffect(() => {
        if (selectedSort == "2021") {
            fetchMoviesSortByYear(selectedSort, currentPage).then(data => {
                setMovies(data.results)
                setCountPages(data.total_pages)
            }).finally(() => setLoading(false))

        } else if (selectedSort) {
            fetchMoviesSortBy(selectedSort, currentPage).then(data => {

                setMovies(data.results)
                setCountPages(data.total_pages)
            }).finally(() => setLoading(false))
        }
    }, [selectedSort, currentPage])


    if (loading) {
        return (
            <div className="spinner-wrapper">
                <Spinner animation={"grow"}/>
            </div>
        )
    }

    return (
        <div className="app-wrapper">
            <Switch>
                <Route path="/selected" exact>
                    <SelectedMovies selectedMovie={selectedMovie} removeSelectedMovie={removeSelectedMovie}/>
                </Route>
                <Route path="/" exact>
                    <MainPage
                        movies={movies}
                        currentPage={currentPage}
                        pagesCount={pagesCount}
                        setCurrentPage={setCurrentPage}
                        portionSize={portionSize}
                        setSelectedGenre={setSelectedGenre}
                        setSelectedSort={setSelectedSort}
                    /></Route>
                <Route path="/:id" exact><MoviePage
                    movies={movies}
                    addSelectedMovie={addSelectedMovie}
                /></Route>
            </Switch>
        </div>

    );
}

export default App;
