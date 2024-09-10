import Tabile from "../Share/Tabile/Tabile";

const Transactions = () => {

    return (
        <div className='bg-[#FDFDFD]  mt-4' >
        <section className=' grid lg:grid-cols-2 grid-cols-1 gap-3 mx-7 items-center justify-between' > 
         <div>
          <h1 className=' text-[#333333] font-bold text-[18px]' > Transactions </h1>
         </div>
      
         <div>
          <input className=' w-[365px] h-[40px] rounded-lg border-2 px-2 border-[#00000040]' placeholder='🔎 Search Date & menu' type="search" name="" id="" />
         </div>
     </section>


     <section>

      {/* table */}

      <Tabile/>

     </section>

        </div>
    );
};

export default Transactions;