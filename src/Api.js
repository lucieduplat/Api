import  React  from  'react'; 


class Api extends React.Component { 

state = {
  results : []
}


handleChange = (x) => {  
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
  .then(res =>  res.json()) // conversion du résultat en JSON
  .then(data  => this.setState({results:  data[0]})
)
}

render() { 
  return( 
    <div> 
    <img src={this.state.results.image} alt={this.state.results.character} /> 
    <p>{this.state.results.character}</p>
    <p>{this.state.results.quote}</p>
    <button  onClick={this.handleChange}>Quotes</button>
    </div>

  )
}}



export default Api;