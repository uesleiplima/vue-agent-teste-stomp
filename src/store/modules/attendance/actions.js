import { getInformations } from '@/services/attendance-service'

const actions = {
    getAttendanceInformations({ commit }, username) {
        return getInformations(username)
    }
}

export default actions