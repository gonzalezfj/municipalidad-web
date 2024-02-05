export const Banner = ({ homeData }) => {
  return (
    <div className='h-[60vh] w-full bg-secondary overflow-hidden relative'>
      {homeData &&
        <video className='hidden lg:block object-cover w-full h-full absolute bottom-0' autoPlay loop muted>
          <source src={'https://0pd31rwn-3000.brs.devtunnels.ms' + homeData?.BannerVideo.data.attributes.url} type='video/mp4' />
        </video>}
      <img src={'https://0pd31rwn-3000.brs.devtunnels.ms' + homeData?.BannerImagen.data.attributes.url} className='object-cover md:object-cover h-full w-full lg:hidden' />
    </div>
  )
}
