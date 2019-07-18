const db = require("../data/dbConfig");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const car = await db("cars")
      .where({ id: id })
      .first();
    if (!car) {
      res.status(400).json({
        message: `No cars with id ${id}.`
      });
    } else {
      res.status(200).json(car);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const { VIN, make, model, MPG, transmission_type, title_status } = req.body;
  if (!VIN || !make || !model || !MPG) {
    res.status(400).json({
      error: "Please include the VIN, make, model, and MPG."
    });
  } else {
    try {
      const newCar = await db("cars").insert(req.body, "id");
      res.status(201).json(newCar[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

router.put("/:id", async (req, res) => {
  const { VIN, make, model, MPG, transmission_type, title_status } = req.body;
  const { id } = req.params;
  if (!VIN || !make || !model || !MPG) {
    res.status(400).json({
      error: "Please include the VIN, make, model, and MPG."
    });
  } else {
    try {
      const count = await db("cars")
        .where({ id: id })
        .update(req.body);
      if (!count) {
        res.status(404).json({
          error: `No car with id ${id}.`
        });
      } else {
        res.status(200).json({
          message: `${count} car(s) updated.`
        });
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const count = await db("cars")
      .where({ id: id })
      .del();
    if (!count) {
      res.status(404).json({
        error: `No car with id ${id}.`
      });
    } else {
      res.status(202).json({
        message: `${count} car(s) deleted.`
      });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
