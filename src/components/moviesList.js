import React from "react"
import {Row} from "react-bootstrap";
import {MovieItem} from "./movieItem";

export const MoviesList=({movies})=>{

    return (
        <Row className="selectedItem">
            {movies.map(movie =>
                <MovieItem key={movie.id} movie={movie}/>
            )}
        </Row>
    )
}