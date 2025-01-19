const mysql2 = require('mysql2');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const host = 'olimpeducation.ru';
const ip = '87.228.26.46';

function getStrId(id){
  let strId = String(id);
  for (let i = 0; i < 4 - strId.length; i++) {
    strId = '0' + strId;
  }
  return strId;
}

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/img/Answers', express.static('./img/Answers'));
app.use('/img/Tasks', express.static('./img/Tasks'));

function createTagsQuery(tagsStroke){
  let queryPart = '';
  let tags = tagsStroke.split(',');
  for (let tag of tags){
    queryPart= queryPart.concat(` and tags like '%${tag}%'${tag == 'органическая химия' && !Array.from(tags).includes('неорганическая химия') ? ` and tags not like '%неорганическая химия%'` : ''}`);
  }
  return queryPart;
}

class Connection {
  constructor () {
    this.con =  mysql2.createConnection({
      host: ip,
      user: 'AliBaBa',
      password: 'A9l0E6x0',
      database: 'OlimpEducation'
    })}

  connect(callback) {
    this.con.connect((err) => callback(err));
  }

  query(querySql, callback) {
    this.con.query(querySql, (err, result) => callback(err, result));
  }

  end(callback) {
    this.con.end((err) => {if (callback) callback(err)});
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (typeof req.body.class == 'string') cb(null, `./img/Tasks/`); // Папка для хранения загруженных файлов
    else cb(null, `./img/Answers/`);
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname); // Сохранение файла с оригинальным именем
  }
});

const upload = multer({ storage: storage });

app.get('/', function(request, response) {
    response.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    const c = new Connection();
    c.connect(function (error) {
      if (error) {
        console.log(new Error(error));
      }
    });

    if (request.query.class != '0' && request.query.level != '0' && request.query.tags != ''){
      c.query(`select * from Tasks where class = ${request.query.class} and level = ${request.query.level.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level == '0' && request.query.tags == ''){
      c.query(`select * from Tasks order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level == '0' && request.query.tags != ''){
      c.query(`select * from Tasks where class = ${request.query.class.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level == '0' && request.query.tags != ''){
      c.query(`select * from Tasks where class > ${request.query.class.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level != '0' && request.query.tags != ''){
      c.query(`select * from Tasks where level = ${request.query.level.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level == '0' && request.query.tags == ''){
      c.query(`select * from Tasks where class = ${request.query.class} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level != '0' && request.query.tags == ''){
      c.query(`select * from Tasks where class = ${request.query.class} and level = ${request.query.level} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else {
      c.query(`select * from Tasks where class = ${request.query.class} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    }    
    c.end();
})

// Получаем дефолтный список задач (до выбор критериев)

app.get('/default', function(request, response){
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
  
  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });
  
  c.query(`select * from Tasks where _id < ${Number(request.query.amount) + 1}`, 
      function(_, results) {
          response.send(results);
      }
  );
  c.end();
});

// Получаем название файла с заданием для скачивания

app.get('/task', function(request, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  let id = request.query.id;
  
  while (id.length < 4) {
    id = '0'.concat(id);
  };

  let url = [`http://${host}/api/img/Tasks/ID${id}.jpg`];

  async function check() {
    for (let i = 1; i < 4; i++) {
      let r = await fetch(`http://${host}/api/img/Tasks/ID${id}(${i}).jpg`);
      if (r.status == 200) url.push(`http://${host}/api/img/Tasks/ID${id}(${i}).jpg`);
      else break;
    }
    response.send({url: url});
  }

  check();
});

// Получаем название файла с решением для скачивания

app.get('/answer', function(request, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  let id = request.query.id;

  if (id.length > 4) {
    response.status(404);
    return
  }
  
  while (id.length < 4) {
    id = '0'.concat(id);
  };

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select nameFile from Answers where nameFile like "%${id}.pdf"`, function(_, result) {
    response.send({url: `http://${host}/api/img/Answers/${result[0].nameFile}`});
  });

  c.end();
});

// Обработка на вход пользователя

app.post('/login', function(request, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select * from Users where email = '${request.body.email}' and password = '${request.body.password}'`, function (_, result) {
    response.status(200);
    if (result.length != 0) {
      response.send({name: result[0].name, userId: result[0].userId});
    } else {
      response.send({name: '', userId: null});
    }
  })

  c.end();
});

// Проверка уникальности пользователя при регистрации

app.get('/signup/check', function(request, response){
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select * from Users where email = '${request.query.email}'`, function (_, result) {
    if (result.length == 0){
      response.send({isUser: false});
    } else {
      response.send({isUser: true});
    }
  });

  c.end();
});

// Получаем уникальный id для пользователя

app.get('/signup/getid', function(_, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query('select max(userId) as count from Users', function (_, result) {
    response.send({id: result[0].count + 1})
  });

  c.end();
})

// Получаем данные и регистируем пользователя

app.post('/signup', function(request, response){
  response.status(200);

  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  fetch(`http://${host}/api/signup/check?email=${request.body.email}`, {method: 'GET'})
    .then(res => res.json())
    .then(function (data) {
      console.log(data.isUser);
      if (data.isUser) {
        response.send({userId: null, name: null});
      } else {
        fetch(`http://${host}/api/signup/getid`, {method: 'GET'})
          .then(res => res.json())
          .then(function (data) {
            const с = new Connection();
          
            с.connect(function (error) {
              if(error){
                console.log(new Error(error));
              }
            });

            с.query(`insert into Users set userId = ${data.id}, name = '${request.body.name}', donetask_ids = '', password = '${request.body.password}', email = '${request.body.email}'`, function (err) {
              console.log(err);
              response.send({userId: data.id, name: request.body.name});
            })
          
            с.end();
          })
      }
    })
});

// Получаем список отмеченных пользователем заданий

app.get('/getdoneid', function(request, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select donetask_ids from Users where userId = ${Number(request.query.userid)}`, function (err, result) {
    if (err) {
      console.log(new Error(err));
      return
    }
    if (result[0].donetask_ids.length != 0) {
      let ids = result[0].donetask_ids.split('/').map(elem => String(elem));
      response.send({ids: ids});
    } else {
      response.send({ids: []});
    }
  });

  c.end();
});

// Добавляем новое задание в список отмеченных пользователем заданий

app.post('/addtask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  fetch(`http://${host}/api/getdoneid?userid=${request.body.userId}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let newData = data.ids;
      if (newData.length == 0) newData = [request.body.id].join('/') 
      else {
        newData.push(request.body.id);
        newData = newData.join('/');
      }
      c.query(`update Users set donetask_ids = '${newData}' where userId = ${request.body.userId}`, function(err, result) {
        if (err) {
          console.log(err);
          response.send({res: 'not success'});
        } else {
          response.send({res: 'success'})
        }
      });
      c.end();
    });
});

// Убираем отметку с задания

app.post('/removetask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  fetch(`http://${host}/api/getdoneid?userid=${request.body.userId}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let newData = data.ids.filter(i => Number(i) != Number(request.body.id)).join('/')
      c.query(`update Users set donetask_ids = '${newData}' where userId = ${request.body.userId}`, function(err, _) {
        if (err) {
          console.log(err);
          response.send({res: 'not success'});
        } else {
          response.send({res: 'success'});
        }
      });
      c.end();
    })
});

app.delete('/removeuser', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  if (request.body.email != '') {
    c.query(`delete from Users where email = '${request.body.email}'`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    })
  } else if (request.body.userid != '') {
    c.query(`delete from Users where userid = ${request.body.userid}`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    })
  } else {
    response.status(500);
  }
  c.end();
});

app.get('/getusers', function(_, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query('select * from Users', function(_, result) {
    response.send(result);
  })

  c.end();
})

app.post('/takerights', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  if (request.body.userid != '') {
    c.query(`update Users set isAdmin = true where userId = ${request.body.userid}`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    });
  } else if (request.body.email != '') {
    c.query(`update Users set isAdmin = true where email = '${request.body.email}'`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    });
  } else {
    response.send(500);
  }

  c.end();
})

app.post('/recallrights', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  if (request.body.userid != '') {
    c.query(`update Users set isAdmin = false where userId = ${request.body.userid}`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    });
  } else if (request.body.email != '') {
    c.query(`update Users set isAdmin = false where email = '${request.body.email}'`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'})
      }
    });
  } else {
    response.send(500);
  }
  
  c.end();
})

app.get('/checkrighs', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select isAdmin from Users where userId = ${request.query.userid}`, function(e, result) {
    if (e || result.length == 0) {
      console.log("error: " + toString(e))
      response.status(500);
    } else {
      response.send({isAdmin: result[0].isAdmin == '1'});
    }
  });

  c.end();
});

app.get('/gettasks', function(_, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
      if (error) {
        console.log(new Error(error));
      }
    }
  )
  c.query('select * from Tasks', function(_, result) {
    response.send(result);
  })

  c.end()
});

app.get('/getanswers', function(_, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const c = new Connection();
  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query('select * from Answers', function(_, result) {
    response.send(result);
  })

  c.end();
});

app.post('/addnewtask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let tags = [];

  for (let i = 1; i <= Object.keys(request.body).length - 4; i++) {
    tags.push(request.body[`tag${i}`]);
  }

  tags = tags.join('/');

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`insert into Tasks set _id = ${request.body._id}, class = ${request.body.class}, level = ${request.body.level}, tags = '${tags}'`, function(e, _) {
    if (e) {
      console.log(e)
      response.send({res: 'not success'});
    } else {
      response.send({res: 'success'});
    }
  })

  c.end();
});

app.post('/addnewtaskfile', upload.array('files[]'), function (request, response) {
  response.set({
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  console.log(request.body);
  response.status(200);
  response.send({res: 'success'});
});

app.delete('/removetaskadmin', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let strId = getStrId(request.body.id);

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`delete from Tasks where _id = ${request.body.id}`, function(e, _) {
    if (e) {
      console.log(e)
      response.send({res: 'not success'});
    } else {
      response.send({res: 'success'})
    }
  });

  c.end();

  fs.unlink(`./img/Tasks/ID${strId}.jpg`, (err) => {
    if (err) console.log(new Error(err));
  });

  async function check() {
    for (let i = 1; i < 4; i++) {
      let r = await fetch(`http://${host}/api/img/Tasks/ID${strId}(${i}).jpg`);
      if (r.status == 200) {
        fs.unlink(`./img/Tasks/ID${strId}(${i}).jpg`, (err) => {
          if (err) console.log(new Error(err));
        });
      }
      else break;
    }
  }

  check();
});

app.post('/edittask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let tags

  if (request.body['tag1']) {
    tags = [];
  
    for (let i = 1; i <= Object.keys(request.body).length - 4; i++) {
      tags.push(request.body[`tag${i}`]);
    }
  
    tags = tags.join('/');
  } else {
    tags = false;
  }

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  if (request.body.class || request.body.level || tags) {
    c.query(`update Tasks set ${request.body.class ? `class = ${request.body.class}${tags || request.body.level ? ',' : ''} ` : ''}${request.body.level ? `level = ${request.body.level}${tags ? ',' : ''} ` : ''}${tags ? `tags = '${tags}' ` : ''}where _id = ${request.body._id}`, function(e, _) {
      if (e) {
        console.log(e)
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'});
      }
    });
  } else response.send({res: 'success'});
  
  c.end();
});

app.post('/edittaskfile', upload.array('files[]'), function (request, response) {
  response.set({
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let strId = getStrId(request.body._id);

  let n = request.files.length;

  async function check() {
    let r = await fetch(`http://${host}/api/img/Tasks/ID${strId}(${n}).jpg`);
    if (r.status == 200) {
      for (let i = n; n < 4; i++) {
        let nr = await fetch(`http://${host}/api/img/Tasks/ID${strId}(${i}).jpg`);
        if (nr.status == 200) {
          fs.unlink(`./img/Tasks/ID${strId}(${i}).jpg`, (err) => {
            if (err) console.log(new Error(err));
          });
        }
        else break;
      }
    }
  }

  check();

  response.status(200);
  response.send({res: 'success'});
});

app.post('/addanswer', function(_, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  response.send({res: 'success'});
});

app.post('/addanswerfile', upload.single('file'), function(request, response) {
  response.set({
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  response.status(200);
  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`insert into Answers set nameFile = '${request.file.filename}'`, function(e, _) {
    if (e) {
      console.log(e)
      response.send({res: 'not success'});
    } else {
      response.send({res: 'success'});
    }
  })

  c.end();
})

app.delete('/removeanswer', function(request, response){
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let strId = getStrId(request.body.id);

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select nameFile from Answers where nameFile like '%${strId}.pdf'`, function (e, result) {
    if (e) {response.send({res: 'not success'}); return;}
    c.end();
    const nc = new Connection();
    nc.connect(function (error) {
      if (error) {
        console.log(new Error(error));
      }
    });
    fs.unlink(`./img/Answers/${result[0].nameFile}`, function (err) {
      if (err) console.log(new Error(err));
    });
    nc.query(`delete from Answers where nameFile like '%${strId}.pdf' `, function(e, _) {
      if (e) {
        console.log(e);
        response.send({res: 'not success'});
      } else {
        response.send({res: 'success'});
      }
    });
    nc.end();
  });
});

app.post('/editanswer', function(request, response){
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let strId = getStrId(request.body.id);

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`select nameFile from Answers where nameFile like '%${strId}.pdf'`, function(e, result) {
    if (e) {
      console.log(e)
      response.send({res: 'not success'});
    } else {
      fs.unlink(`./img/Answers/${result[0].nameFile}`, function (err) {
        if (err) console.log(new Error(err));
      });
      response.send({res: 'success'});
    }
  });

  c.end();
});

app.post('/editanswerfile', upload.single('file'), function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  let strId = getStrId(request.body.id);

  const c = new Connection();

  c.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  c.query(`update Answers set nameFile = '${request.file.filename}' where nameFile like '%${strId}.pdf'`, function(e, _) {
    if (e) {
      console.log(e)
      response.send({res: 'not success'});
    } else {
      response.send({res: 'success'});
    
  }});

  c.end();
})

app.listen(5000);