<template>
    
 <div class="siimple-grid">
        <!-- User Content -->
        
        <div class="siimple-grid-row">

                <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col--sm-12 siimple--bg-light">
                    <div class="siimple-card">
                        <!-- TODO: Vertical nav bar -->

                    </div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12 siimple--bg-light">
                    <div class="siimple-content">
                        <!-- TODO: Client list box-->
            
                    </div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12 siimple--bg-light">
                    <div class="siimple-card">
                         <!-- TODO: Chat box-->
                          <div class="messages">
                    <div v-for="message in messages" :key="message.id">
                         <span>{{ message.name }}: </span>
                        <span>{{message.message}}</span>
                     </div></div>
                    </div>
                </div>

            </div>

        <!-- Message Input bar -->
        <div class="siimple-grid-row">
            <div class="siimple-grid-col siimple-grid-col--12">
                <div class="ephy-message-card">
                     <form @submit.prevent="createMessage">

                    <label for="ephy-msg-box" class="siimple-small" id="ephy-typing-status-txt">someone is typing ...</label>
                    <textarea v-model="newMessage" name="message" class="siimple-textarea siimple-textarea--fluid ephy-textarea" 
                              id="ephy-msg-box" placeholder="Type your message here ..." autofocus></textarea>
                    <img src="./assets/images/timer.png" alt="a clock with 2 crowns" id="ephy-timer-btn">
                    <div id="ephy-time-duration-wrapper">
                        <span><button id="duration-in-sec" class="ephy-duration-btn">00 s</button></span>
                        <span><button id="duration-in-min" class="ephy-duration-btn">00 m</button></span>
                        <span><button id="duration-in-hour" class="ephy-duration-btn">00 h</button></span>
                        <span><button id="duration-in-day" class="ephy-duration-btn">00 d</button></span>
                        <span><button id="duration-in-week" class="ephy-duration-btn">00 w</button></span>
                    </div>
                    <img src="./assets/images/paper-plane.png"  alt="a flying paper-plane" id="ephy-send-btn">
                
                
                </div>
            </div>
        </div>
    </div>
   


</template>

<script>

    export default {
        name: 'Message',
        props: ['username'],
        data() {
            return{
                messages: [],
                newMessage:null
            }
        },
        methods: {
            createMessage () {
                if (this.newMessage) {
                    this.$router.push({name: 'StoreMsg', params: {username: this.username,message:this.newMessage}})
                } else {
                  
                }
            }
        }
    
    }
</script>


<style>
@import './assets/css/messages.css';
@import 'https://cdn.jsdelivr.net/npm/siimple@3.3.1/dist/siimple.min.css'

</style>