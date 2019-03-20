<template>
    <div class="content">
        <section class="product">
            <section class="product__image">
                <img :src="require(`@/assets/${type}.png`)" :alt="title" />
            </section>

            <main class="product__info">
                <h1>{{ pageTitle }}</h1>

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
                        :disabled="quantity <= 0"
                    >
                        Add to Cart
                    </button>

                    <div class="cart" :class="[cart > 0 ? 'cart--has-product' : 'cart--is-empty']">
                        <span>Cart</span>
                        <strong>{{ cart }}</strong>
                    </div>
                </div>
            </main>
        </section>
    </div>
</template>

<style src="./Product.scss" lang="scss" scoped></style>
<script src="./Product.js"></script>
