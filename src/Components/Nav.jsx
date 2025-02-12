import hamburger from "../assets/icons/hamburger.svg";
import headerLogo  from "../assets/images/headerLogo.svg";
import { navLinks } from "../Constants";
const Nav = () => {
  return (
    <header className='padding-x py absolute z-10 w-full mt-5'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/"><img src={headerLogo} alt="logo" className='m-0 lg:ml-60 mb-3 w-[140px] h-[40px]' /></a>
            <ul className='flex-1 flex justify-end ml-auto gap-15 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-md text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='ml-10 flex gap-4 text-md leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="border border-black px-8 py-3 rounded-lg hover:bg-gray-200 hover:text-black">FIND A SERVICE</a>
          
          <a href='/' className="border border-black bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white">REGISTER AS ARTISAN</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        </nav>
    </header>
  )
}

export default Nav