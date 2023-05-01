const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('wassup')
})

app.get('/cloud-computing',(req,res) => {
    res.send('man this is cc assign')
})

app.get('/student-details',(req,res) => {
    res.send('I am Tejas sanap of TY - IT A , Roll no : 331053 and PRN  : 22010588')
})

app.listen(port, () => {
  console.log(`Assignment app listening on port ${port}`)
})
