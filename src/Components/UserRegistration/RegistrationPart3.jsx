function RegistrationPart3()
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
    <label >Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Password"/>
    
  </div>
 <div class="mb-3">
    <label >Confirmed Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Re Enter Your Password"/>
    
  </div>

  

  
  
  <button type="submit" class="btn btn-primary">Next</button>
</form>

        </div>
        
      </div>  



    </>
    );
}
export default RegistrationPart3;
