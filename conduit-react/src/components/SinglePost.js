
import React  from 'react';
import {Link} from 'react-router-dom'
import { articlesURL } from '../utils/constant';
import {withRouter} from 'react-router-dom'

  class SinglePost extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              article:null,
              error:""
          }
      }

      componentDidMount(){
          let slug = this.props.match.params.slug
        fetch(articlesURL + "/" + slug).then(res => {
            if(!res.ok){
                throw new Error(res.statusText);
            } return res.json()
        })
        .then(data => this.setState({
            article: data.article,
            error:'',
            
        }))
        .catch(err => {
           this.setState({
               error:"Cannot fetch data"
           })
        })
    }

    render(){
        const {article,error} = this.state;
        if(error){
            return <p>{error}</p>
        }
        if(!article){
            return <loader/>
        }
        return(
            <article className = "single-post">
                <header className = "post-banner padding">
                    <div className = "md-wrapper">
                        <h1 className = "post-title">
                       {article.title}
                        </h1>
                        <div className = "flex center">
                            <link to = "/profile">
                                <img className = "author-img"
                                src = "/images/smiley.jpg"
                                alt = "Smiley"
                                />
                            </link>
                        </div>
                        <div className = "post-details">
                            <link to = "/profile">
                                <p className = "post-author">{article.author.username}</p>
                                
                            </link>
                            <p>{article.body}</p>
                        </div>
                        <Link to= "/login">Login</Link>
                        <link to = "/signup">Signup</link> to add comments on this article
    
                    </div>
                </header>
            </article>
        )
    }
}


export default withRouter(SinglePost) 