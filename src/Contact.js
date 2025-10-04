export default function Contactpage(){
    return(<>
    <div id="Contact" className="container  ">
 <h1 div className="text-center mb-4 ">Contact Me </h1>
 <form>
 <div className="row mb-5">
    <div className="col-md-5 ms-5 bg-warning  p-4  ">

        <h3 div className="text-center">Get in Touch</h3>
        <p><b>Full Name:</b> Abhishek rajput</p>
        <p><b>Email:</b> abhishekrajput40946@gmail.com</p>
        <p><b>Contact number:</b> +91 8527877363</p>
        <p><b>Addres:</b> salarpur chowki ,noida sec-82 </p>

    </div>



   <div className="col-md-4 bg-light p-4 ms-5  ">
    <h2 div className="text-center">Contact Form</h2>
    <div className="mb-3">
        <input type="text" placeholder="enter your name" className="form-control"/>
    </div>

    <div className="mb-3">
        <input type="text" placeholder="enter your Email" className="form-control"/>
    </div>

    <div className="mb-3">
        <input type="text" placeholder="enter your Addres" className="form-control"/>
    </div>

    <div className="mb-3">
        <input type="text" placeholder="enter your Contact" className="form-control"/>
    </div>

    <div className="mb-3">
      <button className="btn btn-primary">Click here</button>
    </div>
  
    
     

   </div>


 


 </div>
 </form>
    </div>
   
    </>)
}