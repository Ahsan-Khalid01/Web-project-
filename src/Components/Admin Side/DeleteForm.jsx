function DeleteForm()
{
    return (
    <>

   <div className="position-absolute top-50 start-50 translate-middle">
          <form>
            <div>
              <label htmlFor="">Delete Department</label>
            </div><br />
  <div class="mb-3">
    <label >Department Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
     </div>

     <div class="mb-3">
    <label > Department ID</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    </div>
   

   <div class="mb-3">
    <label >City</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>

   <div class="mb-3">
    <label >Postal Code</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>
  

  <div>
     <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Water</a></li>
            <li><a class="dropdown-item" href="#">Electricity</a></li>
            <li><a class="dropdown-item" href="#">Gas</a></li>
             <li><a class="dropdown-item" href="#">Road</a></li>
            <li><a class="dropdown-item" href="#">Sanitation</a></li>
         
            <li><a class="dropdown-item" href="#">Education</a></li>
              <li><a class="dropdown-item" href="#">Parks</a></li>
            <li><a class="dropdown-item" href="#">Health</a></li>
         
            <li><a class="dropdown-item" href="#">Other</a></li>
           
          </ul>
        </li>
  </div>
  <br />
  <div class="mb-3">
    <label >Department Head  Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>

   
   

   <div class="mb-3">
    <label > Reason</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    </div>
   

  <button type="submit" class="btn btn-primary">Delete</button>


</form>

    
</div>

    </>
    );
}
export default DeleteForm;