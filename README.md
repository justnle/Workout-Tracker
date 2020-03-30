# Workout-Tracker

A Workout Tracker application that is built using MongoDB. The application allows a user to track their overall workout routine by allowing user input for exercise types, resistance or cardio, followed by relevant data for each including sets, reps, distance, etc. The user can add multiple exercises to one workout, and their statistics will be generated showing the total duration, total reps, total sets. Statistics for the last 10 workouts that the user inputted will also be displayed which provide another visual representation in addition to their physique to track progress over time.

## Usage

To install and use locally,

1. `git clone` this repository to a local directory
2. Seed the database with:

```bash
npm run seed
```

3. Install the dependencies via the terminal by running:

```bash
npm i
```

4. Then run the application with:

```bash
npm run start
```

Optionally, run the application with nodemon using:

```bash
npm run watch
```

5. Open the browser and visit [http://localhost:3000/](http://localhost:3000/)

To use the deployed application, click [here](https://hw-17-fitness-tracker.herokuapp.com/)

### Interaction

Upon the splash page, the user will be prompted to either create a new workout or continue their previous workout. The user will select the exercise type, Resistance or Cardio and input the relevant data for either one. One inputted, the user can add additional exercises to their workout program, or complete the workout to finish up.

### Screenshots

![](https://github.com/twopcz/Workout-Tracker/blob/master/public/assets/images/index.png?raw=true)
![](https://github.com/twopcz/Workout-Tracker/blob/master/public/assets/images/stats.png?raw=true)

# Technologies

This application was built with:

- JavaScript
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.9.6",
    "morgan": "^1.10.0"
  }
```

Documentation on dependencies:

- [mongoose](https://mongoosejs.com/docs/guide.html)
- [morgan](https://github.com/expressjs/morgan)

# Enhancements

I have a bug on the `/stats` page regarding the 'Last (number of) Exercises.' It should be listing 10 exercises at max, and listing each exercise, but if you add multiple exercises to the workout, it considers that as one exercise. I believe my `/api/workouts/range` is correct but I must be missing something that is creating this error. Also my 'Last (number of) Exercises' is not being displayed as an ordered list like the demo.

# References

- UW Coding Bootcamp for providing the front end code.

# License

This project is licensed under the MIT License - see the LICENSE.md file for details

https://hw-17-fitness-tracker.herokuapp.com/
