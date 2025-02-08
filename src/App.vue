<script>
import Topbar from './components/Topbar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

    
    export default {
        name: "App",
        components: {
            Topbar, Header, Footer
        }
    }

</script>

<template>
  <div class="h-100">
    
    <Topbar />
    <Header />

    <router-view />

    <Footer />

    

  </div>
</template>

<style>

</style>
