# Inventory Management System (IMS) API

A robust, enterprise-grade RESTful API backend built with **Laravel 12** and **PHP 8.2+**. Designed for modern retail, wholesale, and multi-warehouse supply chain operations, this application handles end-to-end inventory tracking, Point of Sale (POS) operations, procurement, stock movements, financial analytics, receivables/payables tracking, automated expiry warnings, and audit logging.

---

## 📑 Table of Contents

- [Overview & Architecture](#-overview--architecture)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Database Schema & Domain Models](#-database-schema--domain-models)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Automated Scheduled Tasks](#-automated-scheduled-tasks)
- [Getting Started & Installation](#-getting-started--installation)
- [Default Demo Credentials](#-default-demo-credentials)
- [Generating API Documentation](#-generating-api-documentation)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [License](#-license)

---

## 🌟 Overview & Architecture

The **IMS API** provides a centralized, scalable backend for inventory control. It implements standard RESTful conventions with:
- **UUID Identifiers:** Primary entities use UUIDv4 for distributed uniqueness and front-end predictability.
- **Token Authentication:** Secure API token management using **Laravel Sanctum**.
- **Role-Based Access:** Support for operational tiers (`admin`, `manager`, `cashier`).
- **Audit Trails:** Comprehensive tracking of all database modifications with **Spatie Activitylog**.
- **Soft Deletion:** Safe deletion workflows preserving transactional history.
- **Clean Response Standards:** Predictable JSON envelopes with standardized pagination, active/inactive filters, and structured error responses.

---

## 🚀 Key Features

### 1. Product Catalog & Barcode Management
- **Catalog Management:** Organize products with codes, categories, units, and custom attributes.
- **Pricing & Tax:** Configurable purchase price, selling price, and VAT applicability (`is_vatable`).
- **Barcode Support:** Barcode search, custom barcode generation, and barcode image rendering endpoints.
- **Product Imagery:** Media handling with automated resizing and formatting via Intervention Image (`/storage/`).
- **Bulk CSV Ingestion:** Import large inventories quickly through `/api/v1/products/import`.
- **Low Stock Thresholds:** Custom `min_stock` alerts per item to prevent stockouts.

### 2. Multi-Warehouse Stock Tracking
- **Multi-Location Inventory:** Track stock quantities across independent warehouses or branch locations.
- **Batch & Expiry Dates:** Batch tracking with expiry dates (`has_expiry`), tailored for pharmaceuticals and food & beverage.
- **Stock Movement Log:** Comprehensive history for every movement type:
  - `in` (Purchases / Restocks)
  - `out` (Sales / Shipments)
  - `opening_stock` (Initial warehouse counts)
  - `adjustment` (Damage, Lost, Found)
  - `expired` (Automated expiry write-offs)

### 3. Purchases & Supplier Procurement
- **Purchase Orders:** Manage supplier orders with line items, purchase costs, VAT, and custom invoice numbers.
- **Receiving Workflow:** Transition orders through `pending`, `received`, or `cancelled`. Receiving an order automatically increments warehouse inventory.
- **PDF Invoices:** Server-side PDF generation for purchase receipts using Dompdf.
- **Supplier Credit / Payables:** Track partial payments, unpaid supplier balances, and credit lifecycles.

### 4. Sales, Customers & Point of Sale (POS)
- **POS / Sales Management:** Fast order creation, customer association, line item calculations, and real-time inventory deductions.
- **Flexible Payments:** Support for multiple payment methods: `cash`, `card`, `transfer`, `loan` (credit).
- **Customer Receivables:** Built-in loan tracking for customer credit lines, due amounts, and paid balances.
- **PDF Sales Receipts:** Branded, printable PDF sales invoices generated on the fly.

### 5. Payments, Payables & Receivables (Loan Tracking)
- **Unified Payment Engine:** Record settlements against purchase orders (payables) or sales orders (receivables).
- **Outstanding Balances:** Track debt histories and remaining balances with instant calculation of settled status.
- **Payment History:** Granular audit logs of each transaction reference, method, and amount.

### 6. Expense Management
- **Operating Expenses:** Categorized tracking of operational costs (utilities, rent, maintenance, salaries).
- **Financial Categorization:** Real-time expense breakdown by category for net margin calculations.

### 7. Financial Reports & Analytics Dashboard
- **Executive Analytics:**
  - Executive summary KPIs (Gross Sales, Net Profit, Low Stock count, Inventory valuation).
  - Stock allocation across warehouses.
  - Monthly revenue vs. expense trends.
  - Inventory distribution by product category.
  - Purchase order performance metrics.
  - Expiring stock radar (batches nearing expiration).
- **Detailed Reports:**
  - **Overview Report:** Combined business performance indicators.
  - **Sales Report:** Filterable sales trends, average order values, and volumes.
  - **Inventory Valuation Report:** Current stock valuation at cost and retail value.
  - **Profit & Loss (P&L):** Revenue minus Cost of Goods Sold (COGS) and operational expenses.
  - **Tax / VAT Report:** Total input tax (purchases) vs. output tax (sales) breakdown.
  - **Product Sales & Purchase Breakdown:** Top-performing and slow-moving SKUs.

### 8. Notifications & Background Automation
- **Stock Alerts:** Immediate notifications generated when inventory dips below `min_stock`.
- **Expiry Warnings:** Daily automated scanners alerting managers to batches expiring within 30 days.
- **Expired Stock Handling:** Daily command to automatically flag and adjust expired items.
- **Notification Inbox:** Database-driven alerts with endpoints to fetch unread alerts, mark single items, or batch mark all as read.

### 9. Interactive API Documentation (Scribe)
- Beautiful, interactive documentation generated directly from code annotations and route definitions.
- Includes sample requests, response payloads, authentication headers, Postman collection, and OpenAPI specification.

---

## 🛠 Technology Stack

### Backend Framework & Core
| Technology | Version / Package | Purpose |
|---|---|---|
| **PHP** | `^8.2` | Core programming language |
| **Laravel Framework** | `^12.0` | Application MVC framework |
| **Laravel Sanctum** | `^4.2` | Lightweight API token authentication |
| **SQLite / MySQL / PostgreSQL** | Supported | Relational database storage |

### Key Libraries & Packages
| Package | Version | Purpose |
|---|---|---|
| [`spatie/laravel-activitylog`](https://github.com/spatie/laravel-activitylog) | `^4.10` | Full audit trail and user action logging |
| [`intervention/image-laravel`](https://image.intervention.io/) | `^1.5` | Product image upload processing & optimization |
| [`barryvdh/laravel-dompdf`](https://github.com/barryvdh/laravel-dompdf) | `^3.1` | Automated PDF invoice and receipt rendering |
| [`knuckleswtf/scribe`](https://scribe.knuckles.wtf/) | `^5.6` | Human-friendly interactive API documentation |
| [`laravel/pail`](https://github.com/laravel/pail) | `^1.2` | Real-time terminal log viewer |
| [`laravel/pint`](https://laravel.com/docs/pint) | `^1.24` | Code style linter and formatter |
| [`phpunit/phpunit`](https://phpunit.de/) | `^11.5` | Automated test suite execution |

---

## 🗄 Database Schema & Domain Models

```
┌──────────────────┐       ┌────────────────────┐       ┌──────────────────┐
│    Categories    │◄──────┤      Products      ├──────►│      Stocks      │
└──────────────────┘       └─────────┬──────────┘       └────────┬─────────┘
                                     │                           │
                                     │                           ▼
┌──────────────────┐                 │                  ┌──────────────────┐
│    Suppliers     │                 │                  │    Warehouses    │
└────────┬─────────┘                 │                  └──────────────────┘
         │                           │
         ▼                           ▼
┌──────────────────┐       ┌────────────────────┐       ┌──────────────────┐
│    Purchases     ├──────►│   Purchase Items   │       │ Stock Movements  │
└────────┬─────────┘       └────────────────────┘       └──────────────────┘
         │                                                       ▲
         ▼                                                       │
┌──────────────────┐                                             │
│     Payments     │◄────────────────────────────────────────────┤
└────────┬─────────┘                                             │
         ▲                                                       │
         │                                                       │
┌────────┴─────────┐       ┌────────────────────┐                │
│      Sales       ├──────►│     Sale Items     ├────────────────┘
└────────▲─────────┘       └────────────────────┘
         │
┌────────┴─────────┐       ┌────────────────────┐       ┌──────────────────┐
│    Customers     │       │      Expenses      │       │  Activity Logs   │
└──────────────────┘       └────────────────────┘       └──────────────────┘
```

### Models Overview
- **`User`**: Administrators, Managers, and Cashiers with token authentication and role attributes.
- **`Category`**: Product categorization with status toggles (`is_active`).
- **`Product`**: UUID-based catalog items (`name`, `code`, `barcode`, `min_stock`, `has_expiry`, `purchase_price`, `selling_price`, `is_vatable`, `is_active`).
- **`Warehouse`**: Physical locations holding inventory.
- **`Stock`**: Current on-hand quantity per product per warehouse, with batch and expiration dates.
- **`Supplier`**: Vendors supplying raw goods or merchandise.
- **`Customer`**: Clients purchasing items with optional credit/loan balances.
- **`Purchase` & `PurchaseItem`**: Purchase orders with tax calculations, delivery status (`pending`, `received`, `cancelled`), and supplier payables.
- **`Sale` & `SaleItem`**: Sales transactions, payment method, tax calculations, and receivable loans.
- **`StockMovement`**: Immutable audit records tracking all incoming, outgoing, or adjusted quantities with user references.
- **`Payment`**: Debt collection and payment disbursement records for sales and purchases.
- **`Expense`**: Operating expenditures categorized by expense type.
- **`Notification`**: System notifications for stock shortages and approaching expiration dates.

---

## 📡 API Endpoints Reference

All API routes are versioned under `/api/v1` and return JSON responses.

### 🔑 Authentication (`/api/v1/auth`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/auth/login` | Authenticate user & issue Sanctum Bearer token | No |
| `POST` | `/auth/forgot-password` | Request password reset token | No |
| `POST` | `/auth/reset-password` | Reset password using reset token | No |
| `POST` | `/auth/refresh` | Refresh user token | No |
| `GET` | `/auth/me` | Fetch authenticated user profile | Yes |
| `POST` | `/auth/logout` | Revoke current access token | Yes |
| `POST` | `/auth/change-password` | Update account password | Yes |
| `POST` | `/auth/change-email` | Update account email address | Yes |

### 🏷 Categories (`/api/v1/categories`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/categories` | List categories (paginated, searchable) | Yes |
| `GET` | `/categories/active` | List all active categories for dropdowns | Yes |
| `POST` | `/categories` | Create a new category | Yes |
| `GET` | `/categories/{id}` | Fetch category details | Yes |
| `PATCH` | `/categories/{id}` | Update category details | Yes |
| `PATCH` | `/categories/{id}/status` | Toggle category active/inactive status | Yes |
| `DELETE` | `/categories/{id}` | Soft-delete category | Yes |

### 🏢 Warehouses (`/api/v1/warehouses`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/warehouses` | List warehouses | Yes |
| `GET` | `/warehouses/active` | List active warehouses | Yes |
| `POST` | `/warehouses` | Create a new warehouse | Yes |
| `GET` | `/warehouses/{id}` | Fetch warehouse details | Yes |
| `PATCH` | `/warehouses/{id}` | Update warehouse details | Yes |
| `PATCH` | `/warehouses/{id}/status` | Toggle warehouse active status | Yes |
| `DELETE` | `/warehouses/{id}` | Soft-delete warehouse | Yes |

### 📦 Products (`/api/v1/products`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/products` | List products (filter by search, category, low_stock, expiry) | Yes |
| `GET` | `/products/active` | Paginated list of active products | Yes |
| `GET` | `/products/active-list` | Lightweight list of active products for POS selectors | Yes |
| `POST` | `/products` | Create a new product | Yes |
| `POST` | `/products/import` | Bulk import products from CSV file | Yes |
| `GET` | `/products/barcode-search` | Find product by scanning barcode string | Yes |
| `GET` | `/products/{id}` | Fetch product details with warehouse stocks | Yes |
| `PATCH` | `/products/{id}` | Update product information | Yes |
| `PATCH` | `/products/{id}/status` | Toggle product active status | Yes |
| `POST` | `/products/{id}/photo` | Upload product photo image | Yes |
| `DELETE` | `/products/{id}/photo` | Remove product photo | Yes |
| `DELETE` | `/products/{id}` | Soft-delete product | Yes |
| `GET` | `/products/{id}/barcode` | Generate and stream barcode image | Yes |
| `GET` | `/products/{id}/stock-movements` | View stock ledger for specific product | Yes |

### 🚚 Suppliers (`/api/v1/suppliers`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/suppliers` | List suppliers | Yes |
| `GET` | `/suppliers/active` | List active suppliers | Yes |
| `POST` | `/suppliers` | Register new supplier | Yes |
| `GET` | `/suppliers/{id}` | Get supplier details | Yes |
| `PATCH` | `/suppliers/{id}` | Update supplier profile | Yes |
| `PATCH` | `/suppliers/{id}/status` | Toggle supplier active status | Yes |
| `DELETE` | `/suppliers/{id}` | Soft-delete supplier | Yes |

### 👥 Customers (`/api/v1/customers`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/customers` | List customers (search by phone/name) | Yes |
| `GET` | `/customers/active` | List active customers | Yes |
| `POST` | `/customers` | Register new customer | Yes |
| `GET` | `/customers/{id}` | Get customer profile & credit balances | Yes |
| `PATCH` | `/customers/{id}` | Update customer info | Yes |
| `PATCH` | `/customers/{id}/status` | Toggle customer active status | Yes |
| `DELETE` | `/customers/{id}` | Soft-delete customer | Yes |

### 📥 Purchases (`/api/v1/purchases`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/purchases` | List purchase orders with status & supplier info | Yes |
| `GET` | `/purchases/active` | List active purchase orders | Yes |
| `POST` | `/purchases` | Create purchase order with line items & tax | Yes |
| `GET` | `/purchases/{id}` | Purchase order details | Yes |
| `PATCH` | `/purchases/{id}` | Update purchase order | Yes |
| `PATCH` | `/purchases/{id}/status` | Toggle purchase active status | Yes |
| `DELETE` | `/purchases/{id}` | Cancel/delete purchase order | Yes |
| `GET` | `/purchases/{id}/invoice` | Download purchase invoice PDF | Yes |
| `POST` | `/purchases/{id}/receive` | Mark received (increments stock automatically) | Yes |
| `POST` | `/purchases/{id}/cancel` | Cancel purchase order | Yes |
| `GET` | `/purchases/{id}/payments` | View payment history for purchase order | Yes |

### 🛒 Sales & POS (`/api/v1/sales`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/sales` | List sales transactions (filter by date, status, customer) | Yes |
| `POST` | `/sales` | Create sale / POS checkout (auto stock deduction) | Yes |
| `GET` | `/sales/{id}` | Sale details with items and payment status | Yes |
| `PATCH` | `/sales/{id}` | Update sale record | Yes |
| `DELETE` | `/sales/{id}` | Delete sale record | Yes |
| `GET` | `/sales/{id}/invoice` | Download branded sales receipt PDF | Yes |
| `GET` | `/sales/{id}/payments` | View installment/payment history for sale | Yes |

### 📊 Stock Movements (`/api/v1/stock-movements`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/stock-movements` | Query inventory movements across warehouses | Yes |
| `POST` | `/stock-movements` | Post manual adjustment (`damage`, `lost`, `found`, `adjustment`) | Yes |

### 💳 Payments & Debt Ledger (`/api/v1/payments`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/payments` | List payment transactions | Yes |
| `POST` | `/payments` | Record loan settlement payment for sale or purchase | Yes |
| `GET` | `/payments/{id}` | View single payment detail | Yes |
| `DELETE` | `/payments/{id}` | Reverse / remove payment entry | Yes |
| `GET` | `/payments/payables` | Outstanding receivables & payables summary | Yes |

### 💸 Expenses (`/api/v1/expenses`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/expenses` | List expenses (paginated, date filters) | Yes |
| `POST` | `/expenses` | Log new operating expense | Yes |
| `GET` | `/expenses/{id}` | Fetch expense details | Yes |
| `PUT/PATCH` | `/expenses/{id}` | Update expense | Yes |
| `DELETE` | `/expenses/{id}` | Delete expense entry | Yes |
| `GET` | `/expenses/all` | Get aggregated expense list grouped by category | Yes |

### 📈 Analytics Dashboard (`/api/v1/analytics`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/analytics/dashboard` | Main dashboard summary KPIs | Yes |
| `GET` | `/analytics/stock-by-warehouse` | Stock distribution volume per warehouse | Yes |
| `GET` | `/analytics/monthly-trend` | 12-month sales and purchasing trend curves | Yes |
| `GET` | `/analytics/inventory-by-category` | Stock value and quantity by category | Yes |
| `GET` | `/analytics/purchase-kpis` | Procurement performance metrics | Yes |
| `GET` | `/analytics/expiring-stock` | Batches expiring within upcoming windows | Yes |

### 📑 Reports (`/api/v1/reports`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/reports/overview` | High-level financial & inventory overview | Yes |
| `GET` | `/reports/sales` | Detailed sales reports with date range filtering | Yes |
| `GET` | `/reports/inventory` | Inventory valuation and movement reporting | Yes |
| `GET` | `/reports/profit-loss` | Net Profit & Loss (Revenue - COGS - Expenses) | Yes |
| `GET` | `/reports/tax` | Tax reporting (Input VAT vs Output VAT) | Yes |
| `GET` | `/reports/product-sales` | Performance breakdown for top selling products | Yes |
| `GET` | `/reports/product-sales-all` | Full product sales catalog report | Yes |
| `GET` | `/reports/product-purchases` | Top purchased products summary | Yes |
| `GET` | `/reports/product-purchases-all` | Full procurement itemization report | Yes |

### 🔔 Notifications (`/api/v1/notifications`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/notifications` | Get user notifications & unread badge count | Yes |
| `PATCH` | `/notifications/{id}/read` | Mark individual notification as read | Yes |
| `POST` | `/notifications/mark-all-read` | Mark all user notifications as read | Yes |

### 📜 Activity Logs (`/api/v1/activity-logs`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `GET` | `/activity-logs` | Query system audit trails and user activity logs | Yes |

---

## ⏰ Automated Scheduled Tasks

The system includes scheduled background commands configured in `routes/console.php`:

| Command | Frequency | Description |
|---|---|---|
| `stock:check-expiry` | Daily | Identifies stock batches expiring within 30 days and sends notification alerts to staff. |
| `stock:process-expired` | Daily | Automatically writes off zero-out batches that have passed their expiration date. |

### Setting Up the Cron Scheduler
Add the standard Laravel scheduler entry to your server's crontab:
```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

---

## 💻 Getting Started & Installation

### Prerequisites
- **PHP:** >= 8.2 with extensions: `pdo`, `sqlite`/`mysql`, `gd` or `imagick`, `mbstring`, `xml`, `curl`
- **Composer:** >= 2.x
- **Node.js & NPM:** (Optional, for building frontend assets or running concurrently)

### 1. Clone & Install Dependencies
```bash
git clone <repository-url> ims-api
cd ims-api
composer install
```

### 2. Environment Configuration
Copy the environment template and generate the application encryption key:
```bash
cp .env.example .env
php artisan key:generate
```

Review your `.env` file to configure your database connection (SQLite by default):
```env
DB_CONNECTION=sqlite
# For MySQL / MariaDB:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=ims_database
# DB_USERNAME=root
# DB_PASSWORD=secret
```

### 3. Run Migrations & Seeders
Execute the database migrations and seed realistic sample data:
```bash
php artisan migrate --seed
```

Or seed specific datasets:
```bash
# Seed standard accounts and realistic retail demo dataset
php artisan db:seed --class=RealisticDataSeeder

# Seed real products catalog
php artisan db:seed --class=RealProductsSeeder
```

### 4. Create Storage Symlink
Link the public storage directory for product photo uploads:
```bash
php artisan storage:link
```

### 5. Launch the Local Development Server
You can launch the standard Laravel development server:
```bash
php artisan serve
```
The API will be available at `http://127.0.0.1:8000`.

Alternatively, use the built-in dev script to run server, queue worker, and log monitoring concurrently:
```bash
composer run dev
```

---

## 👤 Default Demo Credentials

When seeded using `RealisticDataSeeder` or `AdminUserSeeder`, the following accounts are available for testing:

| Role | Email | Password | Scope |
|---|---|---|---|
| **System Admin** | `admin@ims.com` | `password123` | Full access to all modules, settings, and logs |
| **Manager** | `manager@ims.com` | `password123` | Inventory, procurement, reporting, and adjustments |
| **Cashier** | `cashier@ims.com` | `password123` | Point of Sale (POS), customer checkout, and sales history |

---

## 📖 Generating API Documentation

The application uses **Scribe** to generate interactive, readable API documentation.

### View Documentation
Once the server is running, navigate in your browser to:
```
http://127.0.0.1:8000/docs
```

### Regenerate Docs
To update the documentation after adding or editing endpoints:
```bash
php artisan scribe:generate
```

---

## 🧪 Testing & Quality Assurance

The codebase includes automated tests powered by **PHPUnit**:
```bash
# Run all automated tests
php artisan test

# Run code style fixer (Pint)
./vendor/bin/pint
```

---

## 📄 License

This software is open-sourced under the [MIT license](LICENSE).