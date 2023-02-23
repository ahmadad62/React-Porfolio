import { Form, redirect, useActionData } from "react-router-dom";
import './Contact.scss'
export default function ContactInfo() {
  const data=useActionData()
  return (

    <div className="contact-info">
      <h3>Contact Us</h3>
      <Form method='post' action="/contact/contactInfo">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        {data&& data.error &&<p>{data.error}</p>}
        <button>Submit</button>
      </Form>
    </div>

  )
}

export const contactAction = async ({ request }) => {
  const data = await request.formData()
  console.log(request)
  const submission = {
    email: data.get('email'),
    message: data.get('message'),

  }
  console.log(submission)
  //send post request
if(submission.message.length <10){
  return {error:'Message must be over 10 chars long'}
}


  //redirect 
  return redirect('/')
}