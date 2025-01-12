<template>
    <div>
        <section>
        <div class="container">
            <div class="row service-header">
                <div class="col-4">
                    <h2>Know more about us!</h2>
                </div>
                <!-- Navigation tabs -->
                <div class="col-8">
                    <ul class="nav nav-pills justify-content-end">
                        <li class="nav-item"><a class="nav-link" href="#">Frequent Questions</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Who are we?</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Partner Program</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Help & Support</a></li>
                    </ul>
                </div>
            </div>

            <!-- Service cards -->
            <div class="row text-center mt-4">
                <div class="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">An active item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>

                </div>
                <!-- How does Order.UK work? -->
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4 service-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="service-icon">🔍</div>
                                    <h5 class="card-title">How does Order.UK work?</h5>
                                    <p class="card-text">Description of how the service works.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Place an Order! -->
                        <div class="col-md-4 service-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="service-icon">🛒</div>
                                    <h5 class="card-title">Place an Order!</h5>
                                    <p class="card-text">Description of how to place an order.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Track Progress -->
                        <div class="col-md-4 service-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="service-icon">📈</div>
                                    <h5 class="card-title">Track Progress</h5>
                                    <p class="card-text">Description of how to track progress.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <p class="text-center">Order.UK simplifies the food ordering process. Browse through our diverse
                        menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its
                        way to your doorstep in no time!</p>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    name: "AboutUs",
    data() {
        return {
            
        };
    },
    components: {
        
    }
    
}
</script>
<style scoped>
    
</style>