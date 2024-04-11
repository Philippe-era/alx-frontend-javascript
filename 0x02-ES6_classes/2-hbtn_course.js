export default class HolbertonCourse { // use of getters and setters
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {                // the use of getter to get the name and return it
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') { // use of setter to set the value
      throw new Error('Invalid input type');
    }
    this._name = value;
  }

  get length() {   // getter to get the length
    return this._length;
  }

  set length(value) {  // sets the value accordingly
    if (typeof value !== 'number') {
      throw new Error('Invalid input type');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Invalid input type');
    }
    this._students = value;
  }
}

