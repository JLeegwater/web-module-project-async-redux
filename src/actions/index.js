import axios from "axios";

export const getPokemon = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/4/")
      .then((res) => {
        console.log(res);
        dispatch(fetchSuccess(res.data.results));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
  return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (pokemon) => {
  return { type: FETCH_SUCCESS, payload: pokemon };
};

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
