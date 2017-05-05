-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-05 10:14:31
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
(35, 'ea97d46210d10c7493dadc380bc658b9', '888888', 0, '2017-05-05 09:49:20'),
(34, '474a0b142987b65be6257a757e9f7aca', '777777', 1, '2017-05-05 09:49:16'),
(30, '941ac4a68a61c87860ffb5857073bace', '333333', 1, '2017-05-05 09:49:05'),
(31, '543b0724424cfd4b524a7b3540bde5f1', '444444', 1, '2017-05-05 09:49:08'),
(33, '267bfa9230461baf114570ec745b8a0a', '666666', 0, '2017-05-05 09:49:13'),
(29, '2f09a57302f69146b55a5c11a9847c47', '222222', 1, '2017-05-05 09:49:02'),
(28, '568c57932ec688cbcc3768e147f0a048', '111111', 1, '2017-05-05 09:48:58'),
(36, '1e2dcff45689a3a04e360cc27a259cb9', '999999', 0, '2017-05-05 09:49:23');

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
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
