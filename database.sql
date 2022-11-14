DROP SCHEMA `projet-transverse-db`; 
CREATE DATABASE `projet-transverse-db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `projet-transverse-db`;
CREATE TABLE `questions` (
  `id_question` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `description` tinytext DEFAULT NULL,
  `poids` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pwd` varchar(32) DEFAULT NULL,
  `schoolyear` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `users_questions_history` (
  `id_users_questions_history` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_question` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`id_users_questions_history`),
  KEY `fk_questions_idx` (`id_question`),
  KEY `fk_users_idx` (`id_user`),
  CONSTRAINT `fk_questions` FOREIGN KEY (`id_question`) REFERENCES `questions` (`id_question`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
