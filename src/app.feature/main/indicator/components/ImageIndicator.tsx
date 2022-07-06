import { ImageIndicatorWrapper } from '../styles/ImageIndicatorStyle'

type ImageIndicatorProps = {
  imagePath: string
  alt: string
  place: string
  prize: string
}

const ImageIndicator = ({ imagePath, alt, place, prize }: ImageIndicatorProps) => {
  return (
    <ImageIndicatorWrapper>
      <img src={imagePath} alt={alt} />
      <div className='text-container'>
        <p>{place}</p>
        <p>{prize}</p>
      </div>
    </ImageIndicatorWrapper>
  )
}

export default ImageIndicator