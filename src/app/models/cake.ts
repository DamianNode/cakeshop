export interface CakeAttrs {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  numberOfPortion: number;
  cakePrice: number;
  portionPrice: number;
}

export class Cake {
  static defaultImageUrl = '/assets/unknown-cake.png';

  id: number;
  name: string;
  imageUrl: string;
  description: string;
  numberOfPortion: number;
  cakePrice: number;
  portionPrice: number;

  constructor(attrs: Partial<CakeAttrs> = {}) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.imageUrl = attrs.imageUrl || Cake.defaultImageUrl;
    this.description = attrs.description;
    this.numberOfPortion = attrs.numberOfPortion;
    this.cakePrice = attrs.cakePrice;
    this.portionPrice = attrs.cakePrice / attrs.numberOfPortion;
  }
}
