const Fruit = require("../models/Fruits");

// should be async with a database
const index = (req, res) => {
    try {
    const fruits = Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
};

const show = (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = Fruit.show(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
};

const create = (req, res) => {
  try {
    const newFruit = Fruit.create(req.body);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err.message});
  }
};

const update = (req, res) => {
    const name = req.params.name.toLowerCase();
  try {
    const fruit = Fruit.show(name)
    const result = fruit.update(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const destroy = (req,res)=>{
    const name = req.params.name.toLowerCase();
    try {
        const fruit = Fruit.show(name)
        const result = fruit.destroy(req.body)
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({error:err})
    }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
