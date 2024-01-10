let todoJson = [];

const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;

const app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  if (todoJson.length === 0) {
    res.status(404).json({ message: "No Todo Found" })
  } else {
    res.json(todoJson)
    console.log(todoJson);
  }
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!id) {
    res.status(400).send("Id Not Found")

  } else {
    const todo = todoJson.find((todo) => todo.id === parseInt(id))

    if (!todo) {

      res.status(404).json({ message: "Todo with the Id Not found" })
    }
    else {

      res.status(200).json(todo)
    }
  }
})

app.post('/todos', (req, res) => {
  const { title, completed, description } = req.body;

  if (!title || !description || completed === undefined) {
    res.status(400).send("Please Fill all the required Data");
  } else {
    const newTodo = {
      id: todoJson.length + 1,
      title,
      completed,
      description,
    };

    todoJson.push(newTodo);

    res.status(200).json(newTodo);
  }
});

app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body

  if (!id) {
    res.status(404).json({ message: "No Id Found" })
  }
  else {
    const index = todoJson.findIndex(todo => todo.id === parseInt(id))

    if (index === -1) {
      res.status(404).send("No Todo with Id Found")
    }
    else {
      todoJson[index] = {
        ...todoJson[index],
        title: title || todoJson[index].title,
        description: description || todoJson[index].description,
        completed: completed !== undefined ? completed : undefined
      }
    }
    res.status(200).json({ message: "Todo with the ID Updated", updatedTodo: todoJson[index] })
  }
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send("Id Not Found")

  } else {
    const index = todoJson.findIndex(todo => todo.id === parseInt(id))

    if (index === -1) {

      res.status(404).json({ message: "Todo Not found" })
    }
    else {

      todoJson.splice(index, 1)
      res.status(200).json({ message: "Todo Deleted" })
    }

  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
