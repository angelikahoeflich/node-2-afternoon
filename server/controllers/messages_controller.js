let messages = [];

let currentId = 0;


module.exports = {

  create: (req,res) => {
    const { text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages)
  },
  read: (req, res) => { 
      res.status(200).send(messages)
  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }

}




