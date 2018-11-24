CREATE TABLE person
(
     id SERIAL PRIMARY KEY
   , fName VARCHAR(50) NOT NULL
   , lName VARCHAR(50) NOT NULL
   , birth SMALLINT NOT NULL
);

CREATE TABLE family 
(
     id SERIAL PRIMARY KEY
   , mom_id INT REFERENCES person(id) NOT NULL
   , dad_id INT REFERENCES person(id) NOT NULL
   , kid_id INT REFERENCES person(id) NOT NULL
);

INSERT INTO person(fName, lName, birth)
Values 
(
   'Thomas', 'Burr', 1995
),
(
   'Josh', 'Reed', 1982
),
(
   'Shawn', 'Ashton', 1996
);

INSERT INTO person(fName, lName, birth)
Values 
(
   'Rachel', 'Chang', 1995
);