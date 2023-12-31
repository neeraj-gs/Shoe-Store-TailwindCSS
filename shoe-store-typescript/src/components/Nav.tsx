import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

const Nav:React.FC = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'> 
            <a href="/">
                <img src="/shoe-shop.png" alt="header-logo"  width={130} height={29}/>
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((i)=>{
                return (
                  <li key={i.label}>
                    <a href={i.href} className='font-montserrat leading-normal text-lg text-black underline'>{i.label}</a>
                  </li>
                )
                })
              }
            </ul>
            <div className='hidden max-lg:block'>
              <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav