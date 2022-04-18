import * as api from '../api'

export const signIn = (credentials) => async (dispatch) => {
    try {
        const {data} = await api.signIn(credentials)
        console.log(data)
        localStorage.setItem('access_token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data.user))
        dispatch({type: 'AUTH', payload: data})
    } catch (error) {
        console.log(error)
    }
}

// export const signUp = (credentials) => async (dispatch) => {
//     try {
//         const {data} = await api.signUp(credentials)
//         console.log(data)
//         localStorage.setItem('access_token', JSON.stringify(data.access_token))
//         localStorage.setItem('user', JSON.stringify(data.user))
//         dispatch({type: 'AUTH', payload: data})
//     } catch (error) {
//         console.log(error)
//     }
// }
export const signUp = (credentials) => async (dispatch) => {
    try {
        const {data} = await api.signUp(credentials)
        console.log(data)
        localStorage.setItem('access_token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data.user))
        dispatch({type: 'AUTH', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getMarketData = () => async (dispatch) => {
    try {
        const data = await api.getMarketData()
        console.log(data)
       
    } catch (error) {
        console.log(error)
    }
}