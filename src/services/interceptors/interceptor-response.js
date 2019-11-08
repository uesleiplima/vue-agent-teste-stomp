export default response => {
    const token = response.headers.authorization

    if (token) {
        localStorage.setItem('token', token)
    }
    return response
}