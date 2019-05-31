const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser());
app.use(cors());
app.use(express.static('./public'))



app.listen(8000, () => {
  console.log('listening on port 8000')
})