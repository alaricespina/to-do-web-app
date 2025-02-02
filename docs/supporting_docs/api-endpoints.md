# API Endpoints Documentation

## Authentication & User Management
- `POST /api/auth/register` - Register new user
  - Body: { email, password, name }
  - Returns: User object with token

- `POST /api/auth/login` - User login
  - Body: { email, password }
  - Returns: User object with token

- `POST /api/auth/logout` - User logout
  - Required: Authentication token
  - Returns: Success message

- `GET /api/auth/me` - Get current user
  - Required: Authentication token
  - Returns: User object

- `PUT /api/auth/me` - Update user profile
  - Required: Authentication token
  - Body: { name, email, preferences }
  - Returns: Updated user object

- `PUT /api/auth/password` - Change password
  - Required: Authentication token
  - Body: { currentPassword, newPassword }
  - Returns: Success message

- `POST /api/auth/reset` - Request password reset
  - Body: { email }
  - Returns: Success message

## Task Management
- `GET /api/tasks` - List tasks with filters
  - Query params: { status, priority, category, dueDate, page, limit }
  - Required: Authentication token
  - Returns: Paginated task list

- `POST /api/tasks` - Create new task
  - Required: Authentication token
  - Body: { title, description, status, priority, dueDate, category, labels }
  - Returns: Created task

- `GET /api/tasks/{id}` - Get task details
  - Required: Authentication token
  - Returns: Task object

- `PUT /api/tasks/{id}` - Update task
  - Required: Authentication token
  - Body: { title, description, status, priority, dueDate, category, labels }
  - Returns: Updated task

- `DELETE /api/tasks/{id}` - Delete task
  - Required: Authentication token
  - Returns: Success message

- `PUT /api/tasks/{id}/status` - Update task status
  - Required: Authentication token
  - Body: { status }
  - Returns: Updated task

- `POST /api/tasks/{id}/duplicate` - Duplicate task
  - Required: Authentication token
  - Returns: New task object

- `GET /api/tasks/categories` - List task categories
  - Required: Authentication token
  - Returns: Array of categories

- `GET /api/tasks/labels` - List task labels
  - Required: Authentication token
  - Returns: Array of labels

## Sticky Wall
- `GET /api/sticky` - List sticky notes
  - Required: Authentication token
  - Returns: Array of sticky notes

- `POST /api/sticky` - Create sticky note
  - Required: Authentication token
  - Body: { content, color, position }
  - Returns: Created sticky note

- `PUT /api/sticky/{id}` - Update sticky note
  - Required: Authentication token
  - Body: { content, color, position }
  - Returns: Updated sticky note

- `DELETE /api/sticky/{id}` - Delete sticky note
  - Required: Authentication token
  - Returns: Success message

- `PUT /api/sticky/{id}/position` - Update note position
  - Required: Authentication token
  - Body: { position: { x, y } }
  - Returns: Updated sticky note

## Calendar & Events
- `GET /api/calendar` - List calendar events
  - Query params: { startDate, endDate, page, limit }
  - Required: Authentication token
  - Returns: Paginated calendar events

- `POST /api/calendar` - Create calendar event
  - Required: Authentication token
  - Body: { title, description, startDate, endDate, allDay, recurring }
  - Returns: Created calendar event

- `PUT /api/calendar/{id}` - Update calendar event
  - Required: Authentication token
  - Body: { title, description, startDate, endDate, allDay, recurring }
  - Returns: Updated calendar event

- `DELETE /api/calendar/{id}` - Delete calendar event
  - Required: Authentication token
  - Returns: Success message

- `GET /api/calendar/upcoming` - Get upcoming events
  - Query params: { limit }
  - Required: Authentication token
  - Returns: Array of upcoming events