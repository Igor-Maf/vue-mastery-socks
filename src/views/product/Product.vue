<template>
    <div class="content">
        <BaseButton @click="addToCart" buttonClass="btn--action">Test base button</BaseButton>

        <section class="product">
            <section class="product__content">
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

                    <ul v-if="details.length">
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
                    </div>
                </main>
            </section>

            <Tabs :tabs="tabs" :selectedTab="selectedTab" @change-selected-tab="changeSelectedTab">
                <template slot="reviews">
                    <section class="reviews">
                        <h2>Reviews</h2>

                        <ul class="h-list-unstyled" v-if="reviewsQuantity">
                            <li v-for="(review, index) in reviews" :key="index" :id="index" class="reviews__item">
                                <div>
                                    <strong>{{ review.name }}</strong> - <span>{{ review.rating }}</span>
                                </div>

                                <p class="reviews__text">{{ review.review }}</p>
                            </li>
                        </ul>

                        <p class="h-text-secondary" v-else>
                            Go to
                            <button
                                type="button"
                                class="btn btn--link"
                                @click="changeSelectedTab('make-review')"
                            >
                                Make a Review
                            </button>
                            and add your first review!
                        </p>
                    </section>
                </template>

                <template slot="make-review">
                    <ProductReview @new-review="addReview" />
                </template>
            </Tabs>
        </section>
    </div>
</template>

<style src="./Product.scss" lang="scss" scoped></style>
<script src="./Product.js"></script>
