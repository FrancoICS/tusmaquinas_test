--DROP DATABASE animales;
CREATE database animales;
\c animales

CREATE TABLE familia (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT
);

INSERT INTO familia (nombre, descripcion) VALUES
  ('Felidae', 'Familia de mamíferos carnívoros que incluye a los gatos.'),
  ('Canidae', 'Familia de mamíferos carnívoros que incluye a los perros y los lobos.'),
  ('Ursidae', 'Familia de mamíferos omnívoros que incluye a los osos.'),
  ('Equidae', 'Familia de mamíferos herbívoros que incluye a los caballos y los burros.'),
  ('Bovidae', 'Familia de mamíferos herbívoros que incluye a las vacas, los búfalos, los bisontes y otros animales similares.'),
  ('Camelidae', 'Familia de mamíferos herbívoros que incluye a los camellos y las llamas.'),
  ('Cervidae', 'Familia de mamíferos herbívoros que incluye a los ciervos y los alces.'),
  ('Elephantidae', 'Familia de mamíferos herbívoros que incluye a los elefantes.'),
  ('Hominidae', 'Familia de primates que incluye a los humanos.'),
  ('Pantheridae', 'Familia de mamíferos carnívoros que incluye a los leones, los tigres, los leopardos y otros grandes felinos.'),
  ('Suidae', 'Familia de mamíferos omnívoros que incluye a los cerdos y los jabalíes.'),
  ('Urodela', 'Familia de anfibios que incluye a las salamandras.'),
  ('Dendrobatidae', 'Familia de anfibios que incluye a las ranas venenosas.'),
  ('Cheloniidae', 'Familia de reptiles que incluye a las tortugas marinas.'),
  ('Pythonidae', 'Familia de reptiles que incluye a las serpientes pitón.'),
  ('Alligatoridae', 'Familia de reptiles que incluye a los caimanes y los cocodrilos.'),
  ('Chinchillidae', 'Familia de roedores que incluye a las chinchillas.'),
  ('Cricetidae', 'Familia de roedores que incluye a los hámsters, los ratones y las ratas.'),
  ('Castoridae', 'Familia de roedores que incluye a los castores.'),
  ('Leporidae', 'Familia de mamíferos herbívoros que incluye a los conejos.'),
  ('Sciuridae', 'Familia de roedores que incluye a las ardillas.'),
  ('Canariidae', 'Familia de aves que incluye a los canarios.'),
  ('Falconidae', 'Familia de aves que incluye a los halcones.');

CREATE TABLE raza (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  familia_id INTEGER NOT NULL REFERENCES familia(id)
);

INSERT INTO raza (nombre, descripcion, familia_id) VALUES
  ('Persa', 'Una raza de gato de la familia Felidae.', 1),
  ('Doberman', 'Una raza de perro de la familia Canidae.', 2),
  ('Panda', 'Una raza de oso de la familia Ursidae.', 3),
  ('Árabe', 'Una raza de caballo de la familia Equidae.', 4),
  ('Angus', 'Una raza de vaca de la familia Bovidae.', 5),
  ('Llama', 'Una raza de camélido de la familia Camelidae.', 6),
  ('Reno', 'Una raza de ciervo de la familia Cervidae.', 7),
  ('Africano', 'Una raza de elefante de la familia Elephantidae.', 8),
  ('Humano', 'Una raza de primate de la familia Hominidae.', 9),
  ('León', 'Una raza de gran felino de la familia Pantheridae.', 10),
  ('Jabalí', 'Una raza de cerdo salvaje de la familia Suidae.', 11),
  ('Salamandra común', 'Una raza de salamandra de la familia Urodela.', 12),
  ('Rana venenosa dorada', 'Una raza de rana venenosa de la familia Dendrobatidae.', 13),
  ('Tortuga verde', 'Una raza de tortuga marina de la familia Cheloniidae.', 14),
  ('Pitón real', 'Una raza de serpiente de la familia Pythonidae.', 15),
  ('Caimán negro', 'Una raza de caimán de la familia Alligatoridae.', 16),
  ('Chinchilla de cola larga', 'Una raza de chinchilla de la familia Chinchillidae.', 17),
  ('Rata de laboratorio', 'Una raza de rata de la familia Cricetidae.', 18),
  ('Castor europeo', 'Una raza de castor de la familia Castoridae.', 19),
  ('Conejo doméstico', 'Una raza de conejo de la familia Leporidae.', 20),
  ('Ardilla gris', 'Una raza de ardilla de la familia Sciuridae.', 21),
  ('Canario', 'Una raza de ave de la familia Canariidae.', 22);






CREATE TABLE mascota (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  raza_id INTEGER NOT NULL REFERENCES raza(id),
  familia_id INTEGER NOT NULL REFERENCES familia(id)
);

INSERT INTO mascota (nombre, fecha_nacimiento, raza_id, familia_id)
  VALUES ('Nala', '2019-06-05', 3, 2),
         ('Simba', '2018-11-12', 3, 2),
         ('Socks', '2020-01-15', 1, 1),
         ('Pippin', '2017-08-23', 2, 1),
         ('Garfield', '2016-05-10', 1, 1),
         ('Oreo', '2019-02-14', 2, 1),
         ('Buddy', '2015-11-18', 3, 2),
         ('Chloe', '2017-04-30', 2, 1),
         ('Rocky', '2018-08-08', 3, 2),
         ('Bella', '2020-03-20', 1, 1),
         ('Lucy', '2019-09-01', 2, 1),
         ('Luna', '2016-12-24', 1, 1),
         ('Zeus', '2015-07-07', 3, 2),
         ('Kiki', '2021-01-10', 2, 1),
         ('Toby', '2018-02-28', 3, 2),
         ('Oscar', '2017-05-15', 1, 1),
         ('Smokey', '2019-03-05', 2, 1),
         ('Gizmo', '2016-09-09', 1, 1),
         ('Milo', '2018-11-01', 3, 2),
         ('Daisy', '2017-06-18', 2, 1),
         ('Oliver', '2016-01-08', 1, 1),
         ('Ruby', '2020-07-12', 2, 1),
         ('Max', '2018-05-10', 3, 2),
         ('Charlie', '2019-02-28', 2, 1),
         ('Loki', '2017-07-03', 1, 1),
         ('Rex', '2020-01-10', 3, 2),
         ('Duke', '2016-04-18', 2, 1),
         ('Molly', '2018-11-22', 1, 1),
         ('Roxy', '2017-01-09', 2, 1),
         ('Rocky', '2019-06-05', 3, 2),
         ('Cooper', '2018-11-12', 3, 2),
         ('Sadie', '2020-01-15', 1, 1),
         ('Tucker', '2017-08-23', 2, 1),
         ('Charlie', '2016-05-10', 1, 1),
         ('Oscar', '2019-02-14', 2, 1),
         ('Teddy', '2015-11-18', 3, 2),
         ('Abby', '2017-04-30', 2, 1),
         ('Sasha', '2018-08-08', 3, 2),
         ('Coco', '2020-03-20', 1, 1),
         ('Jack', '2019-09-01', 2, 1),
         ('Bear', '2016-12-24', 1, 1),
         ('Maggie', '2015-07-07', 3, 2),
         ('Hazel', '2021-01-10', 2, 1),
         ('Jake', '2018-02-28', 3, 2),
         ('Bentley', '2017-05-15', 1, 1),
         ('Koda', '2019-03-05', 2, 1),
         ('Daisy', '2016-09-09', 1, 1),
         ('Louie', '2018-11-01', 3, 2),
         ('Ruby', '2017-06-18', 2, 1),
         ('Winston', '2016-01-08', 1, 1),
         ('Harley', '2020-07-12', 2, 1),
         ('Baxter', '2018-05-10', 3, 2),
         ('Luna', '2019-02-28', 2, 1);

CREATE TABLE persona (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo_electronico VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  mascota_id INTEGER NOT NULL REFERENCES mascota(id)
);

INSERT INTO persona (nombre, correo_electronico, telefono, mascota_id) VALUES
  ('Juan Rojas', 'juanperez@gmail.com', '+1-555-1234', 1),
  ('Mariela Romero', 'mariagarcia@yahoo.com', '+1-555-5678', 2),
  ('Pedro Cerda', 'pedrogomez@hotmail.com', '+1-555-9012', 3);