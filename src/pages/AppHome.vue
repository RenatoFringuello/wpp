<template>
    <!-- comunicazione diretta = "dai ci siamo quasi; Ciao, come va?; ora rispondiamo a poche domande; ..." -->
    <AppQuestion title="Categoria Domanda / comunicazione diretta" question="Come desideri che sia il tuo giorno più importante?" photoSrc="bride-1.jpg">
        <template v-slot:answer>
            <!-- <input type="text" name="answ" placeholder="... scrivici pure una risposta breve"> -->
            <textarea rows="5" name="answ" placeholder="... scrivici pure una risposta breve"></textarea>
        </template>
    </AppQuestion>
</template>

<script>
import AppQuestion from '../components/partials/AppQuestion'
export default {
  components: { 
    AppQuestion 
},
    
}
</script>

<style lang="scss" scoped>
    
</style>