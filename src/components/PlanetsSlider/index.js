// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    slidesToShow: 1,

    dots: true,
    slidesToScroll: 1,
    speed: 500,
  }

  const slider = () => (
    <Slider {...setting}>
      {planetsList.map(eachItem => (
        <PlanetItem planetDetails={eachItem} />
      ))}
    </Slider>
  )

  return <div className="bg">{slider()}</div>
}

export default PlanetsSlider
