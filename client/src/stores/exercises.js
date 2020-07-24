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
  static INSTANCE;
  static getInstance = () =>
    Exercises.INSTANCE || (Exercises.INSTANCE = new Exercises());

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
}
