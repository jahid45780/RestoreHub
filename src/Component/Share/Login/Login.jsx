import bg from '../../../../public/photo/loginBG.png'
import log from '../../../../public/photo/foodLog.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
      // show password
  const [showPassword, setShowPassword] = useState(false)

  const {signIn} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from.pathname || '/' 

    // form submit handler
    const handleSubmit = async event =>{

      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value
      
      
      try{
      
      //  user login
      const result = await signIn(email,password)
       navigate(from,{replace:true} )
       toast.success(' Login Successfully ')
       } catch(err){
        toast.error(err?.message)
       }
     
      }


    return (
        <div className=' bg-cover'
        style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          
          <section className=' grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-2' >
            <div>
          <img src={log} alt="" />
            </div>
           
            <div className='bg-white w-[400px] rounded-lg' >
           
            <form
              onSubmit={handleSubmit}
            className="card-body   ">
      <h1 className="text-3xl text-center font-bold"> Sign in to your account </h1>
        
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
           placeholder="email" 
           name="email"
          
           className="input input-bordered" 
           required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type= {  showPassword ? "text" : "password"}
          placeholder="password" name="password" 
          className="input  input-bordered" required />
            <span className=" relative -mt-10 ml-72 text-3xl" onClick={() => setShowPassword(!showPassword) } > 
            
             {
              showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
             }
            
             </span>
          <label className="label mt-6">
          <div className="form-control">
  <label className="label cursor-pointer">
  <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
    <span className="label-text px-2">Remember me</span>
   
  </label>
</div>
            <a  href="#" className="label-text-alt text-red-600 link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Login" />
        </div>

        <h1 className=' text-center' > Don’t have any account? <span className=' text-[#FDB64E]' > <Link to={'/signup'} > Sign up </Link> </span> </h1>
      </form>
            </div>
          </section>
        
        </div>
    );
};

export default Login;