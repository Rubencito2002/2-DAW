-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2023 a las 15:16:25
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdcoches`
--
CREATE DATABASE IF NOT EXISTS `bdcoches` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bdcoches`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coche`
--

CREATE TABLE `coche` (
  `marca` varchar(20) NOT NULL,
  `modelo` varchar(20) NOT NULL,
  `matricula` varchar(20) NOT NULL,
  `kilometros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `coche`
--

INSERT INTO `coche` (`marca`, `modelo`, `matricula`, `kilometros`) VALUES
('Renault', 'Megane 1.5 dCi', '0123ABC', 135000),
('Peugeot', '5008 1.6 Style', '9876CBA', 221000),
('Seat', 'Ateca 1.1', '9753ZYQ', 21000),
('Skoda', 'Karoq Sportline', '8642MBA', 16500),
('Fiat', '500X', '9999LSD', 4700),
('Volkswagen', 'Tiguan 2.0 TDi', '0000MSN', 310000);
