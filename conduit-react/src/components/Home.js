import React from "react"
import '../styles/Home.css'
import Sidebar from "./Sidebar"
import Posts from './Posts'
import Pagination from './Pagination';
import { articlesURL } from "../utils/constant";
import FeedNav from "./FeedNav";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                articles:null,
                error:"",
                articlesCount:0,
                articlesPerPage:10,
                activePage:1,
                activeTab:"",
            }
        }


        emptyTab = () => {
            this.setState({
                activeTab:''
            })
        }

        addTab = (value) => {
            this.setState({
                activeTab:value
            })
        }
            componentDidMount(){
                fetch(articlesURL + `/?limit=${this.state.articlesPerPage}`).then(res => {
                    if(!res.ok){
                        throw new Error(res.statusText);
                    } return res.json()
                })
                .then(data => this.setState({
                    articles: data.articles,
                    articlesCount: data.articlesCount
                }))
                .catch(err => {
                   this.setState({
                       error:"Cannot fetch data"
                   })
                })
            }

            fetchData = () => {
                fetch(articlesURL + `/?limit=${this.state.articlesPerPage}`).then(res => {
                    if(!res.ok){
                        throw new Error(res.statusText);
                    } return res.json()
                })
                .then(data => this.setState({
                    articles: data.articles,
                    articlesCount: data.articlesCount
                }))
                .catch(err => {
                   this.setState({
                       error:"Cannot fetch data"
                   })
                })

                
            }
            
    

    render(){
        const {articles, articlesCount,articlesPerPage,activePage} = this.state
        return(
            <>
          
            <main>
                <div className = "container flex wrap sec-padding">
                    <FeedNav activeTab = {this.state.activeTab} emptyTab = {this.emptyTab}/>
                    <Posts articles = {articles}/>
                   <Sidebar activeTab = {this.activeTab}/>
                   <Pagination articlesCount =  {articlesCount} articlesPerPage = {articlesPerPage} activePage = {activePage}/>

                </div>
            </main>
            </>
        )
    }
}

export default Home