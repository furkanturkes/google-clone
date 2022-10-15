import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


export default function({ hideButtons = false}) {
  const [{}, dispatch] = useStateValue()


  const [input, setInput] = useState('')
  const navigate  = useNavigate();

  const search = e => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search')

  }
  

  return (
    <form className='search'>
      <div className="search__input">
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon className='disabled' />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
        <Button
         type='submit' 
         onClick={search} 
         variant='outlined'>Google Search</Button>
        <Button 
        variant='outlined'>I'm feeling very Lucky</Button>
      </div>
      ) : (
        <div className="search__buttons">
        <Button
         className='search__buttonsHidden'
         type='submit'
         onClick={search}
         variant='outlined'>Google Search</Button>
        <Button
        className='search__buttonsHidden'
        variant='outlined'>I'm feeling very Lucky</Button>
      </div>
      )
      }

      
    </form>

  )
}

