function scoring(...chance) {
  let score = 0;
  let curr = 0;
  // let fillBall;
  // let chance = [];
  // let currThrow = 0;
  console.log(chance);
  // let len = chance.length;
  // if (chance[len - 2] === 10 || chance[len - 2] + chance[len - 3] === 10) {
  //   fillBall = chance[len - 1];
  // }
  function noOfFallenPins() {
    return chance[curr] + chance[curr + 1];
  }

  function sparePoints() {
    return chance[curr + 2];
  }
  function strikePoints() {
    return (chance[curr + 1] + chance[curr + 2]);
  }
  function personStrikes() {
    return (chance[curr] === 10);
  }
  function personSpares() {
    return (chance[curr] + chance[curr + 1] === 10);
  }
  for (frame = 0; frame < 10; frame += 1) {
    if (personStrikes()) {
      score += 10 + strikePoints();
      curr += 1;
    } else if (personSpares()) {
      score += 10 + sparePoints();
      curr += 2;
    } else {
      score += noOfFallenPins();
      curr += 2;
    }
  }
  return score;
}
module.exports = scoring;
