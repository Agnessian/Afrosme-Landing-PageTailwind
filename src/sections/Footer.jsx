import { footerLinks, socialMedia } from "../Constants";
import headerLogo from '../assets/images/headerLogo.svg'
import copyrightsign from "../assets/icons/copyright-sign.svg";
const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-center gap-20 flex-wrap max-lg:flex-col text-white'>
        <div className='flex flex-1 justify-between lg:gap-10 m-10 lg:pl-50 lg:pr-50 gap-40 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='leading-normal'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='text-base leading-normal text-white-400 hover:text-sky-200'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                  
                </ul>
              </div>
                  ))}
                <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
                  <div className='flex flex-col items-start'>
                    <a href='/'>
                      <img
                        src={headerLogo}
                        alt='logo'
                        width={120}
                        height={36}
                        className='m-0'
                      />
                    </a>
                    <a href="mailto:info@afrosme.uk" class="mt-2 hover:underline">info@afrosme.uk</a> 
                    <div className='flex items-center gap-5 mt-4'>
                      {socialMedia.map((icon) => (
                        <div
                          className='flex justify-center items-center w-10 h-10 bg-white rounded-full'
                          key={icon.alt}
                        >
                          <img src={icon.src} alt={icon.alt} width={20} height={20} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
        </div>
      </div>
        <div className='text-white flex justify-center  gap-2 cursor-pointer'>
          <p>Copyright</p>
          <img
            src={copyrightsign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>2024 Afrosme</p>
        </div>
      
    </footer>
  )
}
export default Footer