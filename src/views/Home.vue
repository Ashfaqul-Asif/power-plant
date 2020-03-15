<template>
  <div class="home">
    <ImageSlider />
    <div class="pl-8 pt-5 mt-6 row">
      <div class="col-md-6">
        <h4>NEWS & HiGHLIGHTS</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatem a minima corporis molestias,</p>
      </div>
      <div class="col-md-6">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatem a minima corporis molestias, nihil unde rerum possimus eaque vitae vero enim corrupti delectus porro rem dolore perspiciatis excepturi harum!</p>
      </div>
    </div>
    <div class="col col-md-6"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ImageSlider
  }
};
</script>
