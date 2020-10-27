let messages = [];

let currentId = 0;


module.exports = {

  create: (req,res) => {
    const { text, time} = req.body;
    console.log("req.body", req.body)
    messages.push({id: currentId, text, time});
    currentId++;
    res.status(200).send(messages)
  },
  read: (req, res) => { 
      res.status(200).send(messages)
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( el => el.id == updateID);

    messages[messageIndex] = {
      id: messages[messageIndex].id,
      text: text || messages[messageIndex].text,
      time: messages[messageIndex].time
    };
    res.status(200).send(messages)
  },

  delete: (req, res) => {
      const deleteId = req.params.id;
      const messageIndex = messages.findIndex( el => el.id == deleteId);
      messages.splice(messageIndex, 1);
      res.status(200).send(messages);
  }

}




