import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AUthProvider";


const Register = () => {

const {createUser,signInGoogle} = useContext(AuthContext)
const navigate = useNavigate()
const handleLogin = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)

    // create user in firebase 
    createUser(email,password)
.then( result =>{
  const register = result.user;
  console.log(register)
})
.catch(error => console.log(error))
}

const handleGoogle =()=>{
  signInGoogle()
  .then(res =>{ 
    console.log(res.user)
    navigate('/')
  })
  .catch(error => console.log(error))
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Already have an account? <Link className="text-indigo-600 underline" to='/login'>Please Login</Link></p>
          </div>
          <button onClick={handleGoogle} className="btn btn-primary">Google</button>
        </div>
      </div>
    );
};

export default Register;