import { observable, action } from "mobx";
import api from "../utils/api";

export class Exercise {
  @observable exercise;
  @observable sets;
  @observable reps;

  constructor({ id, sets, reps }) {
    this.exercise = id;
    this.sets = sets;
    this.reps = reps;
  }

  @action setSets = (sets) => {
    this.setSets = sets;
  };

  @action setReps = (reps) => {
    this.reps = reps;
  };
}

export class WorkoutDay {
  @observable exercises;

  @action addExercise = ({ id, sets, reps }) => {
    this.exercises.push(new Exercise({ id, sets, reps }));
  };
}

export class Workout {
  @observable name;
  @observable description;
  @observable days = [];

  constructor() {
    this.days.push(new WorkoutDay());
  }

  @action setName = (name) => {
    this.name = name;
  };

  @action setDescription = (description) => {
    this.description = description;
  };

  @action addDay = () => {
    this.days.push(new WorkoutDay());
  };

  @action createWorkout = async () => {
    try {
      const res = await api.post(
        "/workouts",
        {
          name: this.name,
          description: this.description,
          days: this.days,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("jwt"),
          },
        }
      );

      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };
}
