'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkoutExercise = sequelize.define('WorkoutExercise', {
    id: DataTypes.UUID,
    workoutId: DataTypes.UUID,
    exerciseId: DataTypes.UUID,
    rounds: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL
  }, {});
  WorkoutExercise.associate = function(models) {
    // associations can be defined here
  };
  return WorkoutExercise;
};