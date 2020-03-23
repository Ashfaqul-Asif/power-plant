<template>
  <div class="home">
    <ImageSlider />
    <!-- dsadsa -->
    <!-- sdsadksa -->
    <div class="ml-12">
      <div class="pt-5 mt-6 row">
        <div class="col-xs-11 col-md-6">
          <h4  class="pb-2">NEWS & HiGHLIGHTS</h4>
          <div class="overflow">
            <div v-for="news in News" :key="news.index">
              <p>{{news.title}}</p>
              <p style="font-size:1 rem ;color:#b9b6b6">{{news.date}}</p>
            </div>
          </div>
        </div>
        <div class="col-xs-11 col-md-6">
          <div class="mx-5 rightcontent pa-9">
            <h5>Powering Nations, Transforming Lives</h5>
            <p class="pr-12">
              Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of class
               Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of class
            </p>
            <p class="pr-12">
              Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of class
            </p>
          </div>
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      News: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "18 december 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "18 december 2020"
        },

        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        },
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          date: "10- november 2019"
        }
      ]
    };
  }
};
</script>
<style scoped>
.overflow {
  height: 250px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.rightcontent {
  background-color: #99becc;
  height: max-content;
}
</style>