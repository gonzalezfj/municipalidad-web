export const Banner = ({ homeData }) => {
  return (
    <div className='h-[60vh] w-full bg-secondary overflow-hidden relative'>
      {homeData &&
        <video className='hidden lg:block object-cover w-full h-full absolute bottom-0' autoPlay loop muted>
          <source src={import.meta.env.VITE_STRAPI_URL + homeData?.BannerVideo.data.attributes.url} type='video/mp4' />
        </video>}
      <img src={import.meta.env.VITE_STRAPI_URL + homeData?.BannerImagen.data.attributes.url} className='object-cover md:object-cover h-full w-full lg:hidden' />
    </div>
  )
}
