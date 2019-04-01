<template>
    <form class="form form--default" @submit.prevent="submit">
        <div class="form__row" :class="{ 'form__row--error': $v.name.$error }">
            <label for="name">Name:</label>

            <BaseInput
                id="name"
                autocomplete="off"
                placeholder="Enter your name"
                v-model="name"
                @blur="$v.name.$touch()"
            />

            <template v-if="$v.name.$error">
                <p v-if="!$v.name.required" class="h-text-secondary h-color-red">Name is required</p>
            </template>
        </div>

        <div class="form__row">
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </div>

        <div class="form__row">
            <label for="rating">Rating:</label>

            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </div>

        <div>
            <button class="btn btn--action" :disabled="!name || !review || !rating">
                Add review
            </button>
        </div>
    </form>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { EventBus } from '@/event-bus';

    export default {
        data() {
            return {
                name: null,
                review: null,
                rating: 5
            }
        },
        validations: {
            name: {
                required
            }
        },
        methods: {
            submit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    const { name, review, rating } = this;

                    this.$emit('new-review', { name, review, rating });

                    EventBus.$emit('add-notification', {
                        text: 'Review successfully added',
                        type: 'success'
                    })
                }
            }
        }
    }
</script>
