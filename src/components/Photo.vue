<template>
    <v-card>
        <v-card-media>
            <figure :class="filter">
                <img :src="photo">
            </figure>
        </v-card-media>
        <v-card-actions>
            <v-btn
                flat
                @click="clearPhoto">
                <v-icon>clear</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>
                <v-icon>share</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'photo',
    computed: {
        ...mapGetters(['photo', 'filter']),
    },
    methods: {
        ...mapMutations(['clearPhoto']),
    },
}
</script>
