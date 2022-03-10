import React from 'react'

import Dot from '../../Components/dot/Dot'
import Bar from '../../Components/bar/Bar'

import './contact.css'

const Contact = () => {
  return (
      <div className = 'skillcore__contact linear__bg' id = 'contact'>
          <div className = 'skillcore__contact-heading' role = 'heading'>
              <h3>Contact Us</h3>
          </div>

          <div className = 'skillcore__contact-dots' role = 'presentation'>
              <Dot color = '#00DFDE'/>
              <Dot color = '#2ABB82'/>
              <Dot color = 'rgb(225, 208, 90)' />
              <Dot color = '#ff9800'/>
          </div>

          <div className = 'skillcore__contact-content'>
              <form>
                  <div className = 'skillcore__contact-content_form-body'>
                      <h4>Please fill the following fields</h4>
                      <div className = 'skillcore__contact-content_form-body_name'>
                          <input placeholder = 'Name' type = 'text' value = 'name' role = 'textbox' aria-required />
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#00DFDE'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_surname'>
                          <input placeholder = 'Surname' type = 'text' value = 'surname' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#2ABB82'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_email'>
                          <input placeholder = 'Email' type = 'email' value = 'email' role = 'textbox' aria-required/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = 'rgb(225, 208, 90)'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_number'>
                          <input placeholder = 'Contact Number' type = 'tel' value = 'number' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#ff9800'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_company'>
                          <input placeholder = 'Company' type = 'text' value = 'company' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#00DFDE'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_province'>
                          <input placeholder = 'Province' value = 'province' list = 'provinces' role = 'listbox'/>
                          <datalist id = 'provinces'>
                              <option>Western Cape</option>
                              <option>Eastern Cape</option>
                              <option>Northen Cape</option>
                              <option>Freestate</option>
                              <option>Guateng</option>
                              <option>Kwazulu-Natal</option>
                              <option>Mpumalanga</option>
                              <option>North West</option>
                          </datalist>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#2ABB82'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_city'>
                          <input placeholder = 'City' type = 'text' role = 'textbox' value = 'city'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = 'rgb(225, 208, 90)'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_service'>
                          <input placeholder = 'Which service are you interested in?' value = 'service' role = 'listbox' list = 'services' />
                          <datalist id = 'services'>
                              <option>Buisness Management</option>
                              <option>Recruitment</option>
                              <option>Training</option>
                              <option>Compliance</option>
                          </datalist>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#00DFDE'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_message'>
                          <textarea placeholder = 'Would you like to include a message?' value = 'message' role = 'textbox' rows = '5' cols = '83'></textarea>
                      </div>
                      
                      <div className = 'skillcore__contact-content_form-body_submit'>
                          <input type = 'submit' id = 'submit' value = 'Submit' role = 'button'/>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Contact
