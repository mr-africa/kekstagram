<template>
    <div class="gallery">
        <gallery-item
            v-for="filter in filters"
            :key="filter"
            :filter="filter"
        />
    </div>
</template>

<script>
import GalleryItem from './GalleryItem'

export default {
    name: 'gallery',
    components: { GalleryItem },
    data () {
        return {
            filters: [
                '',
                '_1977',
                'aden',
                'brannan',
                'brooklyn',
                'clarendon',
                'earlybird',
                'gingham',
                'hudson',
                'inkwell',
                'kelvin',
                'lark',
                'lofi',
                'maven',
                'mayfair',
                'moon',
                'nashville',
                'perpetua',
                'reyes',
                'rise',
                'slumber',
                'stinson',
                'toaster',
                'valencia',
                'walden',
                'willow',
                'xpro2',
            ],
        }
    },
}
</script>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
