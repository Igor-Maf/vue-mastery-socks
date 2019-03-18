<template>
    <div class="product">
        <section class="product__image">
            <img src="@/assets/logo.png" :alt="title" />
        </section>

        <section class="product__info">
            <h1>{{title}}</h1>

            <p v-show="quantity">
                <span v-if="quantity > 10">In Stock</span>
                <span v-else-if="quantity <= 10 && quantity > 0">Almost sold out!</span>
                <span v-else>Out of Stock</span>
            </p>

            <p v-if="sale">
                <span>On Sale!</span>
            </p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data: () => ({
            title: 'Socks',
            quantity: 9,
            sale: true
        })
    }
</script>

