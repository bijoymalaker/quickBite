<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">My Basket</h5>
        </div>
        <div class="card-body">
          <div v-for="(item, index) in cart" :key="index" class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <strong>{{ item.quantity }}x</strong> {{ item.name }} <br />
              <small>{{ item.description }}</small>
            </div>
            <div class="fw-bold">£{{ (item.price * item.quantity).toFixed(2) }}</div>
          </div>
  
          <hr />
          <div class="d-flex justify-content-between">
            <span>Sub Total:</span>
            <span>£{{ subTotal.toFixed(2) }}</span>
          </div>
          <div class="d-flex justify-content-between text-danger">
            <span>Discounts:</span>
            <span>-£{{ discount.toFixed(2) }}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Delivery Fee:</span>
            <span>£{{ deliveryFee.toFixed(2) }}</span>
          </div>
  
          <div class="bg-warning p-2 text-center fw-bold mt-3">
            Total to pay: £{{ total.toFixed(2) }}
          </div>
  
          <div class="mt-3">
            <button class="btn btn-outline-secondary w-100 mb-2">Choose your free item</button>
            <input type="text" class="form-control mb-2" placeholder="Apply Coupon Code" />
          </div>
  
          <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-success w-50 me-2">Delivery</button>
            <button class="btn btn-outline-secondary w-50">Collection</button>
          </div>
  
          <div v-if="total < minimumDelivery" class="alert alert-danger text-center mt-3">
            Minimum delivery is £20. You must spend £{{ (minimumDelivery - total).toFixed(2) }} more for checkout!
          </div>
  
          <button :disabled="total < minimumDelivery" class="btn btn-primary w-100 mt-3">Checkout!</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShoppingBasket",
    data() {
      return {
        cart: [
          { name: "12\" Vegetarian Pizza", description: "Mushrooms + Green Peppers", price: 27.90, quantity: 1 },
          { name: "17\" Tandoori Pizza", description: "Mushrooms + Green Peppers", price: 17.90, quantity: 1 },
          { name: "Coke Coca Cola", description: "", price: 4.90, quantity: 2 },
          { name: "12\" Vegetarian Pizza", description: "Mushrooms + Green Peppers", price: 27.90, quantity: 1 }
        ],
        discount: 3.00,
        deliveryFee: 2.50,
        minimumDelivery: 20
      };
    },
    computed: {
      subTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      total() {
        return this.subTotal - this.discount + this.deliveryFee;
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: auto;
  }
  </style>
  