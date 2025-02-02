-- Calendar Events table
-- Stores user's calendar events with support for recurring events
CREATE TABLE calendar_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    all_day BOOLEAN DEFAULT false,
    recurring_rule JSONB, -- Stores recurrence pattern (similar to iCal format)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for retrieving user's events
CREATE INDEX idx_calendar_events_user_id ON calendar_events(user_id);

-- Index for date range queries
CREATE INDEX idx_calendar_events_date_range ON calendar_events(start_date, end_date);

-- Comments:
-- 1. Timestamps include timezone for global user base
-- 2. Recurring_rule uses JSONB for flexible recurrence patterns
-- 3. All_day flag separates full-day events from time-specific ones
-- 4. Composite index optimizes date range queries
-- 5. Cascading delete removes events when user is deleted
-- 6. Description stored as TEXT for unlimited length
-- 7. Title limited to 255 chars for display optimization

-- Example recurring_rule JSONB structure:
/*
{
    "frequency": "weekly",
    "interval": 1,
    "days": [1, 3, 5], -- Mon, Wed, Fri
    "endDate": "2024-12-31",
    "exceptions": ["2024-07-04"] -- Skip specific dates
}
*/