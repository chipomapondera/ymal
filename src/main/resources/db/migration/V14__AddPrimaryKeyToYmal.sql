ALTER TABLE ymal_product CHANGE ymal_id id INTEGER NOT NULL;
ALTER TABLE ymal_product ADD COLUMN ymal_id INTEGER;
UPDATE ymal_product SET ymal_id = id;
ALTER TABLE ymal_product MODIFY ymal_id INTEGER NOT NULL;