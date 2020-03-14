<template>
  <div>
    <div class="top d-flex">
      <div class="spacer">
      </div>
      <div class="pr-6 pl-3 ">
        <p style="font-size:small" class="pt-2">+8801700 000000 </p>
        <p style="font-size:small">mail@powerplant.com </p>
      </div>
      <hr class="hr" />
      <div class="pl-4 icons mr-12 " >
        <i class="fa fa-lg fa-facebook px-3 py-4"></i>
        <i class="fa fa-lg fa-twitter px-3"></i>
        <i class="fa fa-lg fa-linkedin-in px-3"></i>
        <i class="fa fa-lg fa-instagram px-4"></i>
      </div>
    </div>
    <div class="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!--  <a class="navbar-brand" href="#"></a> -->
        <h3 class="pt-2 title">POWERPLANT</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="spacer" type="horizontal"></div>

        <div class="collapse navigationLink navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item px-4 active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#">ABOUT US</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#">PROJECT</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#">BUSINESS PARTNERS</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#">MANAGEMENT PROFILE</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#">CONTACT US</a>
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
  }
};
</script>

<style scoped>
.navbar {
  background-color: white;
  border-bottom-style: solid;
  border-bottom-color: #a7a4a4;
  border-bottom-width: thin;
  height: 53px;
  width: 100%;
  color: #7686a0;
}
.top {
  height: 3rem;
  background-color: #99becc;
  overflow: hidden;
  color: #1a3660;
  
}
.nav {
  display: flex;
  height: 3rem !important;
}
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
navbar-toggler{
  position: fixed;
}
body p{
   margin-bottom: 0 !important;
}
</style>