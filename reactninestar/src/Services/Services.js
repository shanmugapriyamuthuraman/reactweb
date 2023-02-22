import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div>
      <div className="page3" id="Services" >
	<div className="container">
	<h1 className="head3">Services</h1>
	<h1 className="head4">Check out the great services we offer</h1>
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
		<div className="lorem shadow ">
		<iconify-icon icon="la:basketball-ball"></iconify-icon>
        <h5>Lorem Ipsum</h5>
		<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
		</div>
	</div>
    <div className="col-lg-3 col-md-6 col-sm-12">
	<div className="lorem shadow ">
		<iconify-icon icon="bx:file"></iconify-icon>
        <h5>Set ut perspiciatis</h5>
		<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
	</div>	
	</div>
    <div className="col-lg-3 col-md-6 col-sm-12">
	<div className="lorem shadow ">
		<iconify-icon icon="bx:tachometer"></iconify-icon>
        <h5>Magni Dolores</h5>
		<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
	</div>	
	</div>
    <div className="col-lg-3 col-md-6 col-sm-12 ">
	<div className="lorem shadow ">
		<iconify-icon  icon="bx:world"></iconify-icon>
        <h5>Nemo  Enim</h5>
		<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
	</div>	
	</div>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Services
