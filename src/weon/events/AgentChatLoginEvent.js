import store from '@/store'

export default class AgentChatLoginEvent {
    constructor(body) {
        store.dispatch('channels/setOnlineOnChannel', 'chat')
    }
}