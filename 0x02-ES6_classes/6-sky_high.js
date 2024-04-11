import Building from './5-building'; // imports from the other file

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }
// gets the number to change

  get floors() {
    return this._floors;
  }
// set floor a number below
  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw TypeError('Floors must be a number'); // must be a whole number
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

