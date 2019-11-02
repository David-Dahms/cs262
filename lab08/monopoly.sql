--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden, edited for Lab7 by David Dahms (dd38)
-- @version Summer, 2015, edited by dd38, Fall, 2019
--
 
-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS House;
DROP TABLE IF EXISTS House;
DROP TABLE IF EXISTS Hotel;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS PlayerStatus;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
 
 
-- Create the schema.
CREATE TABLE Game (
    ID integer PRIMARY KEY, 
    time timestamp
    );
 
CREATE TABLE Player (
    ID integer PRIMARY KEY, 
    emailAddress varchar(50) NOT NULL,
    name varchar(50)
    );
 
CREATE TABLE PlayerGame (
    gameID integer REFERENCES Game(ID), 
    playerID integer REFERENCES Player(ID),
    score integer
    );
 
-- dd38
CREATE TABLE PlayerStatus (
    playerID integer REFERENCES Player(ID),
    location integer,
    cash integer
    );
 
-- dd38
CREATE TABLE Property (
    ID integer PRIMARY KEY,
    gameID integer REFERENCES Game(ID), 
    playerID integer REFERENCES Player(ID)
    );
 
-- dd38
CREATE TABLE House (
    propertyID integer REFERENCES Property(ID),
    playerID integer REFERENCES Player(ID)
    );
 
-- dd38
CREATE TABLE Hotel (
    propertyID integer REFERENCES Property(ID),
    playerID integer REFERENCES Player(ID)
    );
 
 
-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
-- below added by dd38
GRANT SELECT ON PlayerStatus TO PUBLIC; 
GRANT SELECT ON Property TO PUBLIC; 
GRANT SELECT ON House TO PUBLIC; 
GRANT SELECT ON Hotel TO PUBLIC; 
 
 
-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');
 
INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');
 
INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);
 
-- below added by dd38
INSERT INTO PlayerStatus VALUES (1, 0, 300); 
INSERT INTO PlayerStatus VALUES (2, 5, 1000);
 
INSERT INTO Property VALUES (1, 2, 1);
INSERT INTO Property VALUES (2, 1, 3);
 
INSERT INTO House VALUES (1, 2);
INSERT INTO House VALUES (2, 3);
 
INSERT INTO Hotel VALUES (1, 2);
INSERT INTO Hotel VALUES (2, 1);
 
-- lab08 --
 
-- --8.1 (a). Retrieve a list of all the games, ordered by date with the most recent game coming first. --
-- SELECT *
-- FROM Game
-- ORDER BY time DESC;
 
 
-- 8.1 (b). Retrieve all the games that occurred in the past week.  --
-- SELECT *
-- FROM Game
-- WHERE time BETWEEN LOCALTIMESTAMP - INTERVAL '7 days' AND LOCALTIMESTAMP;
 
 
-- --8.1 (c). Retrieve a list of players who have (non-NULL) names. --
-- SELECT *
-- FROM Player
-- WHERE name IS NOT NULL;
 
 
-- --8.1 (d). Retrieve a list of IDs for players who have some game score larger than 2000. --
-- SELECT *
-- FROM PlayerGame
-- WHERE score > 2000;
 
 
-- --8.1 (e). Retrieve a list of players who have GMail accounts. --
-- SELECT * 
-- FROM Player
-- WHERE emailAddress LIKE '%gmail%';
 
 
-- --8.2 (a). Retrieve all “The King”’s game scores in decreasing order. --
-- SELECT score
-- FROM Player, PlayerGame
-- WHERE Player.ID = PlayerGame.playerID AND Player.name = 'The King'
-- ORDER BY score DESC;
 
 
-- --8.2 (b).  Retrieve the name of the winner of the game played on 2006-06-28 13:20:00. --
-- SELECT name
-- FROM Game, PlayerGame, Player
-- WHERE Game.ID = PlayerGame.gameID 
--  AND Game.time = '2006-06-28 13:20:00'
--  AND PlayerGame.playerID = Player.ID
-- LIMIT 1;
 
 
--8.3 (c). So what does that P1.ID < P2.ID clause do in the last example query? --
-- The P1.ID < P2.ID clause is present in the last example query because it differentiates two players who have the same name, but do not share the same ID number (because they are two different players).
 
 
--8.4 (d). The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself? -- 
-- A situation in which you may want to join a table to itself is when you would want to compare particular rows or columns agaisnt others within the same table.

