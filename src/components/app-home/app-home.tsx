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
        <pokedex-class></pokedex-class>

        <stencil-route-link url='/safari'>
          <button>
            Go to Safari
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
