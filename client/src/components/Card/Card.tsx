import React from 'react'

interface Props{
    data: any;
}
const Card: React.FC<Props> = ({data}) => {
  return (
    <div>
        <img loading='lazy' src={data.urls.raw} alt="" />
    </div>
  )
}

export default Card