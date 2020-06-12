import React from "react";
import style from "./News.module.css";
import Loading from "../common/Loading/Loading";

const News = (props) => {
    if (!props.totalArticlesCount) {
        return <Loading/>
    }

    if (!props.articles) {
        return <Loading/>
    }
    return (
        <div className={style.newsWrapper}>
            <h3>Most popular news ({props.totalArticlesCount})</h3>
            <div className={style.articles}>

                {props.articles.map(article =>
                    <div className={style.article}>
                        <div className={style.articleImg}>
                            <p>{article.media.map(image =>
                                <div>
                                    <img alt={image.caption} src={image['media-metadata'][1].url}></img>
                                </div>)}
                            </p>
                        </div>

                        <div>

                            <h4 className={style.articleTitle}><a href={article.url}
                                                                  target="_blank">{article.title}</a></h4>
                            <p>{article.abstract}</p>

                            <p className={style.source}>Source: <a className={style.sourceLink}
                                                                   target="_blank"
                                                                   href={article.url}>{article.source}</a></p>
                            <p className={style.publishedDate}>Published: {article.published_date}</p>
                        </div>
                    </div>)}
            </div>

        </div>);
};

export default News;
