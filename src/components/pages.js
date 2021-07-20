import React, {useState} from "react"
import {Button, Pagination} from "react-bootstrap";

//пагинация
export const Pages = ({currentPage, pagesCount, setCurrentPage, portionSize = 20}) => {
    const [portionNumber, setPortionNumber] = useState(1)

    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    /*//порция страниц*/
    const portionCount = Math.ceil(pagesCount / portionSize)

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <Pagination className="mt-3">
            {portionNumber > 1 &&
            <Button
                onClick={() => setPortionNumber(portionNumber - 1)}
            >Prev</Button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page =>
                    <Pagination.Item
                        className="m-1"
                        key={page}
                        active={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </Pagination.Item>
                )}
            {portionCount > portionNumber &&
            <Button onClick={() => setPortionNumber(portionNumber + 1)}>
                Next
            </Button>
            }
        </Pagination>
    )
}