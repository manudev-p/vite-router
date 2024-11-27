import './_contact.scss'
import Button from '../components/Button'

const CONTACT_TITLE = 'What’s Next?'
const CONTACT_SUBTITLE = 'Get In Touch'
const CONTACT_TEXT =
  'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'
const CONTACT_EMAIL = 'mailto:dev.devthings@gmail.com'
const CONTACT_EMAIL_LINK_TEXT = 'Say Hello'

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">{CONTACT_TITLE}</h2>
      <h2 className="contact-sub-title">{CONTACT_SUBTITLE}</h2>
      <p className="contact-text">{CONTACT_TEXT}</p>
      <div className="contact-cta">
        <Button link={CONTACT_EMAIL} text={CONTACT_EMAIL_LINK_TEXT} />
      </div>
    </div>
  )
}

export default Contact
