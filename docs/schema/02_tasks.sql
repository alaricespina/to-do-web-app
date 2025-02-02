-- Tasks table
-- Core table for storing task information
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'todo',
    priority VARCHAR(20) DEFAULT 'medium',
    due_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE, -- For soft deletes
    recurring_rule JSONB -- Stores recurring task patterns
);

-- Indexes for common queries and relationships
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_deleted_at ON tasks(deleted_at);

-- Task categories table
-- Allows users to organize tasks into categories
CREATE TABLE task_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7), -- Stores hex color code
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure unique category names per user
CREATE UNIQUE INDEX idx_task_categories_user_name ON task_categories(user_id, name);

-- Task labels table
-- Provides flexible tagging system for tasks
CREATE TABLE task_labels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7), -- Stores hex color code
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure unique label names per user
CREATE UNIQUE INDEX idx_task_labels_user_name ON task_labels(user_id, name);

-- Junction table for task-category relationships
-- Allows tasks to belong to multiple categories
CREATE TABLE task_category_mappings (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    category_id UUID REFERENCES task_categories(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, category_id)
);

-- Junction table for task-label relationships
-- Allows tasks to have multiple labels
CREATE TABLE task_label_mappings (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    label_id UUID REFERENCES task_labels(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, label_id)
);

-- Attachments table
-- Stores metadata for files attached to tasks
CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    type VARCHAR(100), -- MIME type
    size BIGINT, -- File size in bytes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for querying attachments by task
CREATE INDEX idx_attachments_task_id ON attachments(task_id);

-- Comments:
-- 1. Soft deletes implemented using deleted_at column
-- 2. Recurring rules stored as JSONB for flexibility
-- 3. Categories and labels are user-specific
-- 4. Junction tables enable many-to-many relationships
-- 5. Cascading deletes maintain referential integrity
-- 6. Composite indexes optimize common queries
-- 7. File metadata separated from task data
-- 8. Color codes stored in standard hex format (#RRGGBB)