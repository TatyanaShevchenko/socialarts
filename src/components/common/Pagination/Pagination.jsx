import React, {useState} from "react";
import style from "./Pagination.module.css";
import Button from '@material-ui/core/Button';


const Pagination = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionEdge = (portionNumber - 1) * portionSize + 1;
    let rightPortionEdge = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNumber >1 &&
            <Button  variant="contained" color="secondary"
                className={style.paginationBtn +' '+style.prevBtn}
                onClick={()=>{setPortionNumber(portionNumber -1) }}></Button>
            }
            {pages
                .filter(page => page >=leftPortionEdge && page <=rightPortionEdge )
                .map(page => {
                return <span
                     className={currentPage===page && style.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(page);}}>{page}</span>
            })}
            {portionsCount > portionNumber &&
            <Button variant="contained" color="secondary"
                className={style.paginationBtn+' '+style.nextBtn}
                onClick={()=>{setPortionNumber(portionNumber +1)}}></Button>
            }
        </div>
    )
}


export default Pagination;