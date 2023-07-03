import { SET_LOADING, SET_MOVIES, HANDLE_PAGE } from "./action";

function reducer(state, action) {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === SET_MOVIES) {
    return {
      ...state,
      isLoading: false,
      movies: action.payload.movies,
      totalPages: action.payload.totalPages,
    };
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload === "inc") {
      let nextPage = state.page + 1;
      if (nextPage > state.totalPages) {
        nextPage = 1;
      }
      return { ...state, page: nextPage };
    }
    if (action.payload === "dec") {
      let prevPage = state.page - 1;
      if (prevPage < 1) {
        prevPage = state.totalPages;
      }

      return { ...state, page: prevPage };
    }
  }
}

export default reducer;
