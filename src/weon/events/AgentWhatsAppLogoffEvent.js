import store from '@/store'

export default class AgentWhatsAppLogoffEvent {
    constructor(body) {
        store.dispatch('channels/setDisconnectedOnChannel', 'whatsapp')
    }
}