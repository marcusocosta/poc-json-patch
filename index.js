'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let jsonpatch = require('fast-json-patch');

let contactJson = {
  name: 'Marcus',
  phones: {
     'com.bonuz': {
      number: '9999-9999'
    },
    company: {
      number: '8888-8888'

    },
    home: {
      number: '7777-7777'
    }
  }
};

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello!');
});

app.patch('/:id', (req, res) => {
  let patches = req.body;

  jsonpatch.apply(contactJson, patches);

  res.send(contactJson);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
