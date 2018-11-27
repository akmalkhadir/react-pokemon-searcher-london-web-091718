import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filter: ``
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemons: pokemons}))
  }

 handleSearch = (event, {value}) => {
   this.setState({filter:value})
 }

 getFilteredPokemons = () => {
   const {pokemons, filter} = this.state
   const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filter.toLowerCase()))
   const pokemonsToRender = filter === `` ? pokemons : filteredPokemons
   return pokemonsToRender
 }

  addPokemon = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon] })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.getFilteredPokemons()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
