# Domain Model

## Purpose

This document defines the core business entities of the Personal Financial OS.

It intentionally avoids implementation details such as database schema, API contracts, or programming language classes.

Its purpose is to establish a common business language that will be used throughout the project.

---

# Core Domains

## User

Represents the owner of the application.

Responsibilities

- Owns financial information
- Manages goals
- Reviews financial progress

---

## Account

Represents a financial account.

Examples

- Bank account
- Wallet
- Cash account

Responsibilities

- Stores balance
- Records financial activity
- Participates in transfers

---

## Transaction

Represents movement of money.

Examples

- Income
- Expense
- Transfer
- EMI
- SIP

Responsibilities

- Changes account balances
- Creates financial history

---

## Loan

Represents borrowed money.

Responsibilities

- Track outstanding balance
- Track repayment
- Track interest
- Measure loan progress

---

## Investment

Represents money invested for future growth.

Examples

- Mutual Funds
- Fixed Deposits
- Stocks (future)

Responsibilities

- Track invested value
- Track current value
- Track returns

---

## Asset

Represents something the user owns.

Examples

- Land
- Property
- Cash
- Gold

Responsibilities

- Increase net worth

---

## Liability

Represents financial obligations.

Examples

- Loans
- Credit card dues

Responsibilities

- Reduce net worth

---

## Budget

Represents a monthly financial plan.

Responsibilities

- Define spending limits
- Compare planned vs actual spending

---

## Goal

Represents a financial objective.

Examples

- Emergency fund
- Become debt free
- Save for business

Responsibilities

- Measure progress
- Define target

---

## Review

Represents a periodic financial review.

Examples

- Monthly Review
- Quarterly Review
- Annual Review

Responsibilities

- Capture financial snapshot
- Record observations

---

## Decision

Represents an important financial decision.

Examples

- Closed loan
- Started SIP
- Purchased land

Responsibilities

- Preserve historical reasoning
- Provide future reference
