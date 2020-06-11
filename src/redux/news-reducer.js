import {NYTimesAPI} from "../api/api";

const SET_ARTICLES = 'social-arts/news/SET-ARTICLES';
const SET_TOTAL_ARTICLES_COUNT = 'social-arts/news/SET-TOTAL-ARTICLES-COUNT';




let initialState = {
    articles: [],
    totalArticlesCount: 0
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {...state, articles: [...action.articles]}

        case SET_TOTAL_ARTICLES_COUNT:
            return {...state, totalArticlesCount: action.count}

        default:
            return state;
    }
}

export const setArticles = (articles) => ({type: SET_ARTICLES, articles});
export const setTotalArticlesCount = (totalArticlesCount) => ({type: SET_TOTAL_ARTICLES_COUNT, count: totalArticlesCount});

export const requestArticles = (period) => {
    return async (dispatch) => {
        let data = await NYTimesAPI.getArticles(period);
        dispatch(setArticles(data.results));
        dispatch(setTotalArticlesCount(data.num_results));
    }
}



export default newsReducer;