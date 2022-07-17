const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Api corriendo en puerto -- ${port}`))