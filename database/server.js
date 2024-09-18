const mysql2 = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const e = require('express');


const app = express();

function createTagsQuery(tagsStroke){
  let queryPart = '';
  let tags = tagsStroke.split(',');
  for (let tag of tags){
    queryPart= queryPart.concat(` and tags like '%${tag}%'`);
  }
  return queryPart;
}

// Получаем список заданий из базы данных по введенным критериям

app.get('/', function(request, response) {
    response.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    })

    const connection = mysql2.createConnection({
        host: 'localhost',
        user: 'AliBaBa',
        password: 'A9l0E6x0',
        database: 'OlimpEducation'
    });
    
    connection.connect(function(error){
      if(error){
        console.log(new Error(error));
      }
    });

    if (request.query.class != '0' && request.query.level != '0' && request.query.tags != ''){
      connection.query(`select * from Tasks where class = ${request.query.class} and level = ${request.query.level.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level == '0' && request.query.tags == ''){
      connection.query(`select * from Tasks order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level == '0' && request.query.tags != ''){
      connection.query(`select * from Tasks where class = ${request.query.class.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level == '0' && request.query.tags != ''){
      connection.query(`select * from Tasks where class > ${request.query.class.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class == '0' && request.query.level != '0' && request.query.tags != ''){
      connection.query(`select * from Tasks where level = ${request.query.level.concat(createTagsQuery(request.query.tags))} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level == '0' && request.query.tags == ''){
      connection.query(`select * from Tasks where level = ${request.query.level} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else if (request.query.class != '0' && request.query.level != '0' && request.query.tags == ''){
      connection.query(`select * from Tasks where class = ${request.query.class} and level = ${request.query.level} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    } else {
      connection.query(`select * from Tasks where class = ${request.query.class} order by _id`, 
        function(_, results) {
            response.send(results);
        }
      )
    }
    // console.log(`select * from Tasks where class = ${request.query.class} and level = ${request.query.level.concat(createTagsQuery(request.query.tags))}`)
    
    connection.end();
})

// Получаем дефолтный список задач (до выбор критериев)

app.get('/default', function(request, response){
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
  
  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'OlimpEducation'
  });
  
  connection.connect(function(error){
    if(error){
      console.log(error);
    }
  });
  
  connection.query(`select * from Tasks where _id < ${Number(request.query.amount) + 1}`, 
      function(_, results) {
          response.send(results);
      }
  );
  connection.end();
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

  response.send({url: `http://localhost:3000/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8/ID${id}.jpg`});
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

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'OlimpEducation'
  });

  connection.connect(function(error){
    if(error){
      console.log(new Error(error));
    } else {
    }
  });

  connection.query(`select nameFile from Answers where nameFile like "%${id}.pdf"`, function(_, result) {
    response.send({url: `http://localhost:3000/Answers/${result[0].nameFile}`});
  });

  connection.end();
});

app.use(bodyParser.json());
app.use(cors());

// Обработка на вход пользователя

app.post('/login', function(request, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'OlimpEducation'
  });

  connection.connect(function (error) {
    if(error){
      console.log(new Error(error));
    } 
  }),

  connection.query(`select * from Users where email = '${request.body.email}' and password = '${request.body.password}'`, function (_, result) {
    response.status(200);
    if (result.length != 0) {
      response.send({name: result[0].name, userId: result[0].userId});
    } else {
      response.send({name: '', userId: null});
    }
  })

  connection.end();
});

// Проверка уникальности пользователя при регистрации

app.get('/signup/check', function(request, response){
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'Olimpeducation'
  });

  connection.connect(function (error) {
    if(error) {
      console.log(new Error(error));
    }
  });

  connection.query(`select * from Users where email = '${request.query.email}'`, function (_, result) {
    if (result.length == 0){
      response.send({isUser: false});
    } else {
      response.send({isUser: true});
    }
  })
});

// Получаем уникальный id для пользователя

app.get('/signup/getid', function(_, response) {
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'Olimpeducation'
  });

  connection.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  connection.query('select max(userId) as count from Users', function (_, result) {
    response.send({id: result[0].count + 1})
  });

  connection.end();
})

// Получаем данные и регистируем пользователя

app.post('/signup', function(request, response){
  response.status(200);

  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  fetch(`http://localhost:5000/signup/check?email=${request.body.email}`, {method: 'GET'})
    .then(res => res.json())
    .then(function (data) {
      console.log(data.isUser);
      if (data.isUser) {
        response.send({userId: null, name: null});
      } else {
        fetch('http://localhost:5000/signup/getid', {method: 'GET'})
          .then(res => res.json())
          .then(function (data) {
            const connection = mysql2.createConnection({
              host: 'localhost',
              user: 'AliBaBa',
              password: 'A9l0E6x0',
              database: 'OlimpEducation'
            });
          
            connection.connect(function (error) {
              if(error){
                console.log(new Error(error));
              }
            });

            connection.query(`insert into Users set userId = ${data.id}, name = '${request.body.name}', donetask_ids = '', password = '${request.body.password}', email = '${request.body.email}'`, function (err) {
              console.log(err);
              response.send({userId: data.id, name: request.body.name});
            })
          
            connection.end();
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

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'Olimpeducation'
  })

  connection.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  })

  connection.query(`select donetask_ids from Users where userId = ${Number(request.query.userid)}`, function (err, result) {
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

  connection.end();
});

// Добавляем новое задание в список отмеченных пользователем заданий

app.post('/addtask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'Olimpeducation'
  })

  connection.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  fetch(`http://localhost:5000/getdoneid?userid=${request.body.userId}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let newData = data.ids;
      if (newData.length == 0) newData = [request.body.id].join('/') 
      else {
        newData.push(request.body.id);
        newData = newData.join('/');
      }
      connection.query(`update Users set donetask_ids = '${newData}' where userId = ${request.body.userId}`, function(err, result) {
        if (err) {
          console.log(err);
          response.send({res: 'not success'});
        } else {
          response.send({res: 'success'})
        }
      });
      connection.end();
    });
});

// Убираем отметку с задания

app.post('/removetask', function(request, response) {
  response.status(200);
  response.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })

  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'AliBaBa',
    password: 'A9l0E6x0',
    database: 'Olimpeducation'
  })

  connection.connect(function (error) {
    if (error) {
      console.log(new Error(error));
    }
  });

  fetch(`http://localhost:5000/getdoneid?userid=${request.body.userId}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let newData = data.ids.filter(i => Number(i) != Number(request.body.id)).join('/')
      connection.query(`update Users set donetask_ids = '${newData}' where userId = ${request.body.userId}`, function(err, result) {
        if (err) {
          console.log(err);
          response.send({res: 'not success'});
        } else {
          response.send({res: 'success'});
        }
      });
      connection.end();
    })
})

app.listen(5000);