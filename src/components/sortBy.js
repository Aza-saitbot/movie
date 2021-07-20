import React, {useState} from "react"
import {Dropdown} from "react-bootstrap";

//Компонент категории фильмов
export const SortBy = ({setSelectedSort}) => {
    //зафиксированные категории
    const sort = [
        {id: "popularity.desc", name: "Популярные"},
        {id: "2021", name: "Новинки"},
        {id: "vote_count.desc", name: "Высокий рейтинг"},
    ]
    //состояние текущего выбронного категории
    const [activeSort, setActiveSort] = useState('')


    const selectSort = (id, name) => {
        /*//отправка наименование идентификатора в App для запроса выбронного категории*/
        setSelectedSort(id)
        /*//установка намиенование текущего категории для заголовки выборки*/
        setActiveSort(name)
    }

    return (
        <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
                {activeSort || "категория"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {sort.map((s) => (
                    <Dropdown.Item
                        onClick={() => selectSort(s.id, s.name)}
                        key={s.id}
                    >
                        {s.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

    )
}
