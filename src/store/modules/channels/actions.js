import { connectOnChannel, disconnectOnChannel } from '@/services/channels-service'
import { SET_STATUS_CHANNEL } from '@/store/mutation-types'

const actions = {
    connectOnChannel({ commit }, { agentId, channel }) {
        return connectOnChannel(agentId, channel)
    },
    disconnectOnChannel({ commit }, { agentId, channel }) {
        return disconnectOnChannel(agentId, channel)
    },
    setOnlineOnChannel({ commit }, channel ){
        const status = 'connected'
        commit(SET_STATUS_CHANNEL, { channel, status })
    },
    setDisconnectedOnChannel({ commit }, channel ){
        const status = 'disconnected'
        commit(SET_STATUS_CHANNEL, { channel, status })
    }
}

export default actions