<template>
    <v-card>
        <v-card-media>
            <video ref="video" class="video">Video stream not available.</video>
        </v-card-media>
        <v-card-actions>
            <v-btn
              absolute
              dark
              fab
              right
              color="pink"
              large
              @click="takePhoto"
            >
                <v-icon>camera</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
import { ImageCapture } from 'image-capture'

export default {
    name: 'camera',

    async mounted () {
        await this.$nextTick()
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
        this.imageCapture = new ImageCapture(mediaStream.getVideoTracks()[0])
    },
    methods: {
        ...mapMutations(['setPhoto']),
        async takePhoto () {
            const photo = await this.imageCapture.takePhoto()
            this.setPhoto(photo)
        },
    },
}
</script>
<style>
    .video {
        margin: 0 auto;
    }
</style>
