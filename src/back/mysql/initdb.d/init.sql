DROP DATABASE IF EXISTS realestate;
CREATE DATABASE realestate;
USE realestate;
DROP TABLE IF EXISTS realestates;

CREATE TABLE realestates (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    realestate_id INT,
    name TEXT NOT NULL,
    property_type TEXT NOT NULL,
    area DOUBLE NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    price INT,
    rent_price INT,
    room_count INT,
    floar_plan TEXT,
    year_builds INT,
    floar_part INT,
    neighbor TEXT,
    facility TEXT);

INSERT INTO realestates (realestate_id, name, property_type, area, latitude, longitude, price, rent_price, room_count, floar_plan, year_builds, floar_part, neighbor, facility)
VALUES (1, "本田の家", "マンション", 100.0, 37.5128064, 139.9425662, 45000, 45000, 1, "DK", 2000, 2, "まんまーじゃ", "トイレ");
