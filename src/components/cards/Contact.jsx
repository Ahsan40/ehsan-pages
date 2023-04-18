import React from 'react'
import Linkedin from '../icons/Linkedin'
import Email from '../icons/Email'
import Github from '../icons/Github'
import Telephone from '../icons/Telephone'

const Contact = (Info) => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <a href={'mailto:' + Info.contact.email}>
        <Email className="svg-icon" /> {Info.contact.email}
      </a>
      <a href={'tel:' + Info.contact.phone}>
        <Telephone className="svg-icon" /> {Info.contact.phone}
      </a>
      <a href={'https://github.com/' + Info.contact.github}>
        <Github className="svg-icon" /> @{Info.contact.github}
      </a>
      <a href={'https://www.linkedin.com/in/' + Info.contact.linkedin}>
        <Linkedin className="svg-icon" /> @{Info.contact.linkedin}
      </a>
    </div>
  )
}

export default Contact