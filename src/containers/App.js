import './css/App.css';
import React, { Component } from 'react';
import Card from '../components/Card/Card.js';
import SearchBox from '../components/SearchBox/SearchBox.js';
import { PageHeader } from "../components/PageHeader/PageHeader.js";
import ErrorText from '../components/ErrorText/ErrorText.js';
import { connect } from 'react-redux';
import { setSearchBox } from '../actions';
import { setPokemon } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchBox: state.searchPokemon.searchBox,
    name: state.getPokemon.name,
    type: state.getPokemon.type,
    weight: state.getPokemon.weight,
    hiddenAbility: state.getPokemon.hiddenAbility,
    sprite: state.getPokemon.sprite,
    error: state.getPokemon.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchBox(event.target.value)),
    onGetPokemon: (pokemon, currentPokemon) => dispatch(setPokemon(pokemon, currentPokemon))
  }
}

class App extends Component {

  render() {
    const { onSearchChange, onGetPokemon } = this.props;

    const page = { 
      mainPage: <div id="App">
                  <PageHeader/>
                  <SearchBox searchChange={onSearchChange} getPokemon={onGetPokemon} text={this.props.searchBox} currentPokemon={this.props.name}/>
                  <ErrorText error={this.props.error}/>
                </div>,
      cardComponent:  <div className="Cards">
                        <Card name={this.props.name} type={this.props.type}
                        weight={this.props.weight} hiddenAbility={this.props.hiddenAbility} sprite={this.props.sprite}/>
                      </div>,
  }

    return this.props.name !== '' ? (
        <div>
          {page.mainPage}
          {page.cardComponent}
          <footer className="center white bg-black mt4 pt100">
            <h4><a href="https://github.com/Dillon-MC">Github</a></h4>
            <h4> | </h4>
            <h4>twitter</h4>
          </footer>
        </div>
    ) : <div>{page.mainPage}</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
