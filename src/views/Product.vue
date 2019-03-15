<template>
    <div class="product">
        <section class="product__image">
            <img src="@/assets/logo.png" :alt="title" />
        </section>

        <section class="product__info">
            <h1>{{title}}</h1>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data: () => ({
            title: 'Socks'
        })
    }
</script>

