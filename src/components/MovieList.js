import React from "react";





const MovieList = (props) => {

    /*function handleClick(e){
        console.log(e.pageY);
    }*/
    return (
        <div className="row">

            {props.movies.map((movie) => (

                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} alt="film resmi" />
                        <div className="card-bpdy">
                            <h5 className="card-title"> {movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between alig-items-center">
                                <button onClick={(event)=>props.deleteMovieProp(movie)} type="button" className="btn btn-md btn-outline-danger" > delete </button>
                                <h2> <span className="badge badge-info bg-primary text-white">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            )

            )}




        </div>

    )

}

export default MovieList; 