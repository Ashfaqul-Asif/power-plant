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
/* .he{
  font-size: 2vw;
}
.ti{
  font-size: 1.75vw;
}
.st{
 font-size: 1.5vw;
}
.mst{
  font-size: 1.25vw;
}

.te{
  font-size: 1vw;
}
.mte{
  font-size: .80vw;
} */
/* 
<div class="container ">
        <div class="row ">
            <div class="col-md-4 col-sm-6 my-col">
                Row 1 Col 1
            </div>
            <div class="col-md-8 col-sm-6 my-col">
                Row 1 Col 2
            </div>
        </div>
        <div class="row justify-content-between align-items-stretch my-row">
            <div class="col-4 my-col order-md-12">
                Row 2 Col 1
            </div>
            <div class="col-4 offset-md-2 my-col align-self-start order-md-2">
                Row 2 Col 2
            </div>
        </div>
    </div> */


</style>
