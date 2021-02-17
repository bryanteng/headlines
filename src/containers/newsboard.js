import React, { useState, useEffect, Fragment } from 'react';
import Story from '../components/story'
import '../styles/newsboard.css'

function News(){

  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("")

  useEffect(()=>{
    const news_api_key = process.env.REACT_APP_NEWS_API_KEY
    let endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api_key}`

    if(query != "") endpoint = `https://newsapi.org/v2/everything?q=${query}&apiKey=${news_api_key}`

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      setNews(data.articles)
      setIsLoading(false)
    }).catch(error => console.log(error));
  },[isLoading])

  const handleSubmit = (event) =>{
    setIsLoading(true)
    event.preventDefault()
  }

return(
  <div className="Newsboard">
    <h1>News board</h1>
    <br/>
    <div className="Search">
      <label>Search:</label>
      <form onSubmit={handleSubmit}>
        <input value={query} placeholder="search news here" onChange={(event)=>setQuery(event.target.value)}/>
      </form>
    </div>

    {news.length == 0 ? <div>News board loading</div> :
      <Fragment>
        {news.map(paper => <Story id={paper.url} props={paper} /> )}
      </Fragment>
  }
  </div>
)

}

export default News
