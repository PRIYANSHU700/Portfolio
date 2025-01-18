import contactpic from '../media/contactuspic.png';
import styles from '../styles/Contact.module.css';
import Image from 'next/legacy/image';
import Navbar from '@/components/Navbar';
import Homesection5 from '@/components/Homesection5';
import emailjs from '@emailjs/browser';

const contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6wkpk0e', 'template_kadbqkj', e.target, 'cxX87IzHgTDrazNK2')
      .then((result) => {
          alert('Message sent successfully');
          e.target.reset();
      }, (error) => {
          alert(error.text);
      });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.contact_outer}>
        <div className={styles.contact_inner}>
          <p className={styles.contact_heading}>Contact Me</p>
          <div className={styles.contact_innermost}>
            <div className={styles.img}>
              <Image src={contactpic} layout="responsive" alt="Contact Image" />
            </div>
            <form onSubmit={sendEmail} className={styles.form}>
              <p className={styles.form_heading}>Get in touch</p>
              <input 
                type="text" 
                placeholder="Your Name" 
                name="user_name" 
                required 
                className={styles.input}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                name="user_email" 
                required 
                className={styles.input}
              />
              <textarea 
                placeholder="Your Message" 
                name="message" 
                required 
                className={styles.textarea}
              />
              <button type="submit" className={styles.submit_button}>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Homesection5 />
    </div>
  );
};

export default contact;
