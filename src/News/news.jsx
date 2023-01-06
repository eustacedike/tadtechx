import React from 'react';
import style from './news.css';

import { useRef, useEffect } from 'react';


//Images
import neww from "./assets/new.png";


function News() {


    const blogPosts = [
        { id: 1, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 2, title: "HTML, CSS and Js", preview: neww, author: "Kolade John", duration: 6 },
        { id: 3, title: "ReactJs", preview: neww, author: "John Smash", duration: 10 },
        { id: 4, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 5, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 6, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 7, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 8, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 9, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },


    ];



    const newws = useRef();

   
    var zts = -3;



    useEffect(() => {
        const autScrll = () => {

            if (newws.current.scrollWidth - newws.current.scrollLeft <= newws.current.clientWidth * 1.25) {
                newws.current.scrollLeft = 0;
                zts = -3;

            } else {
                newws.current.scrollBy(300, 0);

                zts += 17.2;
        
            }


        };
        setInterval(autScrll, 3000);
    }, []);



    return (
        <div className='news' ref={newws}>


            {blogPosts.map(eachBlog => {
                return (
                    <div key={eachBlog.id} className="news-1">
                        <img src={eachBlog.preview} alt={eachBlog.title}></img>
                        <div>
                            <span>
                                <button>{eachBlog.author}</button>
                                {`.${eachBlog.duration}min`}
                            </span>
                            <h4>{eachBlog.title}</h4>
                        </div>
                    </div>
                )
            })}


        </div>
    );

}

export default News;
