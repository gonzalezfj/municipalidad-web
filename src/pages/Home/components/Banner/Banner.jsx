const Banner = ({ videoUrl, imageFallbackUrl }) => {
  return (
    <div className='h-[60vh] w-full bg-secondary overflow-hidden relative'>
      <video
        className='hidden lg:block object-cover w-full h-full absolute bottom-0'
        autoPlay
        loop
        muted
      >
        {videoUrl && <source src={import.meta.env.VITE_STRAPI_URL + videoUrl} type='video/mp4' />}
      </video>
      {imageFallbackUrl &&
        (
          <img
            src={import.meta.env.VITE_STRAPI_URL + imageFallbackUrl}
            className='object-cover md:object-cover h-full w-full lg:hidden'
          />
        )}
    </div>
  )
}

export default Banner
