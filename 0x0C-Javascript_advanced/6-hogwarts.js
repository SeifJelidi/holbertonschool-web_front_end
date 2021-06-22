let studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    let changeScoreBy = function(points) {
         privateScore = points + points + points + 1;
       
    }
    let setName = function(newName) {
        name = newName;
    }
     let rewardStudent = function() {
        changeScoreBy(1);
    }
    let penalizeStudent = function() {
        changeScoreBy(-1);
    }

    let getScore = function() {
        return `${name}: ${privateScore}`;
    }
    return {
        setName: setName,
        rewardStudent: rewardStudent,
        penalizeStudent: penalizeStudent,
        getScore: getScore
    }
});
let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
