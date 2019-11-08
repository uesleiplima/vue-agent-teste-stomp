import store from '@/store'

export default class AgentWhatsAppLoginEvent {
    constructor(body) {
        store.dispatch('channels/setOnlineOnChannel', 'whatsapp')
    }
}