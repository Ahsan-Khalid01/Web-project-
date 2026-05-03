function UserLogin(){
    return(
    <>
        <div className="position-absolute top-50 start-50 translate-middle">
          <form>
            <div>
              <label htmlFor="">Login</label>
            </div><br />
  <div class="mb-3">
    <label >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address"/>
    
  </div>
  <div class="mb-3">
    <label >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Enter Your Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>
        
      
    </>
    );
}
export default UserLogin;