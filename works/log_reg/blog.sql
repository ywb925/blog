-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 01 月 27 日 03:43
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `blog_user`
--

CREATE TABLE `blog_user` (
  `id` mediumint(8) NOT NULL,
  `user` varchar(20) character set utf8 NOT NULL,
  `pass` char(40) character set utf8 NOT NULL,
  `ans` varchar(200) character set utf8 NOT NULL,
  `ques` varchar(200) character set utf8 NOT NULL,
  `email` varchar(200) character set utf8 NOT NULL,
  `birthday` date NOT NULL,
  `ps` varchar(200) character set utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 导出表中的数据 `blog_user`
--

INSERT INTO `blog_user` (`id`, `user`, `pass`, `ans`, `ques`, `email`, `birthday`, `ps`) VALUES
(0, 'vboy', '370194ff6e0f93a7432e16cc9badd9427e8b4e13', '湖北', '3', 'vnoy925@163.com', '1991-09-25', '无');

