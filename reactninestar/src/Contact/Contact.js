import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div class="page8" id="Contact">
		<div class="container">
			<h1 class="head3">Contact Us</h1>
			<h1 class="head4">Contact us the get started</h1>
			<div class="contact">
			<div class="row">
				<div class="col-lg-5   d-felx align-items:stretch;">
					<div class="info shadow">
					<div class="location">
						<iconify-icon icon="carbon:location"></iconify-icon>
						<h4>Location:</h4>
						<p>A108 Adam Street, New York, NY 535022</p>
					</div>
					<div class="email">
						<iconify-icon icon="clarity:email-line"></iconify-icon>
						<h4>Email:</h4>
						<p>info@example.com</p>
					</div>
					<div class="call">
						<iconify-icon icon="bi:phone"></iconify-icon>
						<h4>Call:</h4>
						<p>+1 5589 55488 55s</p>
					</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.698621888972!2d77.29696872561846!3d8.964100679910933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1666684033464!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
				<div class="col-lg-7  d-flex align-items:stretch;">
					<div class="form info shadow">
					<div class="row">
						<div class="form-group col-md-6 mt-2">
						<label for="name" class="form-label">Your Name</label>
						<input type="text" id="name" class="form-control" name="name" placeholder="Your Name"></input>
						</div>
						<div class="form-group col-md-6 mt-2">
						<label for="email" class="form-label">Your  Email</label>
						<input type="email" id="email" class="form-control" name="email" placeholder="Your Email"></input>
						</div>
						<div class="mt-4">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject"></input>
</div>
<div class="mt-4">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div class="send">
<button type="button" class="but">Send Message</button>
</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Contact
