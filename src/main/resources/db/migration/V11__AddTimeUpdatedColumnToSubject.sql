ALTER TABLE `subject` ADD COLUMN `time_updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER `timestamp`;