<template>
    <section class="container d-flex">
        <div class="wrapper py-5 m-auto">

            <div class="row g-3 g-lg-4 h-100">
                <div class="d-flex flex-column align-items-center justify-content-between col-12" :class="isPhotoMissing ?'' :'col-lg-8'">
                    <div class="p-lg-5 ps-lg-0">
                        <!-- question -->
                        <div class="top mb-5">
                            <div class="my-sub-title mb-2">{{ title }}</div>
                            <div class="question text-center">{{ question }}</div>
                        </div>
                        <slot name="answer"></slot>
                        <div class="mt-5 btn-wrapper d-flex justify-content-between w-100">
                            <!-- vedi tu quale usare per il carosello -->
                            <a href="#" class="button">Prev</a>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
                <div v-if="!isPhotoMissing" class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="bg-comp-accent d-flex h-100 p-2">
                        
                        <!-- photo -->
                        <img class="image-quest m-auto" :src="store.getImageSrc(photoSrc)" :alt="`${title}'s image'`">
                        
                    </div>
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
        question:{
            type : String,
            default : 'no Question'
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

            .question{
                font-size: 2.3rem;
                line-height: 1;
            }
            img.image-quest{
                max-width: 400px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
    }
</style>