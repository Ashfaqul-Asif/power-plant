<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "@/layout/Header.vue";
import Footer  from "@/layout/Footer.vue"

export default {
  name: "App",

  components: {
    HelloWorld,Header,Footer
  },

  data: () => ({
    //
  })
};
</script>
<style >
body {
  font-family: "Playfair Display", serif;
}


</style>
