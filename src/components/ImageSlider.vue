<template>
  <div style="height:75vh">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="image" :src="currentImg" />
      </div>
    </transition-group>
    <!--    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>-->
    <button class="prev pa-5" @click="prev">
      <i class="fal fa-2x fa-chevron-circle-left"></i>
    </button>
    <button class="next pa-5" @click="next">
      <i class="fal fa-2x fa-chevron-circle-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  /* transition: all 0.9s ease; */
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

/*  */

img {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 65vh;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 33vh;

  color: white;
  outline: none !important;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

/* .prev:hover, .next:hover {
  background-color:gray;
} */
</style>