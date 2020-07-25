import { observable, action, onBecomeObserved, computed } from "mobx";
import PropTypes from "prop-types";
import api from "../utils/api";

export class Exercises {
  constructor() {
    onBecomeObserved(this, "exercises", this.fetchExercises);
  }

  @observable exercises = [];

  @action fetchExercises = async () => {
    try {
      this.exercises = await api.get("/exercises").then(function (response) {
        return response.data;
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  @computed get exerciseMap() {
    return new Map(
      this.exercises.map((i) => [
        i._id,
        {
          name: i.name,
          description: i.description,
          photoUrl: i.photoUrl,
          videoUrl: i.videoUrl,
          level: i.level,
          type: i.type,
          muscleGroups: i.muscleGroups,
          equipment: i.equipment,
        },
      ])
    );
  }
}

export const exercisesPropType = PropTypes.shape({
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      photoUrl: PropTypes.string,
      videoUrl: PropTypes.string,
      level: PropTypes.string,
      type: PropTypes.string,
      muscleGroups: [PropTypes.string],
      equipment: [PropTypes.string],
    })
  ),
});
