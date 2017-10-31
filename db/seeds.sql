USE burgers_db;

-- insert records into burgers table
INSERT INTO burgers (burger_name, devoured)
VALUES ("California Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Vegan Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Southwest Burger", false);

--check the records
SELECT * FROM burgers;
