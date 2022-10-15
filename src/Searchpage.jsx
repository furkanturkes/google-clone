import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import SearchIcon from '@mui/icons-material/Search';
import { Image, LocalOffer, MoreVert, Room } from '@mui/icons-material'
import DescriptionIcon from '@mui/icons-material/Description';
import Response from './Response'

export default function Searchpage() {
  const [{term} , dispatch] = useStateValue()
  
  const {data} = useGoogleSearch(term)


  console.log(data)
  return (
    <div className='searchPage'>
        <div className="searchPage__header">
            <Link to='/'>
                <img 
                className='searchPage__logo'
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </Link>

            <div className="searchPage__headerBody">
                <Search hideButtons></Search>
                <div className="searchPage__options">
                   <div className="searchPage__optionsLeft">
                        <div className="searchPage__option">
                            <SearchIcon />
                            <Link to='/all'>All</Link>
                        </div>
                         <div className="searchPage__option">
                            <DescriptionIcon />
                            <Link to='/News'>News</Link>
                        </div>
                         <div className="searchPage__option">
                            <Image />
                            <Link to='/images'>Images</Link>
                        </div>
                         <div className="searchPage__option">
                            <LocalOffer />
                            <Link to='/shopping'>Shopping</Link>
                         </div>
                        <div className="searchPage__option">
                            <Room />
                            <Link to='/map'>Map</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVert />
                            <Link to='/more'>More</Link>
                        </div>
                        
                    </div>

                    <div className="searchPage__optionsRight">
                         <div className="searchPage__option">
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {term && (
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                 About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

                {data?.items.map(item => (
                    <div className="searchPage__result">
                        <a className='item__link--color' href={item.link}>

                        {item.displayLink} 
                        </a>
                         <a 
                         className='searchPage__resultTitle'
                         href={item.link}>
                          <h2>{item.title}</h2>
                         </a>
                         <p className="searchPage__resultSnippet">
                            {item.snippet}
                         </p>
                    </div>
                ))}
            </div>
        )}
    
    </div>
  )
}
 

// https:developers.google.com/custom-search/v1/using_rest

//https://cse.google.com/cse/create/new