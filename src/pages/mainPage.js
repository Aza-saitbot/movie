import React from "react"
import {useHistory} from "react-router-dom"
import {Button, Col, Container, Row} from "react-bootstrap";
import {GenreBy} from "../components/genreBy";
import {SortBy} from "../components/sortBy";
import {Pages} from "../components/pages";
import {MoviesList} from "../components/moviesList";

//Главная страница
export const MainPage = ({movies, currentPage, pagesCount, setCurrentPage, portionSize, setSelectedGenre, setSelectedSort}) => {

    const history = useHistory()

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    {/*Кнопка что бы войти на стр избранное*/}
                    <Button style={{fontSize: "16px"}} onClick={() => history.push("/selected")}>избранное</Button>
                   {/* Компонент для выбора жанра*/}
                    <GenreBy setSelectedGenre={setSelectedGenre}/>
                    {/*Компонент для выбора категории: Новинки, Популярные, Высокий рейтинг*/}
                    <SortBy setSelectedSort={setSelectedSort}/>
                </Col>
                <Col md={9}>
                    {/*Пагинатор*/}
                    <Pages currentPage={currentPage}
                           pagesCount={pagesCount}
                           setCurrentPage={setCurrentPage}
                           portionSize={portionSize}
                    />
                    {/*Выводит на главную страницу запрошенных фильмов*/}
                    <MoviesList movies={movies}/>
                </Col>
            </Row>
        </Container>
    );
}