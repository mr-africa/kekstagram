<template>
    <v-app>
        <v-toolbar
            color="pink"
            dark
        >
            <v-toolbar-title>Kekstagram</v-toolbar-title>
            <v-spacer></v-spacer>
            <fork-me-on-github url="https://github.com/mr-africa/kekstagram" />
        </v-toolbar>
        <camera v-if="!photo" />
        <div v-if="photo">
            <photo />
            <gallery />
        </div>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import Camera from './Camera'
import Gallery from './Gallery'
import Photo from './Photo'
import ForkMeOnGithub from './ForkMeOnGithub'

export default {
    name: 'layout',
    components: { Camera, Gallery, Photo, ForkMeOnGithub },

    computed: {
        ...mapGetters(['photo']),
    },
}
</script>
