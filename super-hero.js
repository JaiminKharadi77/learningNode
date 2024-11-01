class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module.exports = new SuperHero("Batman"); First Part Of This Video

module.exports = SuperHero; // Second Part Of this Video
