import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {
  function matchValues() {
    if(description) {
        const weatherDescription = description.split(' ')
        const cloudy = ['cloudy','clouds', 'cloud', 'overcast']
        const sunny = ['sun','sunny', 'clear', 'sunshine']
        const rainy = ['rain','rainy', 'raining', 'thunder']
        const snowy = ['snow','snowy', 'snowing', 'snowstorm']

        for(let i = 0; i < weatherDescription.length; i++) {
            if(cloudy.includes(weatherDescription[i])) {
              return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' alt='cloudy' />
            } else if(sunny.includes(weatherDescription[i])) {
              return <img src='https://media.freestocktextures.com/cache/d3/3d/d33dd635f50f7f28357aac7c5a5e39ba.jpg' alt='sunny' />
            } else if(rainy.includes(weatherDescription[i])) {
              return <img src='https://media.freestocktextures.com/cache/66/e6/66e642cbaff1a46036245f92b14e3a5a.jpg' alt='raining' />
            } else if(snowy.includes(weatherDescription[i])) {
              return <img src='https://media.freestocktextures.com/cache/a8/1c/a81cc4d2495074a822ace116030e5728.jpg' alt='snowing' />
            }
        }
    }
  }

  return(
    <div>
      {city && country && <p>{city}, {country}</p>}
      {temperature && <p>{temperature}  °F</p>}
      {description && <p> Conditions: {description}</p>}
      {error && <p>{error}</p>}
      {description && matchValues()}
    </div>
  )
}

export default Weather