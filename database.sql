DROP SCHEMA IF EXISTS `projet-transverse-db`;

CREATE DATABASE
    `projet-transverse-db`
    /*!40100 DEFAULT CHARACTER SET utf8mb4 */
;

USE `projet-transverse-db`;

CREATE TABLE
    `questions` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `category` varchar(45) NOT NULL,
        `description` tinytext DEFAULT NULL,
        `poids` int(11) NOT NULL DEFAULT 0,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE
    `users` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(45) NOT NULL,
        `firstname` varchar(45) DEFAULT NULL,
        `email` varchar(45) DEFAULT NULL,
        `password` varchar(64) DEFAULT NULL,
        `schoolyear` varchar(45) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE
    `users_questions_history` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `id_user` int(11) NOT NULL,
        `id_question` int(11) NOT NULL,
        `score` int(11) NOT NULL,
        PRIMARY KEY (`id`),
        KEY `fk_questions_idx` (`id_question`),
        KEY `fk_users_idx` (`id_user`),
        CONSTRAINT `fk_questions` FOREIGN KEY (`id_question`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;