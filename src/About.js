import image from "./image/pic1.webp"
export default function Aboutpage(){
    return(<>
    <nav  id="About" className="container-fuild p-5 ">
     
<h1 className="section"><span className="text-danger">About</span> <span className="text-secondary"> page</span></h1>
        
    </nav>

    <nav className="row  p-4  bg-light ">
        <nav className="col-md-5 pic  ">
            <img src={image} alt="profile" className="img-fluid rounded-circle shadow "/>
        </nav>

        <nav className="col-md-6  ">
            <p className="mt">About Me</p>

            

             <h4 className="ms-5">Introduction</h4>

            <p className="ms-5 mt-2 ">
                Hi, I'm <b>Abhishek Rajput</b>, a dedicated <b>Full Stack Developer</b> with a strong foundation in both frontend and backend technologies.
                 I enjoy transforming ideas into real-world applications that are fast, responsive, and user-friendly.

            </p>

            <h4 className="ms-5  mt-4">Carrer Goals</h4>

           <p className="ms-5 mt-2 "> My goal is to build scalable and user-friendly applications as a Full Stack Developer. I aim to contribute 
            to real-world projects, grow my technical expertise, and become a valuable part of an innovative development team."

</p>
        </nav>


    </nav>
    
    
    </>)
}