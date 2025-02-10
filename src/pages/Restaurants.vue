<template>
  <div>
    <div class="container bg-light p-4 d-flex justify-content-between align-items-center position-relative res-bg">
      <div>
        <h2>Tandoori Pizza London</h2>
        <p>Minimum Order: £12 | Delivery in 20-30 Minutes</p>
        <button class="btn btn-warning">Open until 2:00 AM</button>
      </div>
      <div class="text-center bg-white p-4 rating-bridge">
        <h3>{{ rating }}</h3>
        <div class="star-rating">
          <span v-for="(star, index) in 5" :key="star" class="star">
            <font-awesome-icon icon="fa-solid fa-star" v-if="rating >= index + 1" class=" text-warning" />
            <font-awesome-icon icon="fa-solid fa-star-half-stroke" v-else-if="rating > index && rating < index +1" class=" text-warning" />
            <font-awesome-icon icon="fa-solid fa-star" v-else class=" text-muted" />
          </span>
        </div>
        <p>1,200+ reviews</p>
      </div>
      <img src="../assets/imgs/restuarent/Rectangle44.png" alt="Promo Image" class="" />
    </div>

    <div class="container">
      <div class="row my-4 align-items-baseline">
        <div class="col-12 col-md-2 mb-3 mb-md-0">
          <!-- Tab navs -->
          <div class="d-md-none">
            <select class="form-select" v-model="selectedFood" @change="selectFood(selectedFood)">
              <option v-for="(food, index) in foodCategory" :key="index" :value="food">{{ food }}</option>
            </select>
          </div>
          <div class="nav flex-column nav-pills text-center nav-item list-group d-none d-md-flex" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <a v-for="(food, index) in foodCategory" :key="index" class="nav-link list-group-item"
              :class="{ active: selectedFood === food }" id="v-pills-link1-tab" data-bs-toggle="pill"
              href="#v-pills-link1" role="tab" aria-controls="v-pills-link1" aria-selected="selectedFood === food"
              @click="selectFood(food)">{{ food }}</a>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <h1>All</h1>
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-link1" role="tabpanel"
              aria-labelledby="v-pills-link1-tab">
              <div class="row">
                <div class="card p-3 shadow-sm my-3" v-for="(food, index) in foodName" :key="index">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <h4 class="fw-bold">{{ food.name }}</h4>
                      <div class="text-danger fs-5">🌶🌶🌶🌶🌶</div>
                      <p class="text-muted">
                        {{ food.details }}
                      </p>
                    </div>
                    <img :src="food.img" :alt="food.name" class="rounded-circle object-fit-cover" width="80"
                      height="80" />
                  </div>

                  <div class="mt-3 d-flex flex-wrap gap-2">
                    <button class="btn btn-dark">Small &#163{{ food.Small }}</button>
                    <button class="btn btn-success">Medium &#163{{ food.Medium }}</button>
                    <button class="btn btn-primary">Large &#163{{ food.Large }}</button>
                    <button class="btn btn-warning">XL Large with Sauces &#163{{ food.XLarge }}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-link2" role="tabpanel" aria-labelledby="v-pills-link2-tab">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Est, excepturi illo neque eaque error corrupti laborum alias
              veniam natus molestias in cupiditate magnam ratione voluptatem!
            </div>
            <div class="tab-pane fade" id="v-pills-link3" role="tabpanel" aria-labelledby="v-pills-link3-tab">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, illum.
            </div>
            <div class="tab-pane fade" id="v-pills-link4" role="tabpanel" aria-labelledby="v-pills-link4-tab">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!
            </div>
          </div>
        </div>

        <div class="col-0 col-md-4">
          <ShoppingBacket />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ShoppingBacket from "../components/ShoppingBacket.vue";


//images import

import Rectangle53 from "../assets/imgs/restuarent/Rectangle53.png";
import Ellipse3 from "../assets/imgs/restuarent/Ellipse3.png";
import Ellipse6 from "../assets/imgs/restuarent/Ellipse6.png";
import Ellipse61 from "../assets/imgs/restuarent/Ellipse61.png";
import Ellipse62 from "../assets/imgs/restuarent/Ellipse62.png";
import Ellipse64 from "../assets/imgs/restuarent/Ellipse64.png";
import Ellipse65 from "../assets/imgs/restuarent/Ellipse65.png";
import Rectangle13 from "../assets/imgs/restuarent/Rectangle13.png";
import Rectangle15 from "../assets/imgs/restuarent/Rectangle15.png";





export default {
  name: "Restaurants",
  props: {
    rating: {
      type: Number,
      default: 2.5 // Pass a rating like 3.5, 4.0, etc.
    }
  },
  setup() {
    // setup logic here
  },
  data() {
    return {
      foodCategory: ["All", "Pizzas", "Garlic Bread", "Calzone", "Kebabas", "Salads", "Cold drinks", "Happy Meal", "Desserts", "Hot drinks", "Sauces", "Orbit®"],
        foodName: [
          {
            name: "Farm House Xtreme Pizza",
            img: Rectangle53,
            details: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French fries, 2 cold drinks",
            Small: 21.99,
            Medium: 25.99,
            Large: 27.99,
            XLarge: 32.99,
          },
          {
            name: "Deluxe Pizza",
            img: Ellipse3,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Tandoori Pizza",
            img: Ellipse6,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Pepperoni Pizza",
            img: Ellipse61,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Margherita Pizza",
            img: Ellipse62,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Hawaiian Pizza",
            img: Ellipse64,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Vegetarian Pizza",
            img: Ellipse65,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Meat Feast Pizza",
            img: Rectangle13,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
          {
            name: "Chicken Supreme Pizza",
            img: Rectangle15,
            details: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
            Small: 21.90,
            Medium: 25.90,
            Large: 27.90,
            XLarge: 32.90,
          },
        ],
      };
    },
    components: {
      ShoppingBacket
    },
  };
</script>
<style scoped>
  .res-bg {
    background-image: linear-gradient(rgba(226, 226, 226, 0.5), rgba(226, 226, 226, 0.5)),
      url("../assets/imgs/restuarent/Rectangle44.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .rating-bridge {
    border-radius: 10px;
    position: absolute;
    top: 60%;
    right: 50%;
  }
</style>
