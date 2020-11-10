var express = require("express");
var mongoose = require("mongoose");


var app = express();
var PORT = process.env.PORT || 3000;



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});





