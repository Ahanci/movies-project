import React from 'react';
import SearchBar from './searchBar';
import MovieList from './MovieList';
import axios from 'axios';

class App extends React.Component{

    state= {

        movies: [],

        searchValue: ''
    }

    // async componentDidMount(){
    //     const baseURL= 'http://localhost:3002/movies';
    //     const response= await fetch(baseURL);
    //     const data= await response.json();
    //     this.setState({movies:data});
      

    // }

    async componentDidMount(){ 

        const response= await axios.get('http://localhost:3002/movies');
        console.log(response);
        this.setState({movies:response.data})
    
    
    }



    // deleteMovie= (movie)=>{
    //     const newMovieList= this.state.movies.filter(m => m.id!== movie.id );


    //     this.setState(state=>({
    //         movies:newMovieList
    //     })
    //     )

    //     console.log(this.state);
    // }


    // FETCH API: 

    // deleteMovie= async (movie)=>{
    //     const baseURL= `http://localhost:3002/movies/${movie.id}`;
    //     await fetch(baseURL,
    //         {method: "DELETE"}
            
    //         )

    //     const newMovieList= this.state.movies.filter(m => m.id!== movie.id );


    //     this.setState(state=>({
    //         movies:newMovieList
    //     })
    //     )

    //     console.log(this.state);
    // }

    //AXIOS :


    deleteMovie= async (movie)=>{
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList= this.state.movies.filter(m => m.id!== movie.id );


        this.setState(state=>({
            movies:newMovieList
        })
        )

        console.log(this.state);
    }

    searchMovie= (e)=>{
        // console.log(e.target.value);
        this.setState({searchValue:e.target.value})
    }
       
    
    


    render(){

        let filteredMovies= this.state.movies.filter( 
            (movie)=> {
                return movie.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
            }   )
        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp={this.searchMovie}/>
                        <br/>
                     
                    </div>
                </div>
                <MovieList  movies= {filteredMovies}
                deleteMovieProp={this.deleteMovie}
                />
        
            </div>


        )
    }
}

// const App= ()=> {
//     return(

//         <h1> MY MOVIES</h1>


//     )
// }

export default App;