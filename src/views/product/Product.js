import Tabs from '@/components/Tabs';
import ProductReview from './components/ProductReview';

export default {
    name: 'product',
    data() {
        return {
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
            reviews: [],
            tabs: [
                {
                    key: 'reviews',
                    title: 'Reviews'
                },
                {
                    key: 'make-review',
                    title: 'Make a Review'
                }
            ]
        }
    },
    methods: {
        addToCart() {
            if (this.quantity > 0) {
                this.$emit('add-to-cart');
                this.quantity -=1;
            }
        },
        toggleProduct(type) {
            this.type = type;
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        pageTitle() {
            return `${this.area} ${this.title}`
        }
    },
    components: {
        Tabs,
        ProductReview
    }
}
