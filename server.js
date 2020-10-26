const express = require('express');
const request = require('request');
const got = require('got');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}));


/*app.get('/surveys', (req, res) => {
  request({ url: 'http://localhost:8080/swe645a3/api/surveys' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json({'surveys' : JSON.parse(body)});
      //console.log(body);
    }
  )
});*/


app.get('/surveys', (req, res) => {

  (async () => {
      try {
          const response = await got.get('http://localhost:8080/swe645a3/api/surveys');
          //console.log(response.body);
          res.json({'surveys' : JSON.parse(response.body)});
          //=> '<!doctype html> ...'
      } catch (error) {
          console.log(error.response.body);
          return res.status(500).json({ type: 'error', message: error.response.body });
          //=> 'Internal server error ...'
      }
  })();

});

app.post('/survey', (req, res) => {

  (async () => {
      try {
          const response = await got.get(`http://localhost:8080/swe645a3/api/survey/${req.body.id}`);
          //console.log(response.body);
          return res.status(200).json({success:JSON.parse(response.body)});
          //=> '<!doctype html> ...'
      } catch (error) {
          console.log(error.response.body);
          return res.status(500).json({ error: error.response.body });
          //=> 'Internal server error ...'
      }
  })();

  //res.status(200);

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
