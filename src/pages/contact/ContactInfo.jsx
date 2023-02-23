import { Button, FormControl, TextField } from "@mui/material";
import { Form, redirect, useActionData } from "react-router-dom";
import './Contact.scss'
export default function ContactInfo() {
  const data=useActionData()
  return (

    <div className="contact-info">
      <h3>Contact Us</h3>
      <Form method='post' action="/contact/contactInfo">
      <FormControl fullWidth margin="normal">
        <TextField
        
          label="Name"
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
        
          label="Email"
          type="email"
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
        className="message"
          label="Message"
          // multiline
           rows={4}
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>


        
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
// if (!name || !email || !message) {

//   return {
//     error:'Please fill out all fields!'
//   };
// }

  //redirect 
  return redirect('/')
}