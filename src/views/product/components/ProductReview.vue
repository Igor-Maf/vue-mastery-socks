<template>
    <form class="form form--default" @submit.prevent="submit">
        <div class="form__row">
            <label for="name">Name:</label>
            <input id="name" autocomplete="off" v-model="name">
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
    export default {
        name: 'product-review',
        data: () => ({
            name: null,
            review: null,
            rating: 5
        }),
        methods: {
            submit() {
                const {name, review, rating} = this;

                if (name && review && rating) {
                    this.$emit('new-review', {name, review, rating});
                }
            }
        }
    }
</script>
