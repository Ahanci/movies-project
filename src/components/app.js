import React from 'react';
// import SearchBar from './searchBar';
import MovieList from './MovieList';

class App extends React.Component{

    state= {

        movies: [
            {
                'id':1,
                'name':'the flash',
                'rating':8.3,
                'overview':'vefhıbeqıupvhnerğuvnherıv',
                'imageURL':'https://cdn.pixabay.com/photo/2021/10/17/15/58/police-6718716_960_720.jpg'
            },
        
            { 'id':2,
            'name':'the flash',
            'rating':9.1,
            'overview':'vefhıbeqıupvhnerğuvnherıv',
            'imageURL':'https://cdn.pixabay.com/photo/2017/07/26/06/31/road-2540632_960_720.jpg'},
        
            { 'id':3,
            'name':'the flash',
            'rating':9.5,
            'overview':'vefhıbeqıupvhnerğuvnherıv',
            'imageURL':'https://cdn.pixabay.com/photo/2016/02/24/11/56/human-1219639_960_720.jpg'}
        ]
    }

    deleteMovie= (movie)=>{
        const newMovieList= this.state.movies.filter(m => m.id!== movie.id );

        this.setState({
            movies: newMovieList,
        })
    }
       
    
    


    render(){
        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                     
                    </div>
                </div>
                <MovieList  movies= {this.state.movies}
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