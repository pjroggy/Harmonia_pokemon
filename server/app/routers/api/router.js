const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const pokemonsRouter = require("./pokemons/router");
const typeRouter = require("./type/router");

router.use("/items", itemsRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typeRouter);

/* ************************************************************************* */

module.exports = router;
