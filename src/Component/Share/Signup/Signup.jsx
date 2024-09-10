import bg from '../../../../public/photo/loginBG.png'
import log from '../../../../public/photo/foodLog.png'
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Signup = () => {
         // show password
  const [showPassword, setShowPassword] = useState(false)
   
  const {createUser, updateUserProfile} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const address = form.address.value
    const contact = form.contact.value
    const password = form.password.value
   
    try{
      // console.log(name,email, password, image);

    // //  user create
    const result = await createUser(email,password)
    // // save user name and photo url
     await updateUserProfile(name)
      navigate('/')
       toast.success(' Sign Up Successfully ')
     } 
     
     catch(err){
      toast.error(err?.message)

        }
   
    }



    return (
        <div>
           <div
           className='bg-cover'
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
      <h1 className="text-3xl text-center font-bold">Sign up </h1>
       
      <div className="form-control">
          <label className="label">
            <span className="label-text"> User Name </span>
          </label>
          <input type="text" 
           placeholder="User Name...." 
           name="name"
          
           className="input input-bordered" 
           required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
           placeholder="Email...." 
           name="email"
          defaultValue={'@gmail.com'}
           className="input input-bordered" 
           required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text"> Contact no </span>
          </label>
          <input type="text" 
           defaultValue={'01763943446'} 
           name="contact"
          
           className="input input-bordered" 
           required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text"> Permanent Address </span>
          </label>
          <input type="text" 
           defaultValue={'Dhaka Mirpur-1'}
           name="address"
          
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
         
           <input className="btn font-bold btn-primary" type="submit" value="Sign up" />
        </div>

        <h1 className=' text-center' > have any account? <span className=' text-[#FDB64E]' > <Link to={'/login'} > Sign in </Link> </span> </h1>
      </form>
            </div>
          </section>
        
        </div>
        </div>
    );
};

export default Signup;