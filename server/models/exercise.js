'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    muscles: DataTypes.STRING
  }, {});
  Exercise.associate = function(models) {
    Exercise.belongsToMany(models.Workout, {
      through: 'WorkoutExercises',
      as: 'workouts',
      foreignKey: 'workoutId',
      otherKey: 'exerciseId'
    });
  };
  return Exercise;
};