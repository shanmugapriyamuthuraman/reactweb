import React from 'react'
import './Home.css'
import About from '../About/About'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'
import Faq from '../Faq/Faq'
import Team from '../Team/Team'
import Curosel from '../Curosel/Curosel'
import Contact from '../Contact/Contact'
import Subscripe from '../Subscripe/Subscripe'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
       <header id="hed" className="container-fluid fixed-top">
	<div className="row">
		<nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-center py-3 shadow-sm p-2">
			<div className="container">
				<a className="navbar-brand fs-3" href="">Ninestars</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item px-1">
							<a className="nav-link active alink" aria-current="page"  href="#Home">Home</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#About us">About us</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#Services">Services</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#Portfolio">Portfolio</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#Team">Team</a>
						</li>
						<li className="nav-item dropdown px-1">
							<a className="nav-link dropdown-toggle alink" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
						<li className="nav-item px-2">
							<a className="nav-link alink" href="#Contact">Contact</a>
						</li>
						<div className='button'>
						<a type="button" className="btn btn rounded-pill px-4 gs" href="">Get Started</a>
						</div>
					</ul>

				</div>
			</div>
		</nav>
	</div>
</header>
<div class="page1" id="Home">
	<div class="container">
	<div class="row ">
    <div class=" col-lg-6 col-md-12 col-sm-12 order-1 order-lg-0">
      <h1 class="head1">Bettter digital experience with Ninestars</h1>
	  <p class="para1">We are team of talented designers making websites with Bootstrap</p>
	  <button type="button" class="btn text-white px-4">Get Started</button>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 banerimg order-0 order-lg-1">
      <img  class="img1"src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg" width="100%"></img>
    </div>
  </div>
	</div>
	</div>
	<About/>
	<Services/>
	<Portfolio/>
	<Faq/>
	<Team/>
	<Curosel/>
	<Contact/>
	<Subscripe/>
	<Footer/>
    </div>
  )
}

export default Home
