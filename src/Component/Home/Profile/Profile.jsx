import prof from '../../../../public/photo/profile.png'
import useAuth from '../../hooks/useAuth';
const Profile = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <section className=' bg-[#F9F9F9] max-w-6xl mx-auto mt-12 lg:w-[841px] lg:h-[260px] py-7' >
                <img className=' mx-auto ' src={prof} alt="" />
                <h1 className=' text-center font-bold text-2xl mt-5' > {user?.displayName} </h1>
                <h1 className=' text-center font-bold text-2xl mt-5' > {user?.email} </h1>
            </section>
               
               <section className=' flex items-center justify-center gap-[33px] mt-7' >
                <button className='text-[#FDB64E] font-semibold underline ' > Edit Profile</button> 
                <button className='text-[#7E7E7E] font-semibold text-[16px]' > Order history </button>
                <button className='text-[#7E7E7E] font-semibold text-[16px]' > Change Password </button>
               </section>


               <section className='bg-[#F9F9F9] max-w-6xl mx-auto mt-7 lg:w-[841px]  py-7 ' >
                <p className='text-[#333333] text-[24px] font-bold text-center' > Edit Your Profile </p>
                 {/* form profile */}
                 <section className=' lg:mx-48' >
                    <form>
                        <div>
                            <label className='text-[#636363] text-[16px]' htmlFor="name"> User Name </label> <br />
                            <input defaultValue={user?.displayName} className=' px-3 mt-2 border-2 lg:w-[441px] w-[350px] rounded-md h-[50px] border-[#D6D6D6]' type="text" name="name" />
                        </div>

                        <div className='mt-3' >
                            <label className='text-[#636363] text-[16px]' htmlFor="name">  Email </label> <br />
                            <input defaultValue={user?.email} className=' px-3 mt-2 border-2 lg:w-[441px] w-[350px] rounded-md h-[50px] border-[#D6D6D6]' type="text" name="name" />
                        </div>

                        <div className='mt-3' >
                            <label className='text-[#636363] text-[16px]' htmlFor="name">  Contact no </label> <br />
                            <input defaultValue={'+8801'} className=' px-3 mt-2 border-2 lg:w-[441px] w-[350px] rounded-md h-[50px] border-[#D6D6D6]' type="text" name="name" />
                        </div>

                        <div className='mt-3' >
                            <label className='text-[#636363] text-[16px]' htmlFor="name">  Address </label> <br />
                            <input defaultValue={'Pakistan'} className=' px-3 mt-2 border-2 lg:w-[441px] w-[350px] rounded-md h-[50px] border-[#D6D6D6]' type="text" name="name" />
                        </div>

                        <div className=' flex justify-center items-center' > <button className=' btn bg-[#6EA963] rounded-lg   mt-6 text-white' > Save & Change </button> </div>
                    </form>
                 </section>

               </section>

        </div>
    );
};

export default Profile;