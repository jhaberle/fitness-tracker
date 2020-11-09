//db
const db = require('../models')
module.exports = (app) => {

    //Workout Routes//////
    //get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

    
    //add exercise, assign id set true and push to model
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
         {$push: {excercises:body }},
        { upsert: true, useFindandModify:false},
        updatedWorkout => {
        res.json(updatedWorkout);
         })
    });
    //post to create new workout
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}