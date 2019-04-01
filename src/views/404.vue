<template>
    <div class="content">
        <div class="h-text-center">
            <h1>404</h1>
            <p>The {{ resource }} you're looking for isn't here.</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            resource: {
                type: String,
                required: true,
                default: 'page'
            }
        }
    }
</script>
