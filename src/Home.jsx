import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';

const Home = () => {
    return (
        <div className='home'>
            
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='/'>About</Link>
                    <Link to='/'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='/'>Gmail</Link>
                    <Link to='/'>Images</Link>
                    <AppsIcon className='icon icon--hover'/>
                    <Avatar className='icon'/>
                </div>
            </div>

            <div className="home__body">
                <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />
                <div className="home__inputContainer">
                  <Search  />
                </div>

            </div>
        </div>
    );
}

export default Home;
