import React from 'react'
import {movies$} from '../helpers/movies'

class MoviesList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            moviesList :0,
  }
}
componentDidMount() {
    movies$.then(movies => {
      
      this.setState(state => {
        return {
          moviesList: movies,
         
        };
      });
    });
  }

     render(){
         return(
             <div>
                nous avons {this.state.moviesList.length} film
                <ul>
                    
                   
                </ul>
             </div>
         )
     }
}
export default MoviesList;

