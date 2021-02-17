import React, { useState, useEffect } from 'react'

function Story({props}){
  const {author, content, description, publishedAt, source, title, url, urlToImage} = props

  const [showContent, setShowContent] = useState(false)

  const handleTitleClick = () =>{
    var win = window.open(url, '_blank');
    win.focus();
  }

  const handleStoryClick = () => {
    setShowContent(current => !current)
  }


  return(
    <div className="story" onClick={handleStoryClick} >
      <h1 className="storyTitle" onClick={handleTitleClick}>{title}</h1>

      {author && author.length > 0  ? <div className="storyAuthor">by:{author}</div> : null }
      {source.name && source.name.length > 0  ? <div className="storySource">Source:{source.name}</div> : null }

      <div className="storyPublishedAt">date: {publishedAt}</div>
      <div className="storyDescription">description: {description}</div>
      {showContent ? <p>{content}</p> : null}
    </div>
  )
}

export  default Story
