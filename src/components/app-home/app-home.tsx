import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl:'app-home.css',
  // shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/safari'>
          <img class="image__home-safari" src="../../assets/images/safari-zone.png" alt="Image for safari zone"/>
          <button>
            Go to Safari
          </button>
        </stencil-route-link>
        <stencil-route-link url='/pokedex'>
          <img class="image__home-pokedex" src="../../assets/images/pokedex.png" alt="Image for the pokedex"/>
          <button>
            Go to Pokedex
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
