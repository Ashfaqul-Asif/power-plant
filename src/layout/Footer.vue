<template>
  <div class="footer">
    <div class="d-flex container">
      <div class="leftContent mt-4">
        <div class="ml-4 icons">
          <i class="fa fa-mg fa-facebook px-3 py-4"></i>
          <i class="fa fa-mg fa-twitter px-3"></i>
          <i class="fa fa-mg fa-linkedin-in px-3"></i>
          <i class="fa fa-mg fa-instagram px-4"></i>
        </div>
        <v-btn class="px-10 button" outlined color="#1a3660">Contact Us</v-btn>
      </div>
      <div class="space"></div>
      <div class="d-flex my-auto">
        <div class="footerContent">
          <p>About Us</p>
          <p>Career</p>
        </div>
        <div class="footerContent ">
          <p>Company Profile</p>
          <p>Media</p>
        </div>
        <div class="footerContentk ">
          <p>Tender</p>
          <p>Report</p>
        </div>
      </div>
    </div>
    <hr class="hr mx-7 mb-2">
    <div class="text-center footertext"><p>© Copyright 2009-2019　Power Plant.Corp |  Legal  |  Privacy Statement</p></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  overflow: hidden;
  width: 100%;
  background-color: #99becc;
  color:#1a3660;
  height: 25vh;
}
.leftContent {
  width: 20%;
}
.space {
  width: 20%;
}
.hr{
   border-bottom: 1px solid #1a3660;
}
.footertext{
  font-size: 12px;
}
.footerContent{
  margin-right: 200px;
}
</style>