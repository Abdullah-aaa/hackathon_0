import { AvatarLogo } from "./Avatar";


export default function Header() {
  return (
    <div>
          <div className='bg-gray-500 border-b'>
        <div className='flex items-center h-16 px-4 font-bold text-xl'>
        PanaTech
        <div className=' ml-auto flex items-center space-x-4 '><AvatarLogo/></div>
        </div>
        </div>

    </div>
  )
}
