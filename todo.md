# Boikanyo Social Support Scheme - Development Todo

## Project Overview
Building a comprehensive website for Boikanyo Social Support Scheme - a funeral grocery support service with monthly membership starting at R150.

## Core Features to Implement

### 1. Homepage & Landing
- Hero section with compelling messaging
- Membership pricing display (R150/month)
- Benefits overview grid
- Testimonials section
- CTA buttons for signup and claim tracking

### 2. Authentication & User Management
- User registration/login system
- JWT-based authentication
- Password reset functionality
- Role-based access (Member, Admin, Staff)

### 3. Membership System
- Membership plans display
- User profile management
- Payment integration (PayFast/Ozow simulation)
- Digital membership cards
- Dependent management

### 4. Claims Management
- Claim submission form
- Document upload (death certificates, IDs)
- Real-time claim tracking
- Status updates (Received → Under Review → Approved → In Preparation → Out for Delivery → Delivered)
- Notification system

### 5. Admin Dashboard
- Member management
- Claims processing
- Status updates
- Inventory management
- Reports and analytics

### 6. Member Portal
- Personal dashboard
- Claim history
- Payment history
- Document management
- Profile updates

### 7. Grocery Packages Display
- Package contents by membership tier
- Visual representation of hampers
- Pricing information

### 8. Communication & Support
- Contact forms
- WhatsApp integration
- FAQ section
- Support ticket system

## Technical Stack
- Frontend: React with shadcn-ui components
- Styling: Tailwind CSS
- State Management: React Context/useState
- Routing: React Router
- Form Handling: React Hook Form
- Icons: Lucide React
- Notifications: Toast notifications
- File Upload: Drag & drop interface

## Database Structure (Simulated with localStorage)
- Users (members, admins, staff)
- MembershipPlans
- Claims
- ClaimDocuments
- GroceryPackages
- Notifications
- Payments

## File Structure
```
src/
├── components/
│   ├── ui/ (shadcn components)
│   ├── auth/
│   ├── claims/
│   ├── admin/
│   ├── member/
│   └── common/
├── pages/
├── hooks/
├── utils/
├── contexts/
└── data/
```

## Design Principles
- Modern, trustworthy design
- Mobile-first responsive
- Clear navigation
- Accessible interface
- Professional color scheme (blues, greens for trust)
- Clean typography
- Intuitive user flows