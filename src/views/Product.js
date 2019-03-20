export default {
    name: 'product',
    data: () => ({
        title: 'Frameworks',
        area: 'Frontend',
        type: 'vue',
        quantity: 11,
        sale: true,
        details: [
            'Virtual DOM',
            'Components',
            'One-way data-binding'
        ],
        variants: [
            {
                id: 1,
                type: 'vue'
            },
            {
                id: 2,
                type: 'angular'
            }
        ],
        cart: 0
    }),
    methods: {
        addToCart() {
            if (this.quantity > 0) {
                this.cart += 1;
                this.quantity -=1;
            }
        },
        toggleProduct(type) {
            this.type = type;
        }
    },
    computed: {
        pageTitle() {
            return `${this.area} ${this.title}`
        }
    }
}
