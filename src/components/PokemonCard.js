import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: ''
  }

  componentDidMount () {
    this.setState({
      image: this.props.pokemon.sprites.front,
    })
  }

  handleClick = () => {
    const { sprites } = this.props.pokemon
    this.state.image === sprites.front ?
     this.setState({ image: sprites.back }) :
      this.setState({ image: sprites.front })
  }

  render () {
    const { pokemon } = this.props
    const { image } = this.state
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className='image'>
            <img src={image} alt={pokemon.name} />
          </div>
          <div className='content'>
            <div className='header'>{pokemon.name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
