
<template>
  <!-- eslint-disable vue/require-component-is -->
  <components v-bind="linkProps(to)">
    <slot />
  </components>
</template>

<script>
import { isExternal } from '@/utils/validate';
export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        linkProps(url) {
            console.log(url);
            if (isExternal(url)) {
                return {
                    is: 'a',
                    href: url,
                    target: '_blank',
                    rel: 'noopener'
                };
            }
            return {
                is: 'router-link',
                to: url
            };
        }
    }
};
</script>
