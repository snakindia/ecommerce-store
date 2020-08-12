import { GET } from '../../services/httpService';
import { getNewsListUrl } from '../../constants/urls';
import { FETCH_NEWS_LIST } from './news.action.constants';

const fetchNews = ({ type, page, size, filterBy }) => async (
  dispatch,
  getState
) => {
  const newsData = getState().news.newsList || [];
  dispatch({
    type: `${FETCH_NEWS_LIST}_START`,
    payload: { newsList: page === 1 ? [] : newsData },
  });
  try {
    const res = await GET({
      url: getNewsListUrl({ type, page, size, filterBy }),
      payload: {},
    });
    const { data, has_more, total_count } = res.data;
    const payload = { newsList: data, has_more, total_count };
    if (page !== 1) {
      const newsData = getState().news.newsList || [];
      payload.newsList = newsData.concat(payload.newsList);
    }
    dispatch({ type: FETCH_NEWS_LIST, payload });
  } catch (e) {
    throw e;
  } finally {
    dispatch({ type: `${FETCH_NEWS_LIST}_FINISHED` });
  }
};

export { fetchNews };
