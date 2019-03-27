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

            for (let i = 0; i < 10; i++) {
                EventBus.$emit('add-notification', {
                    title: `Title ${i}`,
                    text: `Test text ${i}`,
                    type: i % 2 ? 'success' : 'error'
                })
            }
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
