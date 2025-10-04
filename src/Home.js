import "./Style.css"

export default function Homepage(){
    return(<>
    
   <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <a class="navbar-brand text-white fs-4 " href="#">Abhishek Rajput</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 ">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#About">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#Project">Projects</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#Technical-skill">Skills</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white" href="#Contact">Contact</a>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>


<nav className="container-fuild banner">
    <nav className="container">
        <nav className="row ">
        <nav className="col-md-7 mid text-white ">

    <nav className="txt1">
     hi, I'm Abhishek Rajput
    </nav>

    <nav className="txt2">a full stack devepoler</nav>

    <nav className="txt3 col-md-10 ">
        <p>I bulid scable and responsive Web applications using modern frontend and backend technologies
            , creating seamless user experience</p>
    </nav>
    <button className="button px-4 py-1" > read more</button>

        </nav>

        
    </nav>



</nav>
</nav>





    </>)
}