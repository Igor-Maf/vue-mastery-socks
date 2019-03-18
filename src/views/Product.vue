<template>
    <div class="content">
        <section class="product">
            <section class="product__image">
                <img :src="require(`@/assets/${type}.png`)" :alt="title" />
            </section>

            <main class="product__info">
                <h1>{{ title }}</h1>

                <p class="h-text-secondary">
                    <span v-if="quantity > 10" class="h-color-green">In Stock</span>
                    <span v-else-if="quantity <= 10 && quantity > 0" class="h-color-orange">Almost sold out!</span>
                    <span v-else class="h-color-red">Out of Stock</span>
                </p>

                <div>
                    <small v-if="sale" class="badge badge--success">On Sale</small>
                </div>

                <ul>
                    <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
                </ul>

                <ul class="h-list-unstyled type-switcher">
                    <li v-for="variant in variants" :key="variant.id" class="type-switcher__item">
                        <button
                            type="button"
                            class="btn btn--clear type-switcher__btn"
                            @click="toggleProduct(variant.type)"
                        >
                            <img :src="require(`@/assets/${variant.type}.png`)" :alt="variant.type" />
                        </button>
                    </li>
                </ul>

                <div>
                    <button
                        type="button"
                        class="btn btn--action"
                        @click="addToCart"
                    >
                        Add to Cart
                    </button>

                    <p>Cart({{ cart }})</p>
                </div>
            </main>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables", "../scss/extends";

    .product {
        width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;

        &__image {
            @extend %center;

            height: 300px;
            width: 300px;
            padding: 1em 20px;
            border: 1px solid $light-grey;
            margin-right: 20px;
        }
    }

    .type-switcher {
        display: flex;
        width: fit-content;
        border: 1px solid $light-grey;

        &__item {
            height: 36px;
            width: 36px;

            &:not(:last-child) {
                border-right: 1px solid $light-grey;
            }
        }

        &__btn {
            padding: 4px;

            img {
                vertical-align: middle;
                line-height: 100%;
            }
        }
    }
</style>

<script>
    export default {
        name: 'product',
        data: () => ({
            title: 'Socks',
            type: 'vue',
            quantity: 11,
            sale: true,
            details: [
                '80% cotton',
                '20% polyester',
                'Gender-female'
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
                this.cart += 1;
            },
            toggleProduct(type) {
                this.type = type;
            }
        }
    }
</script>

