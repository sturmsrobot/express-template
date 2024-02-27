const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const todoSequelize = require("../../database/setup/database");
const TodoModel = require("../../database/models/TodoModel");

const TodosRouter = Router();

let todos = [
  {
    id: 1,
    userId: 1,
    task: "Wäsche waschen",
    isDone: true,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 2,
    userId: 1,
    task: "Müll rausbrigen",
    isDone: false,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 3,
    userId: 2,
    task: "Tanzen",
    isDone: false,
    dueDate: new Date("2024-03-03"),
  },
  {
    id: 4,
    userId: 2,
    task: "Auto fahren",
    isDone: true,
    dueDate: new Date("2024-03-03"),
  },
];

// GET REQUESTS
// /v1/todos/bytodoid
TodosRouter.get("/byid", async (req, res) => {
  const todoId = req.query.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const todo = await TodoModel.findOne({ where: { id: todoId } });

  res.status(StatusCodes.OK).json({ todo: todo });
});

// Alle Todos von einer UserId
TodosRouter.get("/byuserid", async (req, res) => {
  // const userId = req.body.userId;
  // const userId = parseInt(req.query.userId);
  const userId = req.query.userId;
  console.log(userId);

  if (!userId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send(ReasonPhrases.BAD_REQUEST + " Keine userID");
    return;
  }

  const userTodos = await TodoModel.findAll({ userId: userId });

  res.status(StatusCodes.OK).json(userTodos);
  // res.status(StatusCodes.OK).send(JSON.stringify(userTodos)); //alternativ
});

TodosRouter.get("/all", async (req, res) => {
  const todos = await TodoModel.findAll();
  res.status(StatusCodes.OK).send(todos);
});

// PUT REQUESTS
TodosRouter.put("/mark", async (req, res) => {
  const { id, newIsDone } = req.body;

  try {
    // Aktualisiere das Todo-Objekt in der Datenbank
    const [numUpdatedRows, updatedTodo] = await TodoModel.update(
      { isDone: newIsDone },
      { where: { id: id }, returning: true }
    );

    if (numUpdatedRows === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Todo nicht gefunden" });
    }

    // res.status(StatusCodes.OK).json({ updatedTodo: updatedTodo[0] });
    // res.status(StatusCodes.OK).json({ updatedTodo: updatedTodo[0].dataValues });
    // res.status(StatusCodes.OK).json({ updatedTodo: updatedTodo[0].get({ plain: true }) });
    res.status(StatusCodes.OK).json({ updatedTodo: updatedTodo[0].toJSON() });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Interner Serverfehler" });
  }
});

TodosRouter.put("/update", async (req, res) => {
  const { todoId, newTask, newIsDone, newDueDate } = req.body;

  await TodoModel.update(
    {
      task: newTask,
      isDone: newIsDone,
      dueDate: newDueDate,
    },
    { where: { id: todoId } }
  );

  const todo = await TodoModel.findByPk(todoId);

  res.status(StatusCodes.OK).json({ updatedTodo: todo });
});

// POST REQUESTS
TodosRouter.post("/create", async (req, res) => {
  const { newTask, newIsDone, newDueDate, newUserId } = req.body;

  const newTodo = {
    task: newTask,
    isDone: newIsDone,
    dueDate: new Date(newDueDate),
    userId: newUserId,
  };

  const todo = await TodoModel.create(newTodo);

  res.status(StatusCodes.OK).json({ todo: todo });
});

// DELETE REQUEST
TodosRouter.delete("/delete", async (req, res) => {
  const { todoId } = req.body; //req.body.todoId

  await TodoModel.destroy({ where: { id: todoId } });

  res.status(StatusCodes.OK).json({ deletedTodosId: todoId });
});

module.exports = { TodosRouter };
