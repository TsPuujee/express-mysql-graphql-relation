/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : mysql-5052-0.cloudclusters.net:10009
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 01/11/2019 13:56:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for authors
-- ----------------------------
DROP TABLE IF EXISTS `authors`;
CREATE TABLE `authors`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of authors
-- ----------------------------
INSERT INTO `authors` VALUES (1, 'puujee', '2019-11-01');
INSERT INTO `authors` VALUES (2, 'Jules Verne', '2019-11-01');
INSERT INTO `authors` VALUES (3, 'Jules Verne1', '2019-11-01');
INSERT INTO `authors` VALUES (4, 'Jules Verne1', '2019-11-01');
INSERT INTO `authors` VALUES (5, 'Jules Verne13', '2019-11-01');

SET FOREIGN_KEY_CHECKS = 1;
