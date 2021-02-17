import React, { useState } from 'react'

function Story({props}){
  const {author, content, description, publishedAt, source, title, url, urlToImage} = props

  return(
    <div class="story">
      {title}
    </div>
  )
}

export  default Story
