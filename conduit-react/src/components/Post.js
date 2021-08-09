

import React from 'react';
import FeedNav from './FeedNav';
import {Link} from 'react-router-dom'



function Post (props){
    const {author,title,description,slug} = props;
        return(
            <>
            <section className= "home-section flex-80">
                       <FeedNav/>
                        <div className = "home-articles-div">
                            <article className ="home-article-card">
                                <div className = "article-card-header flex space-between">
                                    <a href = "#">
                                    <div className = "flex article-card-author">
                                        <img src = {author.image} alt= {author.username} className = "article-class-header-img"/>
                                        <div class="article-card-author">
                                            <h5>{author.username}</h5>
                                            <h6>Tuesday</h6>
                                            </div>
                                            <div class="article-card-likes flex center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg><span>6</span></div>
                                            <div class="article-card-body">
                                                <h3>Man of Steel</h3>
                                                <h5>2013</h5>
                                                </div>
                                                <div className = "article-card-footer flex space-between">
                                                    <div className = "flex-center">
                                                       <Link to = {`/article/${slug}`}>
                                                           <div className = "post-body">
                                                               <h2 className = "post-title">{title}</h2>
                                                               <p className = "post-body"> {description}</p>
                                                               <p></p>
                                                           </div>
                                                       </Link>
                                                       <link className = "post-body" to = {`/article/:slug`}>
                                                           Read More
                                                       </link>
                                                        <ul class="flex">
                                                            <li class="article-tags">Action</li>
                                                            <li class="article-tags">Adventure</li>
                                                            <li class="article-tags">Movie</li>
                                                            <li class="article-tags">DC</li>
                                                            </ul>

                                                       
                                                    </div>
                                                </div>

                                       

                                    </div>
                                    </a>

                                </div>

                            </article>
                            
                        </div>

                    </section>

            </>
        )
    }




 export default Post