import { SET_STATUS_CHANNEL } from '@/store/mutation-types'

const mutations = {
    [SET_STATUS_CHANNEL](state, { channel, status }) {
        state.channelStatus[channel] = status
    }
}

export default mutations