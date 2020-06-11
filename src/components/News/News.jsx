import React from "react";
import style from "./News.module.css";


const News = (props) => {
    return (
        <div>
            {props.articles.map(article => <div>{article}</div>)}
            {props.totalArticlesCount}
        </div>);
};

export default News;
