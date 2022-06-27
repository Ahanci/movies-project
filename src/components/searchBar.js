import React from "react";

class SearchBar extends React.Component{

    // state={
    //     searchValue:'',
    // }

    handleFormSubmit= (e)=>{

        e.preventDefault()
    }
    render(){

        return(

            <form onSubmit={this.handleFormSubmit} > 
                <div className="form-row mb-">
                    <div className="col-12">
                        <input 
                        onChange={this.props.searchMovieProp} 
                        
                        type='text' className="form-control" placeholder="search for movie"
                        
                        />
                        

                    </div>
                </div>
            </form>

        )
    }



}
export default SearchBar; 