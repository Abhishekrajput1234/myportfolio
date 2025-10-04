import image from "./image/pic2jpg.jpg";
import pic1 from "./image/pic3.jpg"

export default function Projectpage(){
    return(<>
    <div  id="Project"className="container-fuild p-5 ">
<h1 className="section"><span className="text-primary">My</span> <span className="text-danger"> Projects</span> </h1>

<div className="row mt-4 bg-light p-5  ">
   <div className="col-md-6">
    <h3>Project Title : Restaurant Website</h3>
    <p className="mt-3">A modern and responsive restaurant website designed to showcase menu items, customer reviews, and contact details. 
        The site includes a smooth navigation bar, animated hero section, and an easy-to-use reservation form. Built using
         HTML, CSS, JavaScript, and fully optimized for mobile devices.</p>

       <p><b>Tech stack </b>: React, JavaScript, css, bootstrap</p>

       <p><b>GitHub </b>: https://github.com/Abhishekrajput1234/Restaurant-website</p>
    </div> 

    <div className="col-md-4">
        <img src={image} alt="img" className="img-fuild"/>
    </div>
   




   

    </div>
    <hr></hr>

    <div className="row bg-light  p-4 ">
      <div className="col-md-6">
        <h3 className="mt-4">Project title : Web template</h3>
        <p className="mt-3">A clean and fully responsive web template designed for modern websites. It includes a flexible layout, reusable 
            components, and is optimized for both desktop and mobile devices. Built using HTML5, CSS3, and  JavaScript.</p>

            <p><b>Tech stack </b>: HTML, CSS, bootstrap</p>
            <p><b>GitHub </b> :  https://github.com/Abhishekrajput1234/Web-template </p>
      </div>

      <div className="col-md-4">
        <img src={pic1} alt="img" className="img-fuild"/>
      </div>
    </div>
</div>
    
    
    
    </>)
}