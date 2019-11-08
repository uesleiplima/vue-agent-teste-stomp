import store from '@/store'

export default class AgentChatLogoffEvent {
    constructor(body) {
        store.dispatch('channels/setDisconnectedOnChannel', 'chat')
    }
}