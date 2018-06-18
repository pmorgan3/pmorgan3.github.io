<template>
<div class="PersonalProjects section">
    <button v-on:click="toggleIsActive()">
        Personal Projects       
    </button>
    <transition name="alert-in">
        <button v-if="isActive" v-on:click="toggleLegalActive()">
            Legaldocket.org
        </button>
    </transition>
    <transition name="alert-in">
        <button v-if="isActive" v-on:click="toggleUICReddit()">
            Uicschoolpage.com
        </button>
    </transition>
    <transition name="alert-in">
        <div class="alert" v-if="legalDocketActive && isActive">
            
            <p>Currently leading a team consisting of 2 other people and myself in the ongoing development of a website to assist legal aid clinics in storing . This website allows the members of The Justice Center to store and access client information with ease. The website is made using Ruby on Rails and Postgresql for the backend and Bootstrap for the front end. It is hosted using DigitalOcean.</p>
            <br/>
            <p><a href="http://www.legaldocket.org" target="_blank"> legaldocket.org </a></p>
        </div>
    </transition>
    <transition name="alert-in">
        <div class="alert" v-if="uicRedditActive && isActive">
            <p>Created a forum website for UIC students to chat and discuss school related topics. I made this in response to learning that the Facebook page students used to discuss topics was going to be taken down. This website uses Ruby on Rails and Postgresql for the backend and a front end framework called Materialize CSS. It is hosted using heroku.</p>
            <br />
            <p><a href="http://www.uicschoolpage.com" target="_blank"> uicschoolpage.com </a></p>
        </div>
    </transition>
</div>
</template>
<script>
export default {
    name: 'PersonalProjects',
    
    data() {
        return {
             isActive: false,
             legalDocketActive: false,
             uicRedditActive: false
        }
    },
    methods: {
        toggleIsActive(){
            this.isActive = !this.isActive
        },
        toggleLegalActive(){
            this.legalDocketActive = !this.legalDocketActive
        },
        toggleUICReddit() {
            this.uicRedditActive = !this.uicRedditActive
        }
    }
}
</script>
<style scoped>

</style>
