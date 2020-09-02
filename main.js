var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "img/green.jpg",
        altText: "A pair of socks",
        inventory: 1,
        inStock: false,
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
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }   
})
