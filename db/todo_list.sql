-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-08 09:36:30
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_todos`
--

-- --------------------------------------------------------

--
-- 表的结构 `todo_list`
--

CREATE TABLE `todo_list` (
  `_id` int(11) NOT NULL,
  `uid` tinytext NOT NULL,
  `todo_name` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='todo列表';

--
-- 转存表中的数据 `todo_list`
--

INSERT INTO `todo_list` (`_id`, `uid`, `todo_name`, `status`, `date`) VALUES
(56, 'a98b17e6-08cb-4041-887c-667c14ce45b3', '7777', 0, '2017-05-08 09:27:15'),
(57, '236d45f3-8b42-463a-8c40-6060827f5b45', '8888', 0, '2017-05-08 09:27:19'),
(58, '25971c39-48cb-471f-96f8-5b5e5179c70f', '9999', 0, '2017-05-08 09:27:22'),
(50, '904c3487-9c48-4610-a2bd-af2e93fc7b41', '1111', 1, '2017-05-08 09:26:55'),
(51, '786ebe50-2b76-40f9-b2cf-3fee78b5445b', '2222', 1, '2017-05-08 09:26:59'),
(52, '3a14ce7e-28e9-47cf-9caa-01c7f2751769', '3333', 0, '2017-05-08 09:27:02'),
(53, '00c55af5-9d94-44a2-8d1a-c2e02a2ffcc4', '4444', 1, '2017-05-08 09:27:05'),
(54, 'a8c7a8dc-ea12-4e59-86a6-4baf8cd38f82', '5555', 0, '2017-05-08 09:27:08'),
(55, '6864bedb-b565-4c9b-8d45-8e760447b105', '6666', 0, '2017-05-08 09:27:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_list`
--
ALTER TABLE `todo_list`
  ADD UNIQUE KEY `id` (`_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
