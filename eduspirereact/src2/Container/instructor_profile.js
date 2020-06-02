import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class InstructorProfile extends React.Component{

    componentDidMount() {
         function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#user_prof_img').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
          }
          
          $("#profile_image").change(function(){
              readURL(this);
          });

    }

	render()
	{
	return(
            <div>
                <div class="vend_header">
                    <div class="container">
                        <div class="logo">
                            <Link to="/"><img src="images/logo.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
                <section class="inner_cont instruct_p">
                    <article class="vendor_profile">
                        <div class="container">
                            <div class="vend_cont">
                                <div class="step_head">
                                    <h2>Personal Info</h2>
                                    <p>Tell us a bit about yourself. This information will appear on your public profile, so that potential service buyers can get to know you better.</p>
                                    <p class="small">* Mandatory fields</p>
                                </div>
                                <form class="form_control" action="javascript:;">
                                    <div class="fields name">
                                        <div class="label req">
                                            <label>
                                                <span>Full Name</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">Ex. John Smith</p>
                                        </div>
                                        <div class="inputbox">
                                            <input type="text" name="first_name" class="first-name" value="" placeholder="First Name" />
                                            <input type="text" name="last_name" class="last-name" value="" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div class="fields u_prof">
                                        <div class="label req">
                                            <label>
                                                <span>Profile Picture</span>
                                                <small></small>
                                            </label>
                                            <p class="txt">Add a profile picture of yourself so customers will know exactly who they’ll be working with.</p>
                                        </div>
                                        <div class="inputbox">
                                            <div class="prof_photo">
                                                <label for="profile_image">
                                                    <input type="file" accept="image/png,image/jpeg" class="hidden" id="profile_image" name="profile[image]" />
                                                    <img src="" id="user_prof_img" alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fields compi">
                                        <div class="label req">
                                            <label>
                                                <span>Company Info</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea placeholder="Write company information here."></textarea>
                                        </div>
                                    </div>
                                    <div class="fields name">
                                        <div class="label req">
                                            <label>
                                                <span>Company Location</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <select>
                                                <option selected>Select Country</option>
                                                <option>India</option>
                                                <option>Australia</option>
                                                <option>England</option>
                                                <option>America</option>
                                            </select>
                                            <select>
                                                <option selected>Select City</option>
                                                <option>Delhi</option>
                                                <option>Noida</option>
                                                <option>Gurgaon</option>
                                                <option>Gurugram</option>
                                            </select>
                                            <input type="text" value="" placeholder="Pincode" />
                                        </div>
                                    </div>
                                    <div class="fields">
                                        <div class="label req">
                                            <label>
                                                <span>Address</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea placeholder="Write your company address here."></textarea>
                                        </div>
                                    </div>
                                    <div class="fields">
                                        <div class="label req">
                                            <label>
                                                <span>Description</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea minlength="150" maxlength="600" placeholder="Share a bit about your work experience, cool projects you’ve completed, and your area of expertise."></textarea>
                                            <div class="inf">
                                                <span>min. 150 characters</span>
                                                <span class="char-count">0/600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fields">
                                        <div class="label">
                                            <label>
                                                <span>Personal Website</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">Include a link to your personal website or portfolio with your work samples.</p>
                                        </div>
                                        <div class="inputbox">
                                            <input type="url" value="" placeholder="Provide a link to your own professional website" />
                                        </div>
                                    </div>
                                    <div class="fields cont">
                                        <div class="label">
                                            <label>
                                                <span><i class="fa fa-envelope" aria-hidden="true"></i> Email</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <button type="button" class="btndefault">Add Email</button>
                                        </div>
                                    </div>
                                    <div class="fields cont">
                                        <div class="label">
                                            <label>
                                                <span><i class="fa fa-phone" aria-hidden="true"></i> Phone Number</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">We'll never share your phone number.</p>
                                        </div>
                                        <div class="inputbox">
                                            <button type="button" class="btndefault">Add Phone Number</button>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button type="submit" class="btndefault">Finish</button>
                                    </div>
                                </form>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </article>
                    <div class="clearfix"></div>
                </section>
            </div>
        )
	}
}
export default InstructorProfile