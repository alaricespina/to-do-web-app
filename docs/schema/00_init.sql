-- Initialize database extensions and settings
-- This file should be run first before other schema files

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable case-insensitive text search
CREATE EXTENSION IF NOT EXISTS "citext";

-- Enable PostGIS for potential future geospatial features
-- CREATE EXTENSION IF NOT EXISTS "postgis";

-- Set timezone to UTC
SET timezone TO 'UTC';

-- Create custom types for constrained fields
CREATE TYPE task_status AS ENUM (
    'todo',
    'in_progress',
    'completed',
    'archived'
);

CREATE TYPE task_priority AS ENUM (
    'low',
    'medium',
    'high',
    'urgent'
);

-- Create custom functions

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Comments:
-- 1. Extensions are enabled first to support schema features
-- 2. Custom ENUM types ensure data consistency
-- 3. UTC timezone ensures consistent timestamps
-- 4. Auto-update function helps maintain updated_at columns
-- 5. File naming ensures it runs first (00_)

-- Note: This file contains database-wide settings and types
-- Individual table schemas are in separate numbered files