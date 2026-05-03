function RegistrationPart1()
{
    return(
    <>
 <div className="position-relative" style={{ height: "700px" }}>

     
        <div className="position-absolute top-50 start-50 translate-middle">
          

      <form>
<div>
  <label htmlFor=""> Registration</label>
</div>
  <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Full Name</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter Your Full Name"/>

   </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">CNIC</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter CNIC Without Dashes"/>

   </div>
   <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Date of Birth</label><br />
    <input type="date" />

   </div>

  <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Gender</label><br />
     <label for="exampleInputEmail1" class="form-label">Male</label>
         <input type="radio"  />
    <label for="exampleInputEmail1" class="form-label">Female</label>
     <input type="radio" />

  </div>

   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Phone Number</label>
     <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Enter Your Phone Number"/>
   </div>

   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Email Address</label>
     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Email Address"/>
   </div>

   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Upload Picture</label><br />
     <input type="file"/>
   </div>

   <div class="mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button type="submit" class="btn btn-primary">Next</button>
 </form>
   
          </div>
          </div> 
    </>
    );
}
export default RegistrationPart1;
