import { useState } from 'react';
import ImgContacto from './../../../assets/imgContacto.svg'

const Contact = () => {
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })
    function handleSubmit(evt) {
        evt.preventDefault();
    }
    function handleChange(evt) {
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
    }
    return (
        <div className="container text-center m-t-60 padding-x-lg-140">
            <h2 className="color-primary-black font-size-h2 text-center m-y-10 m-b-lg-25">Contact ME</h2>
            <p className="description maxw-lg-629 m-auto font-size-paragraph">
                You can also use the quick contact form to make inquiries and ask questions about my services and projects. Let's talk?
            </p>
            <div className='d-flex direction-sm-col direction-md-row justify-md-space-evenly m-t-sm-70 m-y-lg-140 text-left'>
                <form onSubmit={handleSubmit} className='d-flex direction-column container__col-md-7 container__col-lg-6'>
                    <label htmlFor="name" className='font-size-paragraph'>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        value={values.name}
                        onChange={handleChange}
                        className='bg-input_line'
                    />
                    <label htmlFor="email className='font-size-paragraph'">Email *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className='bg-input_line'
                        required
                    />
                    <label htmlFor="message" className='font-size-paragraph'>Message...</label>
                    <textarea
                        id="message"
                        name="message"
                        type="message"
                        value={values.message}
                        onChange={handleChange}
                        className='bg-input_line'
                    ></textarea>

                    <button type="submit" className='bg-hero_btn'>Send message...</button>
                </form>
                <div className='container__col-md-5 container__col-lg-6 m-t-sm-70 m-t-md-50 m-t-lg-0  text-right'>
                    <img src={ImgContacto} alt="Envelope" className='maxw-md-257 maxw-lg-478'/>
                </div>
            </div>
        </div>

    )
}
export default Contact;
