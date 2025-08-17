import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjk3MTdmMDgxYzU3NTEwZWVjNjQyODY2YWY2YmEyMCIsIm5iZiI6MTc1NTI5MDAxNi44MzYsInN1YiI6IjY4OWY5OWEwY2FkOWQ4ZTBkYWE0NDhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dsO5Xp3fDqedKIz7Yd_eqBUS1ft0sjPFjjhutxjTYAg'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
        .then(res => res.json())
        .then(res => setApiData(res?.results[0]))
        .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={() => {navigate(-2)}} alt="" />
      
      <iframe title='trailer' frameBorder="0" allowFullScreen 
      src={`https://www.youtube.com/embed/${apiData?.key}`} 
      width="100%" 
      height="90%"></iframe>

      <div className="player-info">
        <p> { apiData?.published_at?.slice(0,10) } </p>
        <p>{ apiData?.name }</p>
        <p>{ apiData?.type }</p>
      </div>
    </div>
  )
}

export default Player
