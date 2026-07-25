# System Architecture

## Overview

Personal Financial OS follows a modular architecture designed for long-term maintainability, scalability, and clear separation of responsibilities.

The system is divided into independent layers, where each layer has a single responsibility.

---

# High-Level Architecture

Presentation Layer
↓

Application Layer
↓

Domain Layer
↓

Infrastructure Layer
↓

Database

---

# Components

## Frontend

Technology: React + TypeScript

Responsibilities

- Display information
- Collect user input
- Call backend APIs
- Visualize financial insights

The frontend should contain no business rules.

---

## Backend

Technology: ASP.NET Core Web API

Responsibilities

- Execute business logic
- Validate requests
- Coordinate workflows
- Expose REST APIs

The backend represents the application's brain.

---

## Domain

Responsibilities

- Business rules
- Financial calculations
- Core entities
- Business decisions

This layer must not depend on UI or database technologies.

---

## Infrastructure

Responsibilities

- Database access
- External APIs
- Email
- File storage
- Logging

Infrastructure supports the domain but does not define business behaviour.

---

## Database

Technology: PostgreSQL

Responsibilities

- Persist application data
- Support transactions
- Maintain consistency

The database stores data only.
Business rules belong elsewhere.

---

# Design Principles

- Separation of Concerns
- Single Responsibility Principle
- Modular Design
- API First
- Business First
- Testable Components
- Technology Independent Domain

---

# Future Modules

The architecture should support future modules without requiring major redesign.

Potential future modules include:

- Finance
- Goals
- Reports
- Analytics
- Notifications
- AI Insights
