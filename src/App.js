export default {
    name: 'app',
    data: () => ({
        cart: 0
    }),
    methods: {
        addToCart() {
            this.cart += 1;
        }
    }
}
