import { FaBookReader } from "react-icons/fa";

type Props = {};

const Logo = (props: Props) => {
      return (
            <div className='flex items-center gap-1'>
                  <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                        <FaBookReader className='text-white' />
                  </div>
                  <p className='mb-0! text-sm font-semibold flex flex-col'>
                        Learn Book
                        <span className='text-blue-500 text-[10px]'>Học xong phải nhớ!</span>
                  </p>
            </div>
      );
};

export default Logo;
