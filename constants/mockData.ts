export const studentProfile = {
    name: 'Alex Johnson',
    gpa: 3.8,
    attendance: 85,
    avatarUrl: 'https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png', // Placeholder
};

export const notifications = [
    {
        id: '1',
        title: 'Assignment Due',
        message: 'Math 101 Homework is due tomorrow at 11:59 PM.',
        time: '2h ago',
        type: 'warning',
    },
    {
        id: '2',
        title: 'Class Cancelled',
        message: 'Physics 202 class for today has been cancelled.',
        time: '5h ago',
        type: 'error',
    },
    {
        id: '3',
        title: 'Grade Posted',
        message: 'Your grade for History Midterm has been posted.',
        time: '1d ago',
        type: 'success',
    },
    {
        id: '4',
        title: 'Library Book Due',
        message: 'Return "Introduction to Algorithms" by Friday.',
        time: '2d ago',
        type: 'info',
    },
];

export type ClassItem = {
    id: string;
    subject: string;
    time: string;
    room: string;
    teacher: string;
    color: string;
};

export const schedule: Record<string, ClassItem[]> = {
    Mon: [
        { id: '1', subject: 'Mathematics 101', time: '09:00 AM - 10:30 AM', room: 'Room 301', teacher: 'Dr. Smith', color: '#3B82F6' },
        { id: '2', subject: 'Physics 202', time: '11:00 AM - 12:30 PM', room: 'Lab 2', teacher: 'Prof. Doe', color: '#8B5CF6' },
        { id: '3', subject: 'Computer Science', time: '02:00 PM - 03:30 PM', room: 'Lab 1', teacher: 'Mr. Brown', color: '#10B981' },
    ],
    Tue: [
        { id: '4', subject: 'History 101', time: '09:00 AM - 10:30 AM', room: 'Room 204', teacher: 'Mrs. Davis', color: '#F59E0B' },
        { id: '5', subject: 'English Lit', time: '11:00 AM - 12:30 PM', room: 'Room 105', teacher: 'Ms. Wilson', color: '#EC4899' },
    ],
    Wed: [
        { id: '6', subject: 'Mathematics 101', time: '09:00 AM - 10:30 AM', room: 'Room 301', teacher: 'Dr. Smith', color: '#3B82F6' },
        { id: '7', subject: 'Chemistry', time: '01:00 PM - 02:30 PM', room: 'Lab 3', teacher: 'Dr. White', color: '#EF4444' },
    ],
    Thu: [
        { id: '8', subject: 'Physics 202', time: '11:00 AM - 12:30 PM', room: 'Lab 2', teacher: 'Prof. Doe', color: '#8B5CF6' },
        { id: '9', subject: 'Computer Science', time: '02:00 PM - 03:30 PM', room: 'Lab 1', teacher: 'Mr. Brown', color: '#10B981' },
    ],
    Fri: [
        { id: '10', subject: 'Art History', time: '10:00 AM - 11:30 AM', room: 'Art Studio', teacher: 'Ms. Green', color: '#6366F1' },
        { id: '11', subject: 'Gym', time: '01:00 PM - 02:00 PM', room: 'Gymnasium', teacher: 'Coach Carter', color: '#F43F5E' },
    ],
};
