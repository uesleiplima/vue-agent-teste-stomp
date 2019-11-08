<template>
    <div>
        <h1>Login</h1>
        <h2>{{ message }}</h2>
        <input type="text" v-model="username" placeholder="username">
        <br>
        <br>
        <input type="password" v-model="password" placeholder="password">
        <button @click="login">Logar</button>

        <br>
        <br>
        <div v-for="channel in channels" :key="channel" class="channel-item" :class="styles[channel]" @click="actionAgent(channel)">{{ channel }}</div>
        <br>
        <br>
        <div class="clearfix"></div>
        <h4 v-for="campo in camposAgente" :key="campo">{{ campo }}:  {{ agent[campo] }}</h4>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Client from '@/weon/Client'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            message: '',
            agent: null
        }
    },
    computed: {
        styles() {
            return this.channelStatus
        },
        ...mapState({
            channelStatus: state => state.channels.channelStatus
        }),
        camposAgente() {
            if (this.agent) return Object.keys(this.agent)
            return []
        },
        channels() {
            if (this.agent) return Object.keys(this.agent.channels)
            return []
        }
    },
    methods: {
        login() {
            const user = {
                identifier: this.username,
                password: this.password,
                type: 'agent_member'
            }
            this.$store.dispatch('auth/auth', user).then((res) => {
                this.$store.dispatch('attendance/getAttendanceInformations', this.username).then((agent) => {
                    new Client('AGENT-' + agent.agentId)
                    this.agent = agent
                })
                this.message = 'Logamooooos!'
            }).catch((err) => {
                if (err.response) {
                    const cause = err.response.data.cause
                    this.message = 'Deu ruim, com o erro: ' + cause
                }
            })
        },
        actionAgent(channel) {
            if (channel == 'voice') return

            if(this.channelStatus[channel] == 'connected') return this.disconnectOnChannel(channel)

            this.connectInChannel(channel)
        },
        disconnectOnChannel(channel) {
            const agentId = this.agent.agentId
            this.$store.dispatch('channels/disconnectOnChannel', { agentId, channel }).then(() => {
                console.log('Mandou tentativa de logoff no canal')
            })
        },
        connectInChannel(channel) {
            const agentId = this.agent.agentId
            this.$store.dispatch('channels/connectOnChannel', { agentId, channel }).then(() => {
                console.log('Mandou tentativa de login no canal')
            })
            
        }
    }
}
</script>

<style scoped>
.channel-item {
    float: left;
    margin-left: 4em;
    padding: 5em;
}

.disconnected {
    background-color: #ccc;
}

.paused {
    background-color: orange;
}

.connected {
    background-color: green;
}

.clearfix {
    clear: both;
}
</style>