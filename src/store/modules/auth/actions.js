import { authentication } from '@/services/auth-service'

const actions = {
    auth({ commit }, user) {
        return authentication(user)
    }
}

export default actions