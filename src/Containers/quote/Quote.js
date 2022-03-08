import React from 'react'

import Dot from '../../Components/dot/Dot'

import './quote.css'

const Quote = ({text}) => {
  return (
      <div className = 'skillcore__quote'>
          <h1>"There are no straight lines in nature or buisness."</h1>
          <p>-Verne Harnish</p>
          <div className = 'skillcore__quote-dots'>
              <Dot color = '#99280E' />
              <Dot color = '#2ABB82' />
              <Dot color = '#00DFDE' />
              <Dot color = '#532A52' />
          </div>
      </div>
  )
}

export default Quote
