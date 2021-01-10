-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2021 at 05:50 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(20) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `id_store` int(11) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `photo`, `id_store`, `createAt`, `isActive`) VALUES
(1, 'Kuota 10GB', 50000, 'photo-1610262575223-web_hi_res_512.png', 1, '2021-01-10 07:09:35', 1),
(2, 'Kuota 25 GB', 130000, '/images/photo-1610276681371-nodeJS.png', 1, '2021-01-10 07:12:59', 1),
(3, 'Snack Original', 9000, 'photo-1610277079710-javascript.png', 3, '2021-01-10 11:11:19', 1),
(4, 'Snack Kentang', 15000, 'photo-1610284069288-dunk 2.jpg', 3, '2021-01-10 13:07:49', 1),
(5, 'Snack Burger', 21000, 'photo-1610284107227-dunk 2.jpg', 3, '2021-01-10 13:08:27', 1),
(6, 'Snack Ayam', 13000, 'photo-1610284161983-dunk.png', 3, '2021-01-10 13:09:21', 1),
(7, 'Combo Snack', 89000, 'photo-1610284211990-bell.png', 3, '2021-01-10 13:10:11', 1),
(8, 'Double Combo Snack', 150000, 'photo-1610284258045-bell.png', 3, '2021-01-10 13:10:58', 1),
(9, 'Deluxe Snack', 190000, 'photo-1610284304516-Group 60.png', 3, '2021-01-10 13:11:44', 1),
(10, 'Unlimited Kuota', 115000, 'photo-1610285053798-Group 60.png', 1, '2021-01-10 13:24:14', 1),
(11, 'Unlimited Kuota 4G', 250000, 'photo-1610285078837-web_hi_res_512.png', 1, '2021-01-10 13:24:39', 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_buyer` int(11) NOT NULL,
  `id_seller` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `id_product`, `id_buyer`, `id_seller`, `amount`, `value`, `notes`, `createAt`, `isActive`) VALUES
(1, 1, 3, 1, 100000, 2, 'beli snack.', '2021-01-10 22:39:30', 1),
(2, 3, 3, 3, 100000, 2, 'beli combo snack', '2021-01-10 23:35:10', 1),
(3, 2, 3, 1, 50000, 2, 'beli quota tambahan.', '2021-01-10 23:38:17', 0),
(4, 2, 3, 1, 50000, 1, 'beli quota tambahan.', '2021-01-10 23:48:00', 1),
(5, 3, 3, 3, 100000, 3, 'beli snack', '2021-01-10 23:48:23', 1),
(6, 3, 4, 3, 100000, 3, 'beli snack', '2021-01-10 23:49:53', 1),
(7, 1, 4, 1, 10000, 1, 'beli quota', '2021-01-10 23:50:12', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `balance` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `balance`, `location`, `isActive`) VALUES
(1, 'Hanif Maghfur', '$2b$10$wmZ9drk4U68z8Suh2qNYe.ZlBeZO9SevAFVryUxgyZ215aTUxjUVm', 'hanif@gmail.com', 0, 'Palembang', 1),
(3, 'Annisa Nadhifa', '$2b$10$9lVslc6naGIhL7MQ4X0X3.J/RNaq.a3OyhZWNnNqPceYDKmp1MaaO', 'annisa@gmail.com', 0, 'Jakarta', 1),
(4, 'Ibrahim Ahnaf', '$2b$10$CYswIfb14SkLGKEDrqj5nOTXVFN5FtTNeIyvSQ7gQDvGWqxZGLEVm', 'ibrahim@gmail.com', 0, 'Yogyakarta', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_store` (`id_store`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_buyer` (`id_buyer`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_seller` (`id_seller`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_store`) REFERENCES `users` (`id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`id_buyer`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `transaction_ibfk_4` FOREIGN KEY (`id_seller`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
