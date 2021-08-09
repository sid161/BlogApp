import React from 'react';

function Pagination(props){
    let {articlesCount, articlesPerPage,activePage} = props
    let numberOfPages = Math.ceil(articlesCount/articlesPerPage)
    let pagesArray = [];
    for(let i=1;i <= numberOfPages; i++){
        pagesArray.push(i)
    }
    return(
        <div className = "flex center pagination wrap">
            <div className = "prev">
                <p>Prev</p>
            </div>
            <div className = "pagination-count">
               {pagesArray.map((page) => {
                  return <span className = {`${activePage === page ? 'active': ""}`}>{page}</span>
               })}
            </div>
        </div>
    )
}

export default Pagination