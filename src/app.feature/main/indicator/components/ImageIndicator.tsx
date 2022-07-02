import styled from '@emotion/styled'

const ImageIndicatorWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    width: 3.75rem;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`

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