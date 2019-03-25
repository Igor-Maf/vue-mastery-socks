<template>
    <div class="tabs">
        <ul class="tabs__headings h-list-unstyled">
            <li
                class="tabs__heading"
                v-for="{key, title} in tabs"
                :key="key"
                :class="{'tabs__heading--active': activeTab === key}"
            >
                <button
                    type="button"
                    class="btn btn--clear tabs__btn"
                    @click="activeTab = key"
                >
                    {{ title }}
                </button>
            </li>
        </ul>

        <div class="tabs__content">
            <slot :name="activeTab" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables", "../scss/extends";

    .tabs {
        &__headings {
            margin-bottom: 0;
        }

        &__heading {
            display: inline-block;

            &:not(:last-child) {
                border-right: 1px solid darken($light-grey, 5);
            }

            &--active {
                border-top: 2px solid $blue;
            }
        }

        &__btn {
            @extend %lg-padding;

            background-color: $light-grey;
            color: $blue;

            &:hover,
            &:focus {
                background-color: lighten($light-grey, 5);
            }
        }

        &__content {
            @extend %lg-padding, %based-border;
        }
    }
</style>

<script>
    export default {
        props: {
            selectedTab: String,
            tabs: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                activeTab: this.selectedTab || this.tabs[0].key
            }
        }
    }
</script>
