import ContentLoader from 'react-content-loader'

const BannerPlaceholder = () => {
  return (
    <ContentLoader speed={2} width='100%' height='60vh' viewBox='0 0 100% 60vh' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='60vh' />
    </ContentLoader>
  )
}

export default BannerPlaceholder
