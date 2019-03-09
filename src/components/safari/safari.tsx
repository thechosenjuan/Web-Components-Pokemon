import { Component } from "@stencil/core";

@Component({
  tag: "safari-zone",
  styleUrl: "safari.css"
  // shadow: true
})
export class SafariZone {
  render() {
    return (
      <div>
        <img
          src="../../assets/images/pokemon-battle.png"
          alt="Pokemon battle screen"
          class="image__pokemon-battle"
        />
        <div class="pokemon-battle__actions">
          <button>Throw Rock</button>
          <button>Throw Berry</button>
          <button>Throw PokeBall</button>
        </div>
      </div>
    );
  }
}
