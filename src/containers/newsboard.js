import React, { useState, useEffect, Fragment } from 'react';
import Story from '../components/story'
import '../styles/newsboard.css'

function News(){

  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const news_api_key = process.env.REACT_APP_NEWS_API_KEY
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api_key}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setNews(data.articles)
      setIsLoading(false)
      console.log(news,"the news")
    }).catch(error => console.log(error));
  },[isLoading])


return(
  <div className="Newsboard">
    News board
    {isLoading ? <div>News board loading</div> :
      <Fragment class="Newsboard">
        {news.map(paper => <Story id={paper.url} props={paper} /> )}
      </Fragment>
  }
  </div>
)

}

export default News
