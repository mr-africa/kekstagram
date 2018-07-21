<template>
    <v-card>
        <v-card-media
            :src="photo"
            contain
            height="500"
        />
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
        ...mapGetters(['photoBlolb']),
        photo () {
            return URL.createObjectURL(this.photoBlolb)
        },
    },
    methods: {
        ...mapMutations(['clearPhoto']),
    },
}
</script>
