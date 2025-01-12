<template lang="">
    <div>
        <Topbar/>
        <Header/>
        <h1>Restaurants page name</h1>
        
    </div>
</template>
<script>
    
    import Header from '../components/Header.vue'
    import Topbar from '../components/Topbar.vue'
    export default {
        name: "Restaurants",
        components: {
            Header, Topbar
        }
    }
</script>
<style lang="">
    
</style>