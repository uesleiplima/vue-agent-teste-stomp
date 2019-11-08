import store from '@/store'

export default err => {
    if (err.response.status == 401 && err.response.data.error == 'Provided token is expired.') {
        const route = err.response.config.url.replace(err.response.config.baseURL, '')
        // if (store.state.attendance.Attendance.logged && route != 'auth/logoff') {
        //     // store.dispatch('showSnackbar', {
        //     //     text: 'Sessão expirada',
        //     //     type: 'error'
        //     // })
        //     // store.dispatch('auth/logoff')
        // }
        // return router.push('/login')
    }

    return Promise.reject(err)
}