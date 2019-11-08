import AgentWhatsAppLoginEvent from './AgentWhatsAppLoginEvent'
import AgentChatLoginEvent from './AgentChatLoginEvent'
import AgentWhatsAppLogoffEvent from './AgentWhatsAppLogoffEvent'
import AgentChatLogoffEvent from './AgentChatLogoffEvent'

const map = {
    AgentWhatsAppLoginEvent,
    AgentChatLoginEvent,
    AgentWhatsAppLogoffEvent,
    AgentChatLogoffEvent
}

export default class CallEvent {
    constructor(event, body) {
        this._logEvent(event)
        if (map[event]) {
            return new map[event](body)
        }
        window.console.warn(`Evento não registrado - ${event}`, body)
    }

    _logEvent(event) {
        const blacklistEvents = ['PingBrokerEvent', 'PingChatvisorBrokerEvent']
        const eventInBlacklist = blacklistEvents.indexOf(event) != -1

        if (!eventInBlacklist) console.log('[event] ', event)
    }
}