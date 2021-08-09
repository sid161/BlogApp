 import React  from "react"
 import tagsURL from '../utils/constant';
 
 
 class Sidebar extends React.Component{
     constructor(props){
         super(props)
         this.state = {
            tags:null,
            error:""
         }
     }
     componentDidMount(){
         fetch(tagsURL).then(res => res.json())
         .then(({tags}) => {
             this.setState({
                 tags
             })
         })
         
     }
     
     render(){
         
        const {tags} = this.state
        console.log(tags);
         return(
             <>
             <section className = "tags-sec flex-20">
                        <div>
                            <h2>Tags</h2>
                            <ul class="flex wrap">
                            {!tags ? null : tags.map((tag) => {
                                return(
                                    <li className = "btn btn-sec" onClick = { () => {
                                        this.props.activeTab(tag)}}>{tag}</li>
                                )
                            } )}
                                
                                </ul>
                        </div>

                    </section>
             </>
         )
     }
 }

 export default Sidebar