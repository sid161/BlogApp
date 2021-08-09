
import React from 'react'
import { articlesURL } from '../utils/constant'
import Loader from './Loader'
import Post from './Post'


function Posts (props){

        const {articles} = props;
        if(!articles){
            return (
                <Loader/>
            )

        } else{

            return articles.map((article) => <Post {...article}/>)  // passing of article to post component
            }
               
        }
       



export default Posts