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

export default {
    name: 'camera',

    async mounted () {
        await this.$nextTick()
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
        this.canvas = document.createElement('canvas')
        this.canvasContext = this.canvas.getContext('2d')
    },
    methods: {
        ...mapMutations(['setPhoto']),
        takePhoto () {
            const width = 320
            const height = this.$refs.video.videoHeight / (this.$refs.video.videoWidth / width)
            this.canvas.setAttribute('width', width)
            this.canvas.setAttribute('height', height)
            this.canvasContext.drawImage(this.$refs.video, 0, 0, width, height)
            this.setPhoto(this.canvas.toDataURL('image/png'))
        },
    },
}
</script>
<style>
    .video {
        margin: 0 auto;
        max-height: 90vh;
    }
</style>
