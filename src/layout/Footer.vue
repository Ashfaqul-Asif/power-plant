<template>
  <!--   <div class="footer">
    <div class="d-flex container">
      <div class="leftContent mt-4">
        <div class="ml-4 icons">
          <i class="fa fa-lg fa-facebook pa-auto"></i>
          <i class="fa fa-lg fa-twitter pa-auto"></i>
          <i class="fa fa-lg fa-linkedin-in pa-auto"></i>
          <i class="fa fa-lg fa-instagram pa-auto"></i>
        </div>
        <v-btn class="px-10 button" outlined color="#1a3660">Contact Us</v-btn>
      </div>
      <div class="space"></div>
      <div class="d-flex my-auto">
        <div class="footerContent">
          <p>About Us</p>
          <p>Career</p>
        </div>
        <div class="footerContent">
          <p>Company Profile</p>
          <p>Media</p>
        </div>
        <div class="footerContentk">
          <p>Tender</p>
          <p>Report</p>
        </div>
      </div>
    </div>
   
   
  </div>-->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class=" col-md-4">
          <div class="text-center">
            <i class="fa fa-lg fa-facebook mx-4"></i>
            <i class="fa fa-lg fa-twitter mx-4"></i>
            <i class="fa fa-lg fa-linkedin-in mx-4"></i>
            <i class="fa fa-lg fa-instagram mx-4"></i>
          </div>
          <div class="contact-us text-center mx-auto mt-3">
            <p class="mb-0">Contact Us</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-2 col-xs-2">About Us</div>
          <div class="col-md-4 col-sm-2 col-xs-2">Company Profile</div>
          <div class="col-md-4 col-sm-2 col-xs-2">Tender</div>
          <div class="col-md-4 col-sm-2 col-xs-2">Careers</div>
          <div class="col-md-4 col-sm-2 col-xs-2">Media</div>
          <div class="col-md-4 col-sm-2 col-xs-2">Report</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-us {
  border: 1px solid #1a3660;
  width: max-content;
  padding: 0.4rem 4rem;
}
.footer {
  overflow: hidden;

  background-color: #99becc;
  color: #1a3660;
}
.leftContent {
  width: 20%;
}
.space {
  width: 20%;
}
.hr {
  border-bottom: 1px solid #1a3660;
}
.footertext {
  font-size: 12px;
}
.footerContent {
  margin-right: 200px;
}
</style>