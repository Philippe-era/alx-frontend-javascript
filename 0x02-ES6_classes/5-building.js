export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMesagge !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() { // gets the square root
    return this._sqft;
  }

  set sqft(sqft) { .. sets the square root
    this._sqft = sqft;
  }
}

