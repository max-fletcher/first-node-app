// invoke express
const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

// parse form data using this middleware. Used for post requests using form.
app.use(express.urlencoded({ extended: false }));

// parse form data using this middleware. Used for post requests using JS.
app.use(express.json());

// POST method using Form
app.post("/login", (req, res) => {
  console.log(req.body);
  // validating if name was provided
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  return res.status(200).send(`Welcome ${name}`);
});

// GET method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST method using JS. For the Vanilla JS Form.
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ success: true, person: name });
});

// POST method using JS For Postman Only.
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  // structure of the response if a bit off but since this is just an example, no need to sweat. In a real database
  // we will get to make persistant changes and the data will be formatted automatically
  res.status(201).json({ success: true, data: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
  // if taken from url params
  const { id } = req.params;
  // name taken from the from submission
  const { name } = req.body;
  // console.log(id, name)
  // res.send(`${name} and ${id}`)

  const person = people.find((person) => {
    return person.id === Number(id);
  });

  // If person with specified ID is not found, return error message
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No Person with ID ${id} found !!` });
  }

  // For each array row,
  const newPeople = people.map((person) => {
    // if the row id matches the params id,
    if (person.id === Number(id)) {
      // change the name property of that row
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });

  // If person with specified ID is not found, return error message
  if (!person) {
    return res
      .status(400)
      .json({
        success: false,
        msg: `No Person with ID ${req.params.id} found !!`,
      });
  }

  // Eliminate/Filter out the row that has the same id as request params id
  const newPeople = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });

  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is Listening on port 5000...");
});
