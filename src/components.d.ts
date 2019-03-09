/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface MoveList {
    'moves': [];
  }
  interface MoveListAttributes extends StencilHTMLAttributes {
    'moves'?: [];
  }

  interface NumInput {
    'func': any;
    'no': number;
  }
  interface NumInputAttributes extends StencilHTMLAttributes {
    'func'?: any;
    'no'?: number;
  }

  interface PokemonSprite {
    'src': any;
  }
  interface PokemonSpriteAttributes extends StencilHTMLAttributes {
    'src'?: any;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface PokedexClass {}
  interface PokedexClassAttributes extends StencilHTMLAttributes {}

  interface SafariZone {}
  interface SafariZoneAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'MoveList': Components.MoveList;
    'NumInput': Components.NumInput;
    'PokemonSprite': Components.PokemonSprite;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'PokedexClass': Components.PokedexClass;
    'SafariZone': Components.SafariZone;
  }

  interface StencilIntrinsicElements {
    'move-list': Components.MoveListAttributes;
    'num-input': Components.NumInputAttributes;
    'pokemon-sprite': Components.PokemonSpriteAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'pokedex-class': Components.PokedexClassAttributes;
    'safari-zone': Components.SafariZoneAttributes;
  }


  interface HTMLMoveListElement extends Components.MoveList, HTMLStencilElement {}
  var HTMLMoveListElement: {
    prototype: HTMLMoveListElement;
    new (): HTMLMoveListElement;
  };

  interface HTMLNumInputElement extends Components.NumInput, HTMLStencilElement {}
  var HTMLNumInputElement: {
    prototype: HTMLNumInputElement;
    new (): HTMLNumInputElement;
  };

  interface HTMLPokemonSpriteElement extends Components.PokemonSprite, HTMLStencilElement {}
  var HTMLPokemonSpriteElement: {
    prototype: HTMLPokemonSpriteElement;
    new (): HTMLPokemonSpriteElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLPokedexClassElement extends Components.PokedexClass, HTMLStencilElement {}
  var HTMLPokedexClassElement: {
    prototype: HTMLPokedexClassElement;
    new (): HTMLPokedexClassElement;
  };

  interface HTMLSafariZoneElement extends Components.SafariZone, HTMLStencilElement {}
  var HTMLSafariZoneElement: {
    prototype: HTMLSafariZoneElement;
    new (): HTMLSafariZoneElement;
  };

  interface HTMLElementTagNameMap {
    'move-list': HTMLMoveListElement
    'num-input': HTMLNumInputElement
    'pokemon-sprite': HTMLPokemonSpriteElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'pokedex-class': HTMLPokedexClassElement
    'safari-zone': HTMLSafariZoneElement
  }

  interface ElementTagNameMap {
    'move-list': HTMLMoveListElement;
    'num-input': HTMLNumInputElement;
    'pokemon-sprite': HTMLPokemonSpriteElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'pokedex-class': HTMLPokedexClassElement;
    'safari-zone': HTMLSafariZoneElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
