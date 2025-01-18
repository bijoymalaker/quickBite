<template lang="">
  <div>
    <Topbar />
    <Header />
    <div class="container bg-light p-4 d-flex justify-content-between align-items-center">
      <div>
        <h2>Tandoori Pizza London</h2>
        <p>Minimum Order: £12 | Delivery in 20-30 Minutes</p>
        <button class="btn btn-warning">Open until 2:00 AM</button>
      </div>
      <div class="text-center">
        <h3>3.4 ⭐</h3>
        <p>1,200+ reviews</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="Promo Image" class="rounded-circle"/>
    </div>


    <div class="list-group">
        <button class="list-group-item list-group-item-action active">Pizzas</button>
        <button class="list-group-item list-group-item-action">Garlic Bread</button>
        <button class="list-group-item list-group-item-action">Calzone</button>
        <button class="list-group-item list-group-item-action">Kebabs</button>
        <button class="list-group-item list-group-item-action">Cold Drinks</button>
        <button class="list-group-item list-group-item-action">Desserts</button>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Topbar from "../components/Topbar.vue";
export default {
    name: "Restaurants",
    components: {
        Header,
        Topbar,
    },
};
</script>
<style scoped>
  
</style>
