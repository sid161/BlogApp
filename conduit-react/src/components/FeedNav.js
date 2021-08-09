import React from 'react';
    function FeedNav(props){
        return(
            <>
            <section className = "home-section flex-80">
            <div className = "home-tags-div">
                            <ul className = "flex">
                            <li className="color-pri">
                            Personal feed
                                 </li>
                                 <li className="color-pri">
                                     <Link className = {props.activeTab === "" && 'active'} onClick = {props.emptyTab} to = "/">
                                     Global feed
                                     </Link>
                          
                                 </li>
                        {
                            props.activeTab && <li className = "feed-nav-item">
                                <Link className = {props.activeTab && 'active'} to = "/">
                                    #{props.activeTab}
                                    </Link> 

                            </li>
                        }
                            </ul>
                        </div>
                        <div className = "home-articles-div"></div>
                        </section>
            </>
        )

    }
    
        
    
}

export default FeedNav