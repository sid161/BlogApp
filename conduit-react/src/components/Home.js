import React from "react"
import '../styles/Home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
            {/* <header className = "header">
                <div className = "container flex center space-between">
                <strong>Blog-App</strong>
                
            <ul className = "flex header-nav">
                <li className="btn active">Home</li>
                <li className="btn active">Login</li>
                <li className="btn active">Signup</li>
            </ul>
            </div>
            </header> */}
            <main>
                <div className = "container flex wrap sec-padding">
                    <section className= "home-section flex-80">
                        <div className = "home-tags-div">
                            <ul className = "flex">
                            <li className="color-pri">
                            Personal feed
                                 </li>
                                 <li className="color-pri">
                            Global feed
                                 </li>
                            </ul>
                        </div>
                        <div className = "home-articles-div">
                            <article className ="home-article-card">
                                <div className = "article-card-header flex space-between">
                                    <a href = "#">
                                    <div className = "flex article-card-author">
                                        <img src = "" alt= "" className = "article-class-header-img"/>
                                        <div class="article-card-author">
                                            <h5>Sid</h5>
                                            <h6>Tuesday</h6>
                                            </div>
                                            <div class="article-card-likes flex center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg><span>6</span></div>
                                            <div class="article-card-body">
                                                <h3>Man of Steel</h3>
                                                <h5>2013</h5>
                                                </div>
                                                <div className = "article-card-footer flex space-between">
                                                    <div className = "flex-center">
                                                        <a className = "btn btn-pri" href = "">
                                                        <ul class="flex">
                                                            <li class="article-tags">Action</li>
                                                            <li class="article-tags">Adventure</li>
                                                            <li class="article-tags">Movie</li>
                                                            <li class="article-tags">DC</li>
                                                            </ul>

                                                        </a>
                                                    </div>
                                                </div>

                                       

                                    </div>
                                    </a>

                                </div>

                            </article>
                            <article className ="home-article-card">
                                <div className = "article-card-header flex space-between">
                                    <a href = "#">
                                    <div className = "flex article-card-author">
                                        <img src = "" alt= "" className = "article-class-header-img"/>
                                        <div class="article-card-author">
                                            <h5>Sid</h5>
                                            <h6>Tuesday</h6>
                                            </div>
                                            <div class="article-card-likes flex center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg><span>6</span></div>
                                            <div class="article-card-body">
                                                <h3>Man of Steel</h3>
                                                <h5>2013</h5>
                                                </div>
                                                <div className = "article-card-footer flex space-between">
                                                    <div className = "flex-center">
                                                        <a className = "btn btn-pri" href = "">
                                                        <ul class="flex">
                                                            <li class="article-tags">Action</li>
                                                            <li class="article-tags">Adventure</li>
                                                            <li class="article-tags">Movie</li>
                                                            <li class="article-tags">DC</li>
                                                            </ul>

                                                        </a>
                                                    </div>
                                                </div>

                                       

                                    </div>
                                    </a>

                                </div>

                            </article>
                            <article className ="home-article-card">
                                <div className = "article-card-header flex space-between">
                                    <a href = "#">
                                    <div className = "flex article-card-author">
                                        <img src = "" alt= "" className = "article-class-header-img"/>
                                        <div class="article-card-author">
                                            <h5>Sid</h5>
                                            <h6>Tuesday</h6>
                                            </div>
                                            <div class="article-card-likes flex center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg><span>6</span></div>
                                            <div class="article-card-body">
                                                <h3>Man of Steel</h3>
                                                <h5>2013</h5>
                                                </div>
                                                <div className = "article-card-footer flex space-between">
                                                    <div className = "flex-center">
                                                        <a className = "btn btn-pri" href = "">
                                                        <ul class="flex">
                                                            <li class="article-tags">Action</li>
                                                            <li class="article-tags">Adventure</li>
                                                            <li class="article-tags">Movie</li>
                                                            <li class="article-tags">DC</li>
                                                            </ul>

                                                        </a>
                                                    </div>
                                                </div>

                                       

                                    </div>
                                    </a>

                                </div>

                            </article>
                            <article className ="home-article-card">
                                <div className = "article-card-header flex space-between">
                                    <a href = "#">
                                    <div className = "flex article-card-author">
                                        <img src = "" alt= "" className = "article-class-header-img"/>
                                        <div class="article-card-author">
                                            <h5>Sid</h5>
                                            <h6>Tuesday</h6>
                                            </div>
                                            <div class="article-card-likes flex center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg><span>6</span></div>
                                            <div class="article-card-body">
                                                <h3>Man of Steel</h3>
                                                <h5>2013</h5>
                                                </div>
                                                <div className = "article-card-footer flex space-between">
                                                    <div className = "flex-center">
                                                        <a className = "btn btn-pri" href = "">
                                                        <ul class="flex">
                                                            <li class="article-tags">Action</li>
                                                            <li class="article-tags">Adventure</li>
                                                            <li class="article-tags">Movie</li>
                                                            <li class="article-tags">DC</li>
                                                            </ul>

                                                        </a>
                                                    </div>
                                                </div>

                                       

                                    </div>
                                    </a>

                                </div>

                            </article>
                        </div>

                    </section>
                    <section className = "tags-sec flex-20">
                        <div>
                            <h2>Tags</h2>
                            <ul class="flex wrap">
                                <li><a href="#" class="btn btn-sec">Action</a></li>
                                <li><a href="#" class="btn btn-sec">Adventure</a></li>
                                <li><a href="#" class="btn btn-sec">Movie</a></li>
                                <li><a href="#" class="btn btn-sec">DC</a></li>
                                <li><a href="#" class="btn btn-sec">Sci-fi</a></li>
                                <li><a href="#" class="btn btn-sec">Marvel</a></li>
                                <li><a href="#" class="btn btn-sec">asdad</a></li>
                                <li><a href="#" class="btn btn-sec">asdadad</a></li>
                                <li><a href="#" class="btn btn-sec">asdasd</a></li>
                                </ul>
                        </div>

                    </section>

                </div>
            </main>
            </>
        )
    }
}

export default Home