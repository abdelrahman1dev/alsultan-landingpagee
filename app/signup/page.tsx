import Image from "next/image"
import Link from "next/link"

function page() {
  return (
    <section className='w-full min-h-screen flex flex-row gap-10 lg:gap-20 p-5 items-center justify-center '>
        <div className='left-sec w-full bg-[#1C1C18] p-6 rounded-lg shadow-sm shadow-[#e6d3a3] border-2 border-[#e6d3a3] gap-10 flex flex-col  '>
            <h1 className='text-4xl text-center font-bold text-[#e6d3a3]'>إنشاء حساب</h1>
            <form action="/signup" method="POST" className='w-full'>  
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-[#e6d3a3] mb-2'>البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" required className='bg-[#1C1C18] w-full outline-none text-[#e6d3a3] placeholder:text-[#e6d3a3] border-2 border-[#e6d3a3] p-2' placeholder='البريد الإلكتروني'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-[#e6d3a3] mb-2'>الاسم الكامل</label>
                    <input type="text" id="name" name="name" required className='bg-[#1C1C18] w-full outline-none text-[#e6d3a3] placeholder:text-[#e6d3a3] border-2 border-[#e6d3a3] p-2' placeholder='الاسم الكامل'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-[#e6d3a3] mb-2'>كلمة المرور</label>
                    <input type="password" id="password" name="password" required minLength={6} className='bg-[#1C1C18] w-full outline-none text-[#e6d3a3] placeholder:text-[#e6d3a3] border-2 border-[#e6d3a3] p-2' placeholder='كلمة المرور (6 أحرف على الأقل)'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="confirmPassword" className='block text-[#e6d3a3] mb-2'>تأكيد كلمة المرور</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required className='bg-[#1C1C18] w-full outline-none text-[#e6d3a3] placeholder:text-[#e6d3a3] border-2 border-[#e6d3a3] p-2' placeholder='تأكيد كلمة المرور'/>
                </div>
                <button type="submit" className='bg-[#e6d3a3] w-full text-[#1C1C18] font-bold py-2 px-4 rounded-lg hover:bg-[#d4c090] transition duration-200'>
                    إنشاء الحساب
                </button>
                <span className='text-sm text-[#e6d3a3] mt-4 block'>لديك حساب؟ <Link href="/login" className='text-[#e6d3a3] underline'>تسجيل الدخول</Link></span>  
            </form> 
        </div> 
        <div className='right-sec w-full hidden lg:block'>
                <Image src="https://ytgu3s3xxa.ufs.sh/f/GNGTKtuqz7dpbQdjvm3StHrnFYB8615RChWXca7kgdwl0OMi" alt="Signup Image" width={800} height={800} className='w-full h-auto ' />
        </div>
    </section>
  )
}

export default page
