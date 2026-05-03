function AddDepartment()
{
    return (
    <>

      <div className="position-absolute top-50 start-50 translate-middle">
          <form>
            <div>
              <label htmlFor="">Add New Department</label>
            </div><br />
  <div class="mb-3">
    <label >Department Name</label>
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
    <label >Official Phone Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>

   <div class="mb-3">
    <label >Emergency Phone Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>
   

   <div class="mb-3">
    <label > Login ID</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
   </div>
    <div class="mb-3">
    <label > Temporary Password</label><br />
    <input type="password"/>
   </div>

  <button type="submit" class="btn btn-primary">Add Department</button>


</form>

    
</div>

    </>
    );
}
export default AddDepartment;