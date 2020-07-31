import api from "../api";

export const fetchColaboradores = (params) => async dispatch => {

    const response =  await api.get('/colaborador/list', {params: params});

    dispatch({type: 'FETCH_COLABORADORES_RESPONSE_DATA', payload: response.data});

};
