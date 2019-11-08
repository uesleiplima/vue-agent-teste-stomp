export default config => {
    const { token } = localStorage
    if (token) {
        config.headers.Authorization = token
    }
    return config
}