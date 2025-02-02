# Database Schema

## Tables Structure

### users
```sql
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

CREATE INDEX idx_users_email ON users(email);
```

### user_preferences
```sql
CREATE TABLE user_preferences (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    theme VARCHAR(20) DEFAULT 'light',
    email_notifications BOOLEAN DEFAULT true,
    default_view VARCHAR(50) DEFAULT 'today',
    timezone VARCHAR(100) DEFAULT 'UTC',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### tasks
```sql
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
    deleted_at TIMESTAMP WITH TIME ZONE,
    recurring_rule JSONB
);

CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_deleted_at ON tasks(deleted_at);
```

### task_categories
```sql
CREATE TABLE task_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_task_categories_user_name ON task_categories(user_id, name);
```

### task_labels
```sql
CREATE TABLE task_labels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_task_labels_user_name ON task_labels(user_id, name);
```

### task_category_mappings
```sql
CREATE TABLE task_category_mappings (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    category_id UUID REFERENCES task_categories(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, category_id)
);
```

### task_label_mappings
```sql
CREATE TABLE task_label_mappings (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    label_id UUID REFERENCES task_labels(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, label_id)
);
```

### attachments
```sql
CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    type VARCHAR(100),
    size BIGINT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_attachments_task_id ON attachments(task_id);
```

### sticky_notes
```sql
CREATE TABLE sticky_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    color VARCHAR(7) NOT NULL,
    position_x INTEGER NOT NULL,
    position_y INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sticky_notes_user_id ON sticky_notes(user_id);
```

### calendar_events
```sql
CREATE TABLE calendar_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    all_day BOOLEAN DEFAULT false,
    recurring_rule JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_calendar_events_user_id ON calendar_events(user_id);
CREATE INDEX idx_calendar_events_date_range ON calendar_events(start_date, end_date);
```

### audit_logs
```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    action VARCHAR(50) NOT NULL,
    changes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
```

## Database Design Notes

### Indexes
- Primary keys use UUID to avoid sequential ID issues
- Foreign key indexes for all relationships
- Composite indexes for frequently queried combinations
- Partial indexes for filtered queries where applicable

### Data Integrity
- Foreign key constraints ensure referential integrity
- Soft deletes implemented where appropriate
- Timestamps for creation and updates
- JSONB for flexible structured data (preferences, recurring rules)

### Performance Considerations
- Partitioning strategy for large tables (audit_logs, tasks)
- Regular VACUUM and maintenance schedules
- Monitoring query performance
- Connection pooling configuration

### Security
- Passwords stored as secure hashes
- Row-level security policies
- Audit logging for sensitive operations
- Regular backup schedule

### Scalability
- Horizontal partitioning possible for large tables
- Efficient indexing strategy
- Normalized design for data integrity
- Denormalized views for read performance where needed