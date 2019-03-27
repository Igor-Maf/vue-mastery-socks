import { EventBus } from '@/event-bus';
import Notifications from '@/components/Notifications'

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

            EventBus.$emit('add-notification', {
                text: 'Product successfully added to Cart',
                type: 'success'
            })
        }
    },
    watch: {
        '$route'() {
            EventBus.$emit('delete-notifications');
        }
    },
    components: {
        Notifications
    }
}
