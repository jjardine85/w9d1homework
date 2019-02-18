import React, {Component} from "react"

class Movie extends Component {
  render(){
    return (
      <div className="movie">
        <a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }
}



export default Movie
