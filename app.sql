psql postgres://qlzhubakvsxddl:063da13b3627101196b5a6ccf45b37567ad0947b9eb24ee2d4d1f0c1263eec65@ec2-54-83-8-246.compute-1.amazonaws.com:5432/daucfrg1unha9s


CREATE TABLE users
(
     id SERIAL PRIMARY KEY
   , username VARCHAR(60) UNIQUE NOT NULL 
   , pwd VARCHAR(100) NOT NULL
   , name VARCHAR(150) NOT NULL
);

CREATE TABLE categories
(
     id SERIAL PRIMARY KEY
   , category VARCHAR(50) NOT NULL
);

CREATE TABLE expense
(
     id SERIAL PRIMARY KEY
   , user_id INT REFERENCES users(id)
   , category_id INT REFERENCES categories(id)
   , spent INT NOT NULL
   , description TEXT
);

CREATE TABLE budget
(
     id SERIAL PRIMARY KEY
   , user_id INT REFERENCES users(id)
   , category_id INT REFERENCES categories(id)
   , _limit INT NOT NULL
);

INSERT INTO users (username, pwd, name)
VALUES 
(
    'admin'
  , 'admin'
  , 'evlrhawk'
);

INSERT INTO users (username, pwd, name)
VALUES 
(
    'Test'
  , 'Test'
  , 'Test'
);

INSERT INTO categories (category)
VALUES
  ('Emergency Fund')
, ('Rent')
, ('Mortgage')
, ('Savings')
, ('Utilities')
, ('Health Care')
, ('Groceries')
, ('Personal Care')
, ('Entertainment')
, ('Car Insurance')
, ('Car Payment')
, ('Auto Maintenance')
, ('Miscellaneous');

INSERT INTO budget (user_id, category_id, _limit)
VALUES
  (2, 2, 750)
, (2, 5, 80)
, (2, 10, 150)
, (2, 11, 300);

SELECT u.username, c.category, _limit FROM budget b
JOIN users u on b.user_id = u.id
JOIN categories c on b.category_id = c.id;

-- will have to join expense and budget tables