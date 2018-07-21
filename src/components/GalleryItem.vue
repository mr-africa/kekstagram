<template>
    <div @click="setFilter(filter)">
        <v-card
            width="100px"
            hover
            class="gallery__item"

        >
            <v-card-media>
                <figure :class="filter">
                    <img :src="photo" width="100" height="100" />
                </figure>
            </v-card-media>
            <v-card-title>
                {{ name }}
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'gallery-item',
    props: {
        filter: String,
    },
    computed: {
        ...mapGetters(['photo']),
        name () {
            return this.filter === '' ? 'Normal' : this.filter
        },
    },
    methods: {
        ...mapMutations(['setFilter']),
    },
}
</script>
<style>
    .gallery__item {
        margin: 1em;
    }
</style>
