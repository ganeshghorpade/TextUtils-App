import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const[email,setEmail]= useState("");
  const[phone,setPhone]= useState("");
  const[message,setMessage]= useState("");
  const[error,setError]=useState();
  const Navigate = useNavigate();

  const getdata = async()=>{
    console.log(email,phone,message);
    if(!email || !phone){
      setError(true);
      return false;
    }

    let data = await fetch("http://localhost:8000/Contact",{
      method:"POST",
      body:JSON.stringify({email,phone,message}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    data = await data.json();
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data));
    Navigate('/');


  }
return (
<>
   <h1 className="text-light al mt-3"><b>Contact us </b></h1>
    <div className=" mt-3 my-3 fb ">
    <form className="fc">
  <span className="mb-3 fc ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address<span className="req"> *</span></label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {error && !email &&<span className="error-style">Enter the Valid Email</span>}
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </span>
  <span className="mb-3 fc ">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number<span className="req"> *</span></label>
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1"/>
    {error && !phone && <span className="error-style">Enter the Valid phone number</span>}<br/>
  </span>
  <span className="mb-3 fc ">
    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
    <textarea type="text" value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </span>
  <button type="button" onClick={getdata} className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
)
}

export default Contact
