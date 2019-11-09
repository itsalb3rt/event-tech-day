-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-11-2019 a las 22:40:32
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `event_tech_day`
--
CREATE DATABASE IF NOT EXISTS `event_tech_day` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `event_tech_day`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `speakers`
--

CREATE TABLE `speakers` (
  `id` int(11) NOT NULL,
  `name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `github_account` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `speakers`
--

INSERT INTO `speakers` (`id`, `name`, `email`, `github_account`, `createdAt`, `updatedAt`) VALUES
(2, 'Albert Hidalgo', 'itsalb3rt@gmail.com', 'itsalb3rt', '2019-11-09 21:39:48', '0000-00-00 00:00:00'),
(3, 'Albert Hidalgo', 'itsalb3rt@gmail.com', 'itsalb3rt', '2019-11-09 21:40:08', '2019-11-09 21:40:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talks`
--

CREATE TABLE `talks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tags` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_speaker` int(11) NOT NULL,
  `time` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `talks`
--

INSERT INTO `talks` (`id`, `name`, `tags`, `id_speaker`, `time`, `createdAt`, `updatedAt`) VALUES
(3, 'Title', 'foo,bar', 1, '08:00 AM to 09:00 AM', '2019-11-09 20:49:24', '2019-11-09 20:49:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `speakers`
--
ALTER TABLE `speakers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `talks`
--
ALTER TABLE `talks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `speakers`
--
ALTER TABLE `speakers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `talks`
--
ALTER TABLE `talks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
