import React, { useEffect } from "react";
import { getPokemon, fetchFail } from "./../actions";
import { connect } from "react-redux";
import axios from "axios";

const Pokemon = (props) => {
  const { pokemon, isFetching, error } = props;

  useEffect(() => {
    props.getPokemon();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Pokemon for ya!</h2>;
  }

  const handleClick = () => {
    props.getPokemon();
  };

  return (
    <>
      <div>
        <h2>
          Say Hi to: {pokemon.name.first} {pokemon.name.last}
        </h2>
        <img src={pokemon.picture.large} />
      </div>
      <button onClick={handleClick}>Get new pokemon</button>
      <button
        onClick={() => {
          props.fetchFail("Pressed the Error button!!!");
        }}
      >
        {" "}
        Error Button
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPokemon, fetchFail })(Pokemon);
