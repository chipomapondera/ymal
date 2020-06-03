ALTER TABLE ymal_product ADD COLUMN version_id INTEGER AFTER timestamp;
ALTER TABLE ymal_product ADD COLUMN version_action ENUM('create', 'update', 'delete') AFTER version_id;
