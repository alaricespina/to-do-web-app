-- Sticky Notes table
-- Stores user's virtual sticky notes with position information
CREATE TABLE sticky_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    color VARCHAR(7) NOT NULL, -- Hex color code
    position_x INTEGER NOT NULL, -- X coordinate on the sticky wall
    position_y INTEGER NOT NULL, -- Y coordinate on the sticky wall
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for retrieving user's sticky notes
CREATE INDEX idx_sticky_notes_user_id ON sticky_notes(user_id);

-- Comments:
-- 1. Position coordinates allow precise placement on the sticky wall
-- 2. Color stored as hex code for consistency
-- 3. Cascading delete removes notes when user is deleted
-- 4. Updated_at enables tracking of note modifications
-- 5. Content stored as TEXT type for unlimited length
-- 6. Index optimizes retrieval of all notes for a user