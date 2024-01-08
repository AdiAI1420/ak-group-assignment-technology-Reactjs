import "./itSupport.css"
import AcademicSupport from "./image/AcademicSupport.mp4"
import ITSupport from "./image/ITSupport.mp4"
import WebDesign from "./image/WebDesign.mp4"
import WebDevelopment from "./image/WebDevelopment.mp4"



function ItSupport(){
    return(
      <div>
        <div className = "container">
        <div className="row">
  <div className="col-md-3">
    <div className="card">
      <div className="card-body pb-3">
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbdQZu2oaur0N0_lLSehT-JDZrS6o0zG_1dOR3XFei-e4X6U_PMvpUt1jt_B4ZA_gYEg&usqp=CAU" className = "pic" alt = "web design"/>
        <h5 className="card-title"><span className = "heading">Web</span> Design</h5>
        <p className="card-text pb-3">We will design responsive website in 10 hours.
            
            </p>
            
<button className="btn btn-primary" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal">WEB DESIGN</button>
            
          
        
      </div>
    </div>
  </div>






  <div className="col-md-3">
    <div className="card">
      <div className="card-body pb-3">
        <img src = "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg" alt = "image2" className = "pic"/>
        <h5 className="card-title"> <span className = "heading">Web </span> Development</h5>
        <p className="card-text">
        we will design and develop dajngo or flask web 
      applications with react js.
        </p>


        

<button className="btn btn-primary" data-bs-target="#exampleModalToggle21" data-bs-toggle="modal">Web Development</button>









        
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body pb-3">
        <img src = "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-technical-support-banner-website-maintenance-image_1091569.jpg" className = "pic" alt = "web developmenet"/>
        <h5 className="card-title"><span className = "heading">IT</span> Support</h5>
        <p className="card-text">
           We will be administrative virtual 
            assistant for all admin support tasks.
        </p>


        

<button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">IT Support </button>






        <br></br>
        
        
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <img src = "data:image/jpeg;base64,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YjuTG5YZRVcqK60REREREREREREREREREREREREREREVURFZQqIiKqlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERVREVlC//Z" className = "pic" alt = "It Support"/>
        <h5 className="card-title"><span className = "heading">Academic</span> Support</h5>
        <p className="card-text"> We will
        find complete project topics and reserach materials for all level of education.</p>





            

<button className="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Academic Support</button>










          
        
      </div>
    </div>
  </div>
</div>
</div>
<div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video style = {{width:"100%"}} autoPlay controls>
                <source src = {WebDesign} type = "video/mp4"/>
            </video>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModalToggle21" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Web Development</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video style = {{width:"100%"}} autoPlay controls>
                <source src = {WebDevelopment} type = "video/mp4"/>
            </video>
      </div>
     
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">IT Support</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video style = {{width:"100%"}} autoPlay controls>
                <source src = {ITSupport} type = "video/mp4"/>
            </video>
      </div>
      
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Graphic Design</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video style = {{width:"100%"}} autoPlay controls>
                <source src = {AcademicSupport} type = "video/mp4"/>
            </video>
      </div>
      
    </div>
  </div>
</div>
</div>
    )
}
export default ItSupport;