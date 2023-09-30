<template>
    <AppQuestion title="Hello">
        <template v-slot:simpleQuest>
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