import express from 'express';
// const express = require('express');
const app = express();

app.use('/', express.static('./dist'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on port: ${process.env.SERVER_PORT}`);
});
