export default {
    name: 'app',
    data() {
        return {
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        }
    }
}
