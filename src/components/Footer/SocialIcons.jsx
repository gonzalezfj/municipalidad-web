import iconFacebook from '../../assets/home_footer_iconoFacebook.svg'
import iconTwitter from '../../assets/home_footer_iconoTwitter.svg'
import iconInstagram from '../../assets/home_footer_iconoInstagram.svg'
import iconYoutube from '../../assets/home_footer_iconoYoutube.svg'

const SocialIcons = () => {
  return (
    <div className='flex justify-between items-center md:px-64 sm:px-12 lg:h-5 lg:px-15 px-24 py-3'>
      <svg className='h-12 w-12'>
        <image className='h-12' href={iconFacebook} />
      </svg>
      <svg className='h-12 w-12'>
        <image className='h-12' href={iconTwitter} />
      </svg>
      <svg className='h-12 w-12'>
        <image className='h-12' href={iconInstagram} />
      </svg>
      <svg className='h-12 w-12'>
        <image className='h-12' href={iconYoutube} />
      </svg>
    </div>
  )
}
export default SocialIcons
