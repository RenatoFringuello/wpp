<template>
    <section class = "container d-flex">
        <div class = "wrapper py-5 m-auto">

            <div v-if = "Object.keys(question).length != 0" class = "row g-3 g-lg-4 h-100">
                <!-- <div v-show = "!isValidAnswer" class = "message-box-warn col-12"> -->
                <div  class = "message-box warn col-12">
                    il tipo di risposta non è valido, riprovare
                </div>
                <div  class = "message-box success col-12">
                    il tipo di risposta non è valido, riprovare
                </div>
                <div  class = "message-box error col-12">
                    il tipo di risposta non è valido, riprovare
                </div>

                <!--! question container -->
                <div class = "question-container col-12 d-flex flex-column align-items-center justify-content-between" 
                    :class = "isPhotoMissing ?'' :'col-lg-8'">

                    <div class = "p-lg-5 ps-lg-0">
                        <!--! question wrapper -->
                        <div class = "top mb-5">
                            <div v-html = "question.title" class = "my-sub-title mb-2"></div>
                            <div class  = "question text-center">{{ question.question }}</div>
                        </div>

                        <!--! answer wrapper -->
                        <!-- <div v-html="getAnswer(question.answ_type)" class="answer"></div> -->
                        <!--? for each answer type give me an answer input -->
                        <FormKit :v-for       = "(answ_type, i) in question.answ_types"
                                 :type        = "answ_type" 
                                 name         = "userAns" 
                                 id           = "userAnswer"
                                 :placeholder = "question.placeholders[i]"
                                 :key         = "question.id"
                        />

                        <!--! button wrapper -->
                        <div class = "mt-5 btn-wrapper d-flex justify-content-between w-100">
                            <!-- vedi tu quale usare per il carosello -->
                            <button :class    = "(questionId == 0) ?'disabled' :''" 
                                    :disabled = "(questionId == 0) ?true :false" 
                                    @click    = "changeQuestion(-1)">
                                    Prev
                            </button>
                            <button :class    = "(questionId == questions.length -1) ?'disabled' :''"  
                                    :disabled = "(questionId == questions.length -1) ?true :false" 
                                    @click    = "changeQuestion( 1)">
                                    Next
                            </button>
                        </div>

                    </div>

                </div>
                <!--! photo container -->
                <div v-if = "!isPhotoMissing" class = "col-12 col-lg-4 d-none d-lg-block">
                    <div class = "bg-comp-accent d-flex h-100 p-2">
                        
                        <!-- photo -->
                        <img class = "image-quest m-auto" 
                            :src   = "store.getImageSrc(photoSrc)" :alt = "`${title}'s image'`">
                        
                    </div>
                </div>

            </div>

            <div v-else>Sorry there are no Questions here, go back</div>

        </div>
    </section>
</template>

<script>
import {store} from '../../store.js'
export default {
    name:'AppQuestion',
    props:{
        questionId:{
            type : Number
        },
        photoSrc:{
            type : String,
            default : ''
        },
    },
    data() {
        return {
            store,
            // questions     : new Array(),
            // question      : new Object(),
            questions : new Array(),
            question  : new Object(),
            isValidAnswer : true
        }
    },
    methods: {
        getAnswer(answ_type, placeholder){
            let answDom = ''
            switch (answ_type) {
                case "text":
                    answDom = `<input id="userAnswer" type="text" name="answ" placeholder="${placeholder}"></input>`
                    break;
                case "textarea":
                    answDom = `<textarea id="userAnswer" rows="5" name="answ" placeholder="${placeholder}"></textarea>`
                    break;
                case "options":
                    answDom = `<input id="userAnswer" type="button" name="answ" placeholder="${placeholder}"></input>`
                    break;
                    
                default:
                    answDom = `<div> answer type errato </div>`
                    break;
            }

            return answDom
        },
        changeQuestion(direction){
            // get the #userAnswer DOM
            const userAnswer = document.getElementById('userAnswer')

            this.isValidAnswer = store.isValidAnswer(userAnswer.type, userAnswer.value)

            switch (this.questionId) {
                case 0:
                    // get name
                    store.userData.name = userAnswer
                    break;
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                // case 0:
                    
                //     break;
                // case 0:
                    
                //     break;
            
                default:
                    break;
            }

            // emit change quest
            this.$emit("changeQuestion", direction)
        }
    },
    computed:{
        isPhotoMissing(){
            return this.photoSrc == ''
        }
    }, 
    mounted() {
        // 0 = brides questions
        this.questions = this.store.questions[0].questions
        this.question  = this.questions[this.questionId]
    },
}
</script>

<style lang="scss" scoped>
    section{
        min-height: 100dvh;

        .wrapper{
            width: 100%;

            .question-container{
                > div{
                    width: 100%;
                    max-width: 700px;    
                }
                .question{
                    font-size: 2.3rem;
                    line-height: 1;
                }
                .answer{
                    min-height: 200px;
                }
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