import axios from 'axios'

export const fetchSmurfs = () => (dispatch) => {
    dispatch{{type:FETCH_DATA}}
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_SUCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_FAIL, payload: err})
        })
}