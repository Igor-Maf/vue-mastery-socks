<template>
    <div> <!-- div is only for example of using inheritAttrs property -->
        <input :value="value" @input="updateValue" v-bind="$attrs" />
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: [String, Number]
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>
