<template>
  <div class="home">
      <ImageSlider />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,ImageSlider
  }
}
</script>
