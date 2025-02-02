-- Audit Logs table
-- Tracks all significant changes to the system for security and debugging
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Allow logs to remain after user deletion
    entity_type VARCHAR(50) NOT NULL, -- Type of entity being audited (e.g., 'task', 'user')
    entity_id UUID NOT NULL, -- ID of the entity being audited
    action VARCHAR(50) NOT NULL, -- Type of action (e.g., 'create', 'update', 'delete')
    changes JSONB, -- Stores before/after values of changed fields
    ip_address INET, -- IP address of the user
    user_agent TEXT, -- User's browser/client information
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for common audit queries
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);

-- Comments:
-- 1. User_id uses SET NULL instead of CASCADE to preserve audit trail
-- 2. Changes stored as JSONB for flexible change tracking
-- 3. IP address stored as INET type for proper IP handling
-- 4. Multiple indexes support various audit queries
-- 5. No updated_at as audit logs are immutable
-- 6. Entity_type/id allows tracking of any entity type

-- Example changes JSONB structure:
/*
{
    "before": {
        "status": "todo",
        "priority": "low"
    },
    "after": {
        "status": "in_progress",
        "priority": "high"
    },
    "metadata": {
        "reason": "Sprint priority update",
        "source": "web_app"
    }
}
*/

-- Partitioning recommendation:
-- Consider partitioning this table by month or quarter
-- as it can grow very large:
/*
CREATE TABLE audit_logs_y2024m01 PARTITION OF audit_logs
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
*/

-- Retention policy recommendation:
-- Implement a policy to archive or delete old audit logs
-- based on compliance requirements:
/*
DELETE FROM audit_logs
WHERE created_at < NOW() - INTERVAL '2 years';
*/