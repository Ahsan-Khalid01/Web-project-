function RegistrationPart2()
{
    return(
    <>
    <div className="position-relative" style={{ height: "700px" }}>

     
        <div className="position-absolute top-50 start-50 translate-middle">
          <form>
            <div>
              <label htmlFor="">Registration</label>
            </div><br />
  <div class="mb-3">
    <label >City</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your City Name"/>
    
  </div>
 <div class="mb-3">
    <label >Area/Locality</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Area"/>
    
  </div>

   <div class="mb-3">
    <label >Street Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Street No"/>
    
  </div>

  <div class="mb-3">
    <label >Postal Code</label>
    <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Enter Your City Postal code"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Next</button>
</form>

        </div>
        
      </div> 
    </>
    );
}
export default RegistrationPart2;
