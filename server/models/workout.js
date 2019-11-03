'use strict';
module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    name: DataTypes.STRING
  }, {});
  Workout.associate = function(models) {
    Workout.belongsTo(models.User);

    Workout.belongsToMany(models.Exercise, {
      through: 'WorkoutExercises',
      as: 'exercises',
      foreignKey: 'workoutId',
      otherKey: 'exerciseId'
    });

  };
  return Workout;
};