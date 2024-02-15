var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource from users.js');
});

router.post('/',function(request,response)
{
        response.send(request.body.fname+'  '+request.body.lname);
        console.log(request.body.fname+' '+request.body.lname);
    }
);

module.exports = router;
