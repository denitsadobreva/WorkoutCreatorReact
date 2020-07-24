import { observable, action, onBecomeObserved } from "mobx";
import api from "../utils/api";

export class Exercise {
  @observable name;
  @observable description;
  @observable level;
  @observable type;
  @observable muscleGroups;
  @observable equipment;
  @observable photoUrl;
  @observable videoUrl;
}

export class Exercises {
  constructor() {
    onBecomeObserved(this, "exercises", this.fetchExercises);
  }

  @observable exercises = [];

  @action fetchExercises = async () => {
    try {
      this.exercises = await api.get("/exercises");
    } catch (err) {
      console.error(err.message);
    }
  };
}
