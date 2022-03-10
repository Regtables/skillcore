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
                          <input placeholder = 'Name' type = 'text' role = 'textbox' aria-required />
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#00DFDE'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_surname'>
                          <input placeholder = 'Surname' type = 'text' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#2ABB82'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_email'>
                          <input placeholder = 'Email' type = 'email' role = 'textbox' aria-required/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = 'rgb(225, 208, 90)'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_number'>
                          <input placeholder = 'Contact Number' type = 'tel' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#ff9800'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_company'>
                          <input placeholder = 'Company' type = 'text' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = '#00DFDE'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_province'>
                          <input placeholder = 'Province' list = 'provinces' role = 'listbox'/>
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
                          <input placeholder = 'City' type = 'text' role = 'textbox'/>
                          <div className = 'skillcore__contact-content_form-bar'>
                              <Bar color = 'rgb(225, 208, 90)'/>
                          </div>
                      </div>

                      <div className = 'skillcore__contact-content_form-body_service'>
                          <input placeholder = 'Which service are you interested in?' role = 'listbox' list = 'services' />
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
                          <textarea placeholder = 'Would you like to include a message?' role = 'textbox' rows = '5' cols = '83'></textarea>
                      </div>
                      
                      <div className = 'skillcore__contact-content_form-body_submit'>
                          <input type = 'submit' id = 'submit' role = 'button'/>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Contact
