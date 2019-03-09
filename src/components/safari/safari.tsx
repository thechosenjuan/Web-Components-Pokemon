import { Component, State } from "@stencil/core";
@Component({
  tag: "safari-zone",
  styleUrl: "safari.css"
  // shadow: true
})
export class SafariZone {
  @State() currentPokemon = null;
  @State() pokemonFled = false;
  @State() encounterText = "";
  getPokemon = async () => {
    let pokemonId = Math.floor(Math.random() * 807) + 1;
    let shinyPokemon = Math.floor(Math.random() * 3) + 1;
    let $image: any;
    this.pokemonFled = false;
    $image = document.querySelector(".image__pokemon-sprite");
    if (!$image) {
      $image = document.querySelector(".image__pokemon-sprite--pokeball");
    }
    $image.setAttribute("style", "visibility: visible");
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(pokemon => {
        $image.setAttribute("class", "image__pokemon-sprite");
        return pokemon;
      });
    $image.setAttribute("class", "image__pokemon-sprite");
    this.currentPokemon = pokemon;
    this.encounterText = `A wild ${pokemon.name.toUpperCase()} appeared!`;

    if (shinyPokemon === 3) {
      $image.setAttribute("src", pokemon.sprites["front_shiny"]);
    } else {
      $image.setAttribute("src", pokemon.sprites["front_default"]);
    }
  };
  goingToFlee = () => {
    let goingToFlee = false;
    let $image = document.querySelector(".image__pokemon-sprite");
    if (Math.floor(Math.random() * 15) >= 12) {
      this.encounterText = `${this.currentPokemon.name.toUpperCase()} ran away!`;
      this.pokemonFled = true;
      this.currentPokemon = null;
      goingToFlee = true;
      $image.setAttribute("style", "visibility: hidden");
    }
    return goingToFlee;
  };
  didCatch = () => {
    let goingToCatch = false;
    if (Math.floor(Math.random() * 3) + 1 === 1) {
      goingToCatch = true;
    }
    return goingToCatch;
  };
  throwBall = () => {
    let $image = document.querySelector(".image__pokemon-sprite");
    if (this.currentPokemon && !this.pokemonFled) {
      if (this.didCatch()) {
        $image.setAttribute("class", "image__pokemon-sprite--pokeball");
        $image.setAttribute("src", "../../assets/images/pokeball.png");
        this.encounterText = `Gotcha! ${this.currentPokemon.name.toUpperCase()} was caught!`;
        this.currentPokemon = null;
      } else {
        this.encounterText = `Oh no! ${this.currentPokemon.name.toUpperCase()} broke free!`;
        this.goingToFlee();
      }
    }
  };

  throwRock = () => {
    if (this.currentPokemon && !this.pokemonFled) {
      this.encounterText = `${this.currentPokemon.name.toUpperCase()} is angry!`;
      this.goingToFlee();
    }
  };

  throwBerry = () => {
    if (this.currentPokemon && !this.pokemonFled) {
      this.encounterText = `${this.currentPokemon.name.toUpperCase()} is eating!`;
      this.goingToFlee();
    }
  };

  render() {
    return (
      <div class="pokemon-battle__container">
        <img
          src="../../assets/images/pokemon-battle.png"
          class="image__pokemon-battle"
          alt="Pokemon battle scene"
        />
        <div class="pokemon-battle__text-container">
          {<p class="pokemon-battle__text">{this.encounterText}</p>}
        </div>
        <img class="image__pokemon-sprite" />
        <button onClick={this.getPokemon}>Encounter New Pokémon</button>
        <div class="pokemon-battle__actions">
          <button onClick={this.throwRock}>Throw Rock</button>
          <button onClick={this.throwBerry}>Throw Berry</button>
          <button onClick={this.throwBall}>Throw PokeBall</button>
        </div>
      </div>
    );
  }
}
