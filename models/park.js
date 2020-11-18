const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.mostAttractiveDinosaur = function(dinosaurs) {
    var mostAttractive = dinosaurs[0] || null;
    var dinosaur = null;
    for (var i = 0; i < dinosaurs.length; i++) {
        this.dinosaur = dinosaurs[i];
        this.mostAttractive.guestsAttractedPerDay = Math.max(mostAttractive.guestsAttractedPerDay, dinosaur.guestsAttractedPerDay);

    }
    return mostAttractive;
};

Park.prototype.findSpecies = function(speciesName) {
    const sameSpecies = [];
    for (const dinosaur in this.collectionOfDinosaurs) {
        if (dinosaur === speciesName) {
            sameSpecies.push(dinosaur);
        }
    }
    return sameSpecies;
};


module.exports = Park;