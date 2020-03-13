<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
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


</style>
