<template lang="">
    
        <!-- Top Bar -->
    <div class="container-fluid bg-light pb-2">
        <div class="container d-flex align-items-center justify-content-between">

            <!-- Promo Section -->
            <div class="d-flex align-items-center">
                <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
                <font-awesome-icon icon="fa-regular fa-star" class="red me-2"/>
                <span>Get 5% Off your first order,</span>
                <a href="#" class="change-location ms-2">Promo: ORDERS</a>
            </div>

            <!-- Location Section -->
            <div class="d-flex align-items-center">
                <span class="location-text"><i class="fa-solid fa-location-dot me-3"></i>Regent Street, A4, A4201,
                    London</span>
                <a href="#" class="change-location ms-2">Change Location</a>
            </div>

            <!-- Cart Section -->
            <div class="cart-info">
                <span class="cart-icon px-3"><i class="fa-solid fa-cart-shopping"></i></span>
                <!-- Emoji or icon for the cart -->
                <span class="px-3 border-end border-2">23 Items</span>
                <span class="px-3 border-end border-2">GBP 79.89</span>
                <span class="dropdown-icon ms-3"><i class="fa-solid fa-arrow-down text-white"></i></span>
            </div>

        </div>
    </div>

</template>
<script>
    

    export default {
        
    }
</script>
<style scoped>
   .red{
         color: red;
   }
</style>