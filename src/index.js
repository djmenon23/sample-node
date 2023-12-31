const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
