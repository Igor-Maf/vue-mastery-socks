import { EventBus } from '@/event-bus';
import Notifications from '@/components/Notifications'

export default {
    name: 'app',
    data() {
        return {
            cart: 0
        }
    },
    watch: {
        '$route'() {
            EventBus.$emit('delete-notifications');
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;

            EventBus.$emit('add-notification', {
                text: 'Product successfully added to Cart',
                type: 'success'
            })
        }
    },
    mounted() {
        this.$store.dispatch('setHours')
    },
    components: {
        Notifications
    }
}
