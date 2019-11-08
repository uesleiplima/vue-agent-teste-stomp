import Stomp from 'stompjs'
import CallEvent from '@/weon/events/CallEvent'

let instance = null

export default class Client {
    constructor (queue) {
        if (!instance && queue !== 'SUPERVISOR-') {
            instance = this

            const URL_BROKER = 'ws://172.16.0.216:61614/stomp'
            instance.client = new Stomp.client(URL_BROKER)
            instance.client.debug = message => {
                message + ''
            }

            let informations = {
                login: 'admin',
                passcode: 'admin'
            }

            instance.client.connect(informations, () => {
                instance.subs = instance.client.subscribe(queue, function (message) {
                    if (message.body) {
                        let body = JSON.parse(message.body)
                        new CallEvent(body.event, body)
                    }
                })
                window.console.log(`Escutando canal: ${queue}`)
            }, err => window.console.error(err))
        }
        return instance
    }

    unsubscribeFromQueueAndDisconnect () {
        if (instance && instance.subs) {
            instance.subs.unsubscribe()
            instance.client.disconnect()
            instance = null
        }
    }
}