import { observable, action } from "mobx";
import api from "../utils/api";

export class Exercise {
  @observable exercise;
  @observable sets = 3;
  @observable reps = 10;

  @action setExercise = (exercise) => {
    this.exercise = exercise;
  };

  @action setSets = (sets) => {
    this.setSets = sets;
  };

  @action setReps = (reps) => {
    this.reps = reps;
  };
}

export class Workout {
  @observable name;
  @observable description;
  @observable exercises = [];
  currentUser = "";
  @observable finished = false;
  @observable workouts;

  constructor() {
    for (var i = 0; i < 7; i++) {
      this.exercises.push(new Exercise());
    }
  }

  @action setName = (name) => {
    this.name = name;
  };

  @action setDescription = (description) => {
    this.description = description;
  };

  fetchCurrentUser = async () => {
    try {
      const res = await api.get("/auth", {
        headers: {
          "x-auth-token": localStorage.getItem("jwt"),
        },
      });

      this.currentUser = res.data._id;
    } catch (err) {
      console.error(err.message);
    }
  };

  @action createWorkout = async () => {
    try {
      await this.fetchCurrentUser();

      const res = await api.post(
        "/workouts",
        {
          name: this.name,
          description: this.description,
          exercises: this.exercises,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("jwt"),
          },
          params: {
            user: this.currentUser,
          },
        }
      );

      if (res.status === 200) {
        this.finished = true;
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      this.finished = false;
    }
  };

  @action fetchWorkouts = async () => {
    try {
      const res = await api.get("/workouts", {
        headers: {
          "x-auth-token": localStorage.getItem("jwt"),
        },
        params: {
          user: this.currentUser,
        },
      });

      if (res.status === 200) {
        this.workouts = res.data;
      }
    } catch (err) {
      console.error(err.message);
    }
  };
}
