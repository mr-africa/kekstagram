<template>
    <h2>cool photo man</h2>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'photo',
    computed: {
        ...mapGetters(['photo']),
    },
}
</script>
