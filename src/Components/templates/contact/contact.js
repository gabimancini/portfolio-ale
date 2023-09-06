import { useState, useRef } from 'react';
import ImgContacto from './../../../assets/imgContacto.svg';
import { AiOutlineCheckCircle } from "react-icons/ai";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [values, setValues] = useState({
        form_name: "",
        form_email: "",
       form_message: ""
    })
    const form = useRef()
    const confirmMsg = useRef()
    const handleSubmit = (evt) => {
        console.log("click")
        evt.preventDefault();
        emailjs.sendForm("service_l071erp","template_de4kcid", form.current, 'OHHlNmI6Xr8qVTGjG')
            .then((result) => { console.log(result.text) },
                (error) => {
                    console.log(error.text)
                }
            ) 
        setValues({
            form_name: "",
            form_email: "",
           form_message: ""
        });
        setIsSubmit(true)
    }
    const handleChange = (evt) => {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;

        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
            ...values,
            [name]: value,
        };

        // Sincroniza el estado de nuevo
        setValues(newValues);
        setIsSubmit(false)
    }
    return (
        <div className="container text-center m-t-60 padding-x-lg-140">
            <h2 className="color-primary-black font-size-h2 text-center m-y-10 m-b-lg-25">Contact ME</h2>
            <p className="description maxw-lg-629 m-auto font-size-paragraph">
                You can also use the quick contact form to make inquiries and ask questions about my services and projects. Let's talk?
            </p>
            <div className='d-flex direction-sm-col direction-md-row justify-md-space-evenly m-t-sm-70 m-y-lg-140 text-left'>
                <form ref={form} onSubmit={handleSubmit} className='d-flex direction-column container__col-md-7 container__col-lg-6'>
                    <label htmlFor="form_name" className='font-size-paragraph'>Name</label>
                    <input
                        id="form_name"
                        name="form_name"
                        type="name"
                        value={values.name}
                        onChange={handleChange}
                        className='bg-input_line'
                    />
                    <label htmlFor="form_email" className="font-size-paragraph">Email *</label>
                    <input
                        id="form_email"
                        name="form_email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className='bg-input_line'
                        required
                    />
                    <label htmlFor="form_message" className='font-size-paragraph'>Message...</label>
                    <textarea
                        id="form_message"
                        name="form_message"
                        type="message"
                        value={values.message}
                        onChange={handleChange}
                        className='bg-input_line'
                    ></textarea>

                    <button type="submit" className='bg-hero_btn'>Send message...</button>
                </form>
                <div className='d-flex justify-end container__col-md-5 container__col-lg-6 m-t-sm-70 m-t-md-50 m-t-lg-0 '>
                    <div className='maxw-md-257 maxw-lg-478 position-relative text-right'>
                        <img src={ImgContacto} alt="Envelope" />
                        {isSubmit? <div className="d-flex justify-center align-center message color-blue" ref={confirmMsg}><p>Message sent succesfully.<AiOutlineCheckCircle className='m-x-10' /></p></div> : null}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact;
