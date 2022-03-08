import React from 'react'

import Dot from '../../Components/dot/Dot'

import './header.css' 

const Header = () => {
  return (
        <div className = 'skillcore__header '>
            <div className = 'skillcore__header-title'>
                <h1>Let Skillcore grow your buisness for you.</h1>
            </div>
            <div className = 'skillcore__header-content'>
                <div className = 'skillcore__header-content_text'>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
                </div>

                <div className = 'skillcore__header-content_dots'>
                    <Dot color = '#62193C' size = {20} />
                    <Dot color = '#d99431'size = {20} />
                    <Dot color = '#00DFDE' size = {20}/>
                    {/* <Dot color = '#660b1f' size = {20}/> */}
                </div>

                <div className = 'skillcore__header-content_img'>

                </div>
            </div>
        </div>
  )
}

export default Header
