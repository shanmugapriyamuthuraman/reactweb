import React from 'react'
import './Curosel.css'
const Curosel = () => {
  return (
    <div>
      <div id="clients" >
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<h3 class="head-color">Clients</h3>
					<p class="fs-2 fw-bold after-line">They trusted us</p>
				</div>
			</div>
			<div class="owl-carousel d-flex brand carousel owl-theme py-5">
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-1.png"></img>
				</div>
				<div class="team-play items ">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-2.png"></img>
				</div>
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-3.png"></img>
				</div>
				<div class="team-play items ">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-4.png"></img>
				</div>
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-5.png"></img>
				</div>
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-6.png"></img>
				</div>
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-7.png" ></img>
				</div>
				<div class="team-play items">
					<img width="80%" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/clients/client-8.png"></img>
				</div>
			</div>
        </div>
    </div>
    <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
			<script src="jsfile/owl.carousel.min.js"></script>
			{/* <script>
				$('.brand' ).owlCarousel({
					loop: true,
					margin: 10,
					nav: true,
					autoplay: true,
					autoplayTimeout: 4000,
					autoplayHoverPause: true,
					responsive: {
						0:{
							items: 1
						},
						600:{
							items: 3
						},
						1000:{
							items: 6
						}
					}
				})
                	</script> */}
    </body>
    </div>
  )
}

export default Curosel
