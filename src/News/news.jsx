import React from 'react';
import style from './news.css';


//Images
import neww from "./assets/new.png";


function News() {


    const blogPosts = [
        { id: 1, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
        { id: 2, title: "HTML, CSS and Js", preview: neww, author: "Kolade John", duration: 6 },
        { id: 3, title: "ReactJs", preview: neww, author: "John Smash", duration: 10 },
        { id: 4, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },


    ];

    return (
        <div className='news'>


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
