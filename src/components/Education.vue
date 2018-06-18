<template>
<div class="Education section">
    <button v-on:click="toggleIsActive()">
        Education        
    </button>
    <transition name="alert-in">
        <p class="alert" v-if="isActive">
            <b>University of Illinois Chicago (2016-present)</b>
        </p>
    </transition>
    <transition name="alert-in">
        <p class="alert" v-if="isActive">
            Computer Science major, <i>anticipated: 2020</i>
        </p>
    </transition>
</div>
</template>
<script>
export default {
    name: 'Education',
    
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

