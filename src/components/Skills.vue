<template>
<div class="Skills section">
    <button v-on:click="toggleIsActive()">
        Skills       
    </button>
    <transition name="alert-in">
        <div class="alert" v-if="isActive">
            <h3>Proficient in:</h3>
        </div>
    </transition>
    <transition name="alert-in">
        <div class="alert" v-if="isActive">
            <ul>
                <li>Ruby</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Web development (HTML, SASS, Javascript, Rails)</li>
                <li>Relational database technologies such as MySQL and Postgresql</li>
                <li>Team collaboration methods such as Agile and Scrum</li>
            </ul>
        </div>
    </transition>
    <transition name="alert-in">
        <div class="alert" v-if="isActive">
            <h3>Knowledgable in:</h3>
        </div>
    </transition>
    <transition name="alert-in">
        <div class="alert" v-if="isActive">
            <ul>
                <li>Python</li>
                <li>Other web technologies (Django, Angular, Vue)</li>
                <li>Developing in a Unix environment</li>
                <li>Excellent problem solving skills & high motivation to learn new technologies.</li>
            </ul>
        </div>
    </transition>
</div>
</template>
<script>
export default {
    name: 'Skills',
    
    data() {
        return {
             isActive: false
        }
    },
    methods: {
        toggleIsActive(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style scoped>

</style>
