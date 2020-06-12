import React from "react";
import style from "./Pagination.module.css";


const Pagination = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount/pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let pagination = () => {
        const pagesJSX = pages.map(page => {
            return <li className={currentPage === page && style.selectedPage} onClick={(e) => {
                onPageChanged(page)
            }}>{page}</li>
        });
        let currentPageIndex = currentPage - 1;

        if (currentPageIndex === 0) {
            return (

                <ul className={style.pagesList}>
                    <li>{pagesJSX[0]}</li>
                    <li>{pagesJSX[currentPageIndex + 1]}</li>
                    <li>{pagesJSX[currentPageIndex + 2]}</li>
                    <li>{pagesJSX[currentPageIndex + 3]}</li>
                    <li>...</li>
                    <li>{pagesJSX[pagesCount - 1]}</li>
                </ul>
            )
        } else if (currentPageIndex === 1) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>{pagesJSX[currentPageIndex + 2]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === 2) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 1) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 3]}</li>
                <li>{pagesJSX[currentPageIndex - 2]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 2) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 2]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 3) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else return (
            <ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li> {pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>
        )

    }

    return (
        <div>
            {pagination()}
        </div>
    )
}


export default Pagination;