<template>
    <section class="container d-flex">
        <div class="wrapper m-auto">

            <div class="row h-100">
                <div class="col-12" :class="isPhotoMissing ?'' :'col-lg-6'">
                    <!-- question -->
                    <div class="my-title">{{ title }}</div>
                    <slot name="simpleQuest"></slot>
                </div>
                <div v-if="!isPhotoMissing" class="bg-comp-accent col-12 col-lg-6">
                    <!-- photo -->
                    <img class="image-quest" :src="store.getImageSrc(photoSrc)" :alt="`${title}'s image'`">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import {store} from '../../store.js'
export default {
    name:'AppQuestion',
    props:{
        title:{
            type : String,
            default : ''
        },
        photoSrc:{
            type : String,
            default : ''
        },
    },
    data() {
        return {
            store,
        }
    },
    computed:{
        isPhotoMissing(){
            return this.photoSrc == ''
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        min-height: 100dvh;

        .wrapper{
            width: 100%;

            img.image-quest{
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: top;
            }
        }
    }
</style>