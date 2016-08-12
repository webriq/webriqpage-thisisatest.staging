---
title: Contact Us
shortdesc: For more information about our services you can contact us through our form below.
cmsUserSlug: contact-us
date: 2016-08-12T18:33:00+08:00
categories: ""
---

<form name="contact-form" method="POST" action="thank-you-page" netlify="netlify">
<input type="hidden" name="subject" value="Online Enquiries"/>
<div class="row">
<div class="input-field col s12 m6">
<input id="first_name" type="text" name="first name" required="required" class="validate"/>
<label for="first_name">First Name <sup class="materialize-red-text">*</sup></label>
</div>
<div class="input-field col s12 m6">
<input id="last_name" type="text" name="last name" required="required" class="validate"/>
<label for="last_name">Last Name <sup class="materialize-red-text">*</sup></label>
</div>
</div>
<div class="row">
<div class="input-field col s12 m6">
<input id="phone" type="text" name="contact no" class="validate"/>
<label for="phone">Contact No.</label>
</div>
<div class="input-field col s12 m6">
<input id="email" type="email" name="replyto" required="required" class="validate"/>
<label for="email">Email <sup class="materialize-red-text">*</sup></label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<input id="address" type="text" name="address" class="validate"/>
<label for="address">Address</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<textarea id="message" name="message" class="materialize-textarea"></textarea>
<label for="message">Message</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<button type="submit" value="Submit" name="Submit" class="btn-large waves-effect weves-light">Submit</button>
</div>
</div>
</form>