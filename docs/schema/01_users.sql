-- Users table
-- Stores core user information and authentication details
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    preferences JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE
);

-- Index for email lookups during authentication
CREATE INDEX idx_users_email ON users(email);

-- User preferences table
-- Stores user-specific settings and preferences
CREATE TABLE user_preferences (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    theme VARCHAR(20) DEFAULT 'light',
    email_notifications BOOLEAN DEFAULT true,
    default_view VARCHAR(50) DEFAULT 'today',
    timezone VARCHAR(100) DEFAULT 'UTC',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Comments:
-- 1. UUID is used instead of serial for better distribution and security
-- 2. Email is indexed for fast login lookups
-- 3. Preferences can be stored both in JSONB for flexibility and in a separate table for frequently accessed settings
-- 4. Timestamps use timezone for global user base
-- 5. Cascading delete ensures no orphaned preferences