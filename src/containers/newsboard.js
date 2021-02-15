import React, { useState, useEffect } from 'react';

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
  <div>
    News board
    {isLoading ? "News board loading" :
    <ul>
    {news.map(paper => <li> {paper.title} </li>)}
    </ul>

  }
  </div>
)

}

export default News
