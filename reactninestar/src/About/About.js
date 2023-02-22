import React from 'react'

const About = () => {
  return (
    <div>
      <div className="page2" id="About us">
		<div className="container">
			<div className="row">
				<div className=" col-lg-6 col-md-12 col-sm-12">
					<img className="img1" src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/about-img.svg" width="100%"></img>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<h1 className="head2">Voluptatem dignissimos provident quasi</h1>
					<p clasSName="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
					<div className="row">
						<div className="col col-12 col-sm-6">
							<iconify-icon class="icon1" icon="bx:receipt"></iconify-icon>
							<h3 className="subhead1">Corporis voluptates sit</h3>
							<p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
						</div>
						<div className="col col-12  col-sm-6">
							<iconify-icon class="icon1" icon="bx:cube-alt"></iconify-icon>
							<h3 className="subhead1">Ullamco laboris nisi</h3>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default About
