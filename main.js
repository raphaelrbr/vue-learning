var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "img/green.jpg",
        altText: "A pair of socks",
        inventory: 4,
        inStock: true,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "img/green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "img/blue.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart += 1
            this.inventory -= 1;
            if(this.inventory == 0){
                this.inStock = false
            }
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
        resetCart(){
            this.inventory += this.cart
            if(this.inventory > 0){
                this.inStock = true
            }

            this.cart = 0
        }
    }   
})
