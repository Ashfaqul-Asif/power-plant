<template>
  <div>
    <div class="top d-flex">
      <div class="spacer"></div>
      <div class="pr-6 pl-3">
        <p style="font-size:small" class="pt-2">+8801700 000000</p>
        <p style="font-size:small">mail@powerplant.com</p>
      </div>
      <hr class="hr" />
      <div class="pl-4 icons mr-12">
        <i class="fa fa-lg fa-facebook px-3 py-4"></i>
        <i class="fa fa-lg fa-twitter px-3"></i>
        <i class="fa fa-lg fa-linkedin-in px-3"></i>
        <i class="fa fa-lg fa-instagram px-4"></i>
      </div>
    </div>
    <div  >
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <p class="navbar-brand title mx-12 pl-12" href="#">PowerPlant<p>
          <div class="spacer">
          
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item nav-link active">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item nav-link active">
              <router-link to="/home">PROJECT</router-link>
            </li>
            <li class="nav-item nav-link active">
              <router-link to="/home">BUSINESS PARTNERS</router-link>
            </li>
            <li class="nav-item nav-link active">
              <router-link to="/home">MANAGEMENT PROFILE</router-link>
            </li>
            <li class="nav-item nav-link active">
              <router-link to="/home">CONTACT US</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider";
export default {
  components: {
    ImageSlider
  },
  props: ["to"]
};
</script>

<style scoped>
.navbar-nav a{
 color:#1a3660;
}
.navbar {
  background-color: white;
  border-bottom-style: solid;
  border-bottom-color: #a7a4a4;
  border-bottom-width: thin;
 
}

.top {
  height: 3.5rem;
  background-color: #99becc;
  overflow: hidden;
  color: #1a3660;
}
/* .nav {
  display: flex;
  height: 3rem !important;
} */
.hr {
  border: 1px solid #1a3660;
  height: initial;
}
.spacer {
  width: 200px;
}
.title {
  color: #1a3660;
  font-size: larger;
  font-family: "Playfair Display", serif !important;
  padding-left: 10%;
}

.vl {
  height: 80px;
  border-left: 6px solid green;
}

body p {
  margin-bottom: 0 !important;
}
</style>