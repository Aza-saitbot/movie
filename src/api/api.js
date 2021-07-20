import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export const imgURL = "https://image.tmdb.org/t/p/w500"
const API_KEY = "4237669ebd35e8010beee2f55fd45546"


//загрузка всех фильмов
export const fetchAllMovies = async (page) => {
    try {
        const {data} = await instance.get(`discover/movie?api_key=${API_KEY}&language=ru-RU&include_adult=false&include_video=false&page=${page}`)
        return data
    } catch (e) {
        console.log(e)
    }
}
//запрос за именами жанров
export const fetchNameGenres = async () => {
    try {
        const {data} = await instance.get(`/genre/movie/list?api_key=${API_KEY}&language=ru-RU`)
        return data
    } catch (e) {
        console.log(e)
    }
}
//запрос с опред-ми жанрами фильмов
export const fetchMoviesByGenre = async (genres, currentPage) => {
    try {
        const {data} = await instance.get(`discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=${genres}&include_adult=false&include_video=false&page=${currentPage}`)
        return data
    } catch (e) {
        console.log(e)
    }
}
//запрос с опред-м рейтингом/по новизне/по популярности фильмов
export const fetchMoviesSortBy = async (selectedSort, currentPage) => {
    try {
        const {data} = await instance.get(`discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=${selectedSort}&include_adult=false&include_video=false&page=${currentPage}`)
        return data
    } catch (e) {
        console.log(e)
    }
}
//запрос для категории: Новинки
export const fetchMoviesSortByYear = async (selectedSort, currentPage) => {
    try {
        const {data} = await instance.get(`discover/movie?api_key=${API_KEY}&language=ru-RU&year=${selectedSort}&include_adult=false&include_video=false&page=${currentPage}`)
        return data
    } catch (e) {
        console.log(e)
    }
}




