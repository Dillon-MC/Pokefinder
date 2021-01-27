import './css/App.css';
import React, { Component } from 'react';
import Card from '../components/Card/Card.js';
import SearchBox from '../components/SearchBox/SearchBox.js';
import { PageHeader } from "../components/PageHeader/PageHeader.js";
import Scroll from "../components/Scroll/Scroll";
import ErrorText from '../components/ErrorText/ErrorText.js';
import { connect } from 'react-redux';
import { 
  setSearchBox,
  setComponentTransition,
  setPokemon
} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchBox: state.searchPokemon.searchBox,
    name: state.getPokemon.name,
    type: state.getPokemon.type,
    weight: state.getPokemon.weight,
    hiddenAbility: state.getPokemon.hiddenAbility,
    baseStats: state.getPokemon.baseStats,
    sprite: state.getPokemon.sprite,
    error: state.getPokemon.error,
    componentTransition: state.getComponentTransitionState.componentTransition,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchBox(event.target.value)),
    onGetPokemon: (pokemon, currentPokemon) => dispatch(setPokemon(pokemon, currentPokemon)),
    onComponentTransition: (entered) => dispatch(setComponentTransition(entered))
  }
}

class App extends Component {

  render() {
    const { onSearchChange, onGetPokemon, onComponentTransition } = this.props;
    const transitionComponent = () => {
      if(this.props.componentTransition === false) {
        return true;
      } else {
        return false;
      }
    }
    const page = { 
      mainPage: <div id="App">
                  <PageHeader/>
                  <SearchBox searchChange={onSearchChange} getPokemon={onGetPokemon} text={this.props.searchBox} currentPokemon={this.props.name}/>
                  <ErrorText error={this.props.error}/>
                </div>,
      cardComponent:  
                      <div className="Cards">
                        <Card name={this.props.name} type={this.props.type}
                        weight={this.props.weight} hiddenAbility={this.props.hiddenAbility} baseStats={this.props.baseStats}
                        sprite={this.props.sprite}
                        Expand={this.props.componentTransition} extendCardCallback={() => onComponentTransition(transitionComponent())}/>
                      </div>,
      footer: <footer className="center white bg-black mt4 pt100">
                <h4><a href="https://github.com/Dillon-MC" target="_blank" rel="noreferrer">Github</a></h4>
                <h4> | </h4>
                <h4>twitter</h4>
              </footer>
  }

    return this.props.name !== '' ? (
        <div>
          {page.mainPage}
          {page.cardComponent}
          {page.footer}
        </div>
    ) : <div>
          {page.mainPage}
          {page.footer}
        </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
