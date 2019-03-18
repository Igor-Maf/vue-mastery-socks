<template>
    <div class="content">
        <section class="product">
            <section class="product__image">
                <img src="@/assets/logo.png" :alt="title" />
            </section>

            <section class="product__info">
                <h1>{{ title }}</h1>

                <p>
                    <span v-if="quantity > 10" class="h-color-green">In Stock</span>
                    <span v-else-if="quantity <= 10 && quantity > 0" class="h-color-orange">Almost sold out!</span>
                    <span v-else class="h-color-red">Out of Stock</span>
                </p>

                <p v-if="sale">On Sale!</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <ul class="h-list-unstyled">
                    <li v-for="variant in variants" :key="variant.id">
                        {{ variant.color }}
                    </li>
                </ul>
            </section>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables", "../scss/extends";

    .product {
        width: 25%;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;

        &__image {
            @extend %center;

            padding: 1em 20px;
            border: 1px solid $light-grey;
            margin-right: 20px;
        }
    }
</style>

<script>
    export default {
        name: 'product',
        data: () => ({
            title: 'Socks',
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
                    color: 'green'
                },
                {
                    id: 2,
                    color: 'blue'
                }
            ]
        })
    }
</script>

