import React, { useRef } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent/Index';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vwjmmpl', 'template_nf35bwo', form.current,{
        publicKey: 'AqKeeUty7LpLrQfWa',
      })
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Email failed to send:', error);
        }
      );

    // Clear the form
    e.target.reset();
  };

  return (
    <section id='contact' className='contact'>
      <PageHeaderContent
        headerText='Contact'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3 className='contact__content__header-text'>
            Let's Talk
          </h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <div className='contact__content__form'>
            <form onSubmit={sendEmail} ref={form}>
              <div className='contact__content__form__controlwrapper'>
                <div>
                  <input
                    required
                    name='name'
                    className='inputName'
                    type='text'
                  />
                  <label htmlFor='name' className='nameLabel'>Name</label>
                </div>
                <div>
                  <input
                    required
                    name='email'
                    className='inputEmail'
                    type='text'
                  />
                  <label htmlFor='email' className='emailLabel'>Email</label>
                </div>
                <div>
                  <textarea
                    required
                    name='message'
                    className='inputDescription'
                    type='text'
                    rows="5"
                  />
                  <label
                    htmlFor='message'
                    className='descriptionLabel'
                  >
                    Message
                  </label>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
