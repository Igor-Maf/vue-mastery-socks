<template>
    <div>
        <!-- div is only for example of using inheritAttrs property -->
        <!-- v-on="$listeners" has conflict with @input event, that's why we will use listeners as computed -->
        <!-- we need v-on="$listeners" for validation in form which use this component -->
        <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners" />
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: [String, Number]
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.updateValue
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>
