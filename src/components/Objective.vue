<template>
<div class="Objective section">
    <div>
    <button v-on:click="toggleIsActive()">
        Objective        
    </button>
    </div>
    <div>
    <transition name="alert-in">
        <p class="alert" v-if="isActive">
            I'm a driven and self-motivated Computer Science student seeking to use my knowledge of web development in a professional setting.
        </p>
    </transition>
    </div>
</div>
</template>
<script>
export default {
    name: 'Objective',
    
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

