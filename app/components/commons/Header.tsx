import Link from 'next/link'
import Logo from '../Logo'

type Props = {}

const Header = (props: Props) => {
      return (
            <div className='fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.7)] px-[72px] py-2 flex items-center justify-between'>
                  <Logo />
                  <ul className='flex gap-8 mb-0! ml-20'>
                        <li>
                              <Link href="/">Trang chỉ</Link>
                        </li>
                        <li>
                              <Link href="/about">Giới thiệu</Link>
                        </li>
                        <li>
                              <Link href="/contact">Liên hệ</Link>
                        </li>
                  </ul>
                  <div className='flex gap-4'>
                        <button className='bg-gradient-to-br from-blue-500 to-purple-600 text-white! px-4 py-2 rounded-md'>
                              Login
                        </button>
                        <button className='bg-gradient-to-br from-blue-500 to-purple-600 text-white! px-4 py-2 rounded-md'>
                              Sign Up
                        </button>
                  </div>
            </div>
      )
}

export default Header