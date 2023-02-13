const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cloud-computing',(req,res) => {
    res.send('I love Cloud Computing and Devops')
})

app.get('/student-details',(req,res) => {
    res.send('I am Varad Rajopadhye of TY - IT A , Roll no : 331048 and PRN  : 22010084')
})

app.listen(port, () => {
  console.log(`Assignment app listening on port ${port}`)
})