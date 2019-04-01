<template>
    <div> <!-- div is only for example of using inheritAttrs property -->
        <button v-on="$listeners" v-bind="$attrs" class="btn" :class="buttonClass">
            <slot />
        </button>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            buttonClass: {
                type: String
            },
            // Пользовательская функция для валидации
            // propF: {
            //     validator: function (value) {
            //         // Значение должно соответствовать одной из этих строк
            //         return ['success', 'warning', 'danger'].indexOf(value) !== -1
            //     }
            // }
        }
    }
</script>
