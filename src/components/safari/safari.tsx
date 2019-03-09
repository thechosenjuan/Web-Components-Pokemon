import { Component, State } from "@stencil/core";
@Component({
  tag: "safari-zone",
  styleUrl: "safari.css"
  // shadow: true
})
export class SafariZone {
  @State() currentPokemon: any;
  getPokemon = () => {
    let pokemonId = Math.floor(Math.random() * 807) + 1;
    let shinyPokemon = Math.floor(Math.random() * 3) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(pokemon => {
        this.currentPokemon = pokemon;
        let $image = document.querySelector(".image__pokemon-sprite");
        if (shinyPokemon === 3) {
          $image.setAttribute("src", pokemon.sprites["front_shiny"]);
        } else {
          $image.setAttribute("src", pokemon.sprites["front_default"]);
        }
      });
  };
  render() {
    return (
      <div class="pokemon-battle__container">
        <img
          src="../../assets/images/pokemon-battle.png"
          alt="Pokemon battle screen"
          class="image__pokemon-battle"
        />
        <div class="pokemon-battle__text">
          {this.currentPokemon && (
            <p>A wild {this.currentPokemon.name.toUpperCase()} appeared!</p>
          )}
        </div>
        <img class="image__pokemon-sprite" />
        <button onClick={this.getPokemon}>Encounter New Pokémon</button>
        <div class="pokemon-battle__actions">
          <button>Throw Rock</button>
          <button>Throw Berry</button>
          <button>Throw PokeBall</button>
        </div>
      </div>
    );
  }
}
