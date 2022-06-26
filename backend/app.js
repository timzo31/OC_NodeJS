const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("requete recu");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({
    message: "Votre requete a bien ete recu !",
  });
  next();
});

app.use((req, res) => {
  console.log("Réponse envoyée avec succès !");
});

module.exports = app;
