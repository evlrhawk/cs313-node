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

SELECT u.username AS USERNAME, c.category AS CATEGORY, b._limit AS LIMIT, e.spent AS SPENT, e.description AS DESCRIPTION FROM budget b
JOIN users u on b.user_id = u.id
JOIN categories c on b.category_id = c.id
JOIN expense e on b.user_id = e.user_id AND b.category_id = e.category_id
WHERE b.user_id = 1;

INSERT INTO expense(user_id, category_id, spent, description)
VALUES
  (1, 2, 635, '11/28/2018')
, (1, 5, 55, '11/14/2018')
, (1, 6, 25, '11/22/2018')
, (1, 7, 200, '11/25/2018')
, (1, 8, 33, '11/25/2018')
, (1, 9, 20, '11/27/2018')
, (1, 10, 139, '11/30/2018')
, (1, 11, 300, '11/20/2018')
, (1, 13, 20, '11/29/2018');

INSERT INTO budget(user_id, category_id, _limit)
VALUES
  (1, 2, 635)
, (1, 4, 200)
, (1, 5, 60)
, (1, 6, 75)
, (1, 7, 300)
, (1, 8, 50)
, (1, 9, 40)
, (1, 10, 140)
, (1, 11, 300)
, (1, 12, 50)
, (1, 13, 20);

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

-- will have to join expense and budget tables