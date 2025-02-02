# TypeScript Interfaces

## User Related Interfaces

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

interface UserPreferences {
  theme: 'light' | 'dark';
  emailNotifications: boolean;
  defaultView: 'today' | 'upcoming' | 'calendar';
  timezone: string;
}

interface AuthResponse {
  user: User;
  token: string;
}
```

## Task Related Interfaces

```typescript
interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  category: string[];
  labels: string[];
  attachments: Attachment[];
  recurring?: RecurrenceRule;
  createdAt: Date;
  updatedAt: Date;
}

enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ARCHIVED = 'archived'
}

enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

interface Attachment {
  id: string;
  taskId: string;
  name: string;
  url: string;
  type: string;
  size: number;
  createdAt: Date;
}

interface RecurrenceRule {
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: Date;
  daysOfWeek?: number[];
  daysOfMonth?: number[];
  monthsOfYear?: number[];
}
```

## Sticky Note Interfaces

```typescript
interface StickyNote {
  id: string;
  userId: string;
  content: string;
  color: string;
  position: Position;
  createdAt: Date;
  updatedAt: Date;
}

interface Position {
  x: number;
  y: number;
}
```

## Calendar Related Interfaces

```typescript
interface CalendarEvent {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  recurring?: RecurrenceRule;
  createdAt: Date;
  updatedAt: Date;
}

interface DateRange {
  startDate: Date;
  endDate: Date;
}
```

## Common Interfaces

```typescript
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}