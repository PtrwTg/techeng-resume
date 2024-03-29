import React from 'react'
import styles from './Contact.module.css'
import Resume_devops from './Techeng_resume.pdf'
import CV_devops from './Techeng_cv.pdf'
import transcript from './transcript.pdf'
import { FaPhone, FaEnvelope, FaFileWord, FaFileInvoice} from 'react-icons/fa6'
import { FaFileAlt } from "react-icons/fa";
function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Contact</h3>
                <p className={styles.contact_desc}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am sure that my experience and skills will be a huge asset to the Technology Engineer position,
                and I am excited about the chance to join your team. Do not hesitate to get in touch with me
                if you think that my skills meet the requirements of your company. I appreciate your attention in advance.                </p>
                <p className={styles.contact_address}> 
                Address : <br />
                162 MOO. 9, Kamphaeng Saen Subdistrict, <br /> Kamphaeng Saen District, 
                Nakhon Pathom Province 73140 
                </p>
                <p><FaPhone />(+66) 83 815 2351</p>
                <p className={styles.Pmail}><FaEnvelope /> mawngai0001@gmail.com</p>
            </div>
            <div className={styles.contact_form}>
          <div className={styles.link_container}>
            <a href={Resume_devops} className={styles.link}>
              <FaFileAlt className={styles.link_icon} />
              <span>My Resume</span>
            </a> <br /><br />
            <a href={CV_devops} className={styles.link}>
              <FaFileWord className={styles.link_icon} />
              <span>My CV</span>
            </a> <br /><br />
            <a href={transcript} className={styles.link}>
              <FaFileInvoice className={styles.link_icon} />
              <span>My Transcript</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;