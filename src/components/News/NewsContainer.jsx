import React, {Component} from "react";
import News from "./News";
import {connect} from "react-redux";
import {requestArticles} from "../../redux/news-reducer";
import {executeJS} from "../../api/api";


class NewsContainer extends Component {

    componentDidMount() {
        this.props.requestArticles();

    }

    render() {
        return (
            <News articles={this.props.articles} totalArticlesCount={this.props.totalArticlesCount}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        articles: state.newsPage.articles,
        totalArticlesCount: state.newsPage.totalArticlesCount
    }
};


export default connect(mapStateToProps,
     {requestArticles}
    )
(NewsContainer);

