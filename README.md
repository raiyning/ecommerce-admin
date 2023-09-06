# Full Stack E-Commerce Project

https://ecommerce-adminfm-3gs5272t7-raiyning.vercel.app/

## Overview

This project is a Full Stack E-Commerce application developed using Next.js 13, React, Tailwind CSS, Prisma, and MySQL. It includes the creation of both the customer-facing online store and an admin dashboard for Content Management System (CMS) purposes. This README provides an overview of the project, installation instructions, and usage guidelines.

## Features

- **Customer-Facing Online Store:**
  - Browse and search for products.
  - Add products to the shopping cart.
  - View and manage the shopping cart.
  - Checkout and place orders.
  - User authentication and registration.
  - User account management.

- **Admin Dashboard (CMS):**
  - Add, edit, and delete products.
  - Manage product categories.
  - Review and process customer orders.
  - User management and access control.
  - Dashboard analytics and reporting.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MySQL database server.
- Tailwind CSS familiarity.
- Basic knowledge of Next.js and React.
- Prisma ORM understanding.

## Installation

To set up and run the project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Change into the project directory:

   ```bash
   cd your-project
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your environment variables, including database connection details:

   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/your-database"
   SECRET_KEY="your-secret-key"
   ```

5. Run database migrations to create the necessary tables:

   ```bash
   npx prisma migrate dev
   ```

6. Seed the database with initial data (optional):

   ```bash
   npx prisma db seed
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Access the application in your browser at `http://localhost:3000`.

## Usage

- To use the customer-facing online store, simply navigate to the application in your browser. You can browse products, add them to your cart, and complete the checkout process.

- To access the admin dashboard (CMS), log in with the appropriate credentials and manage products, categories, orders, and users.

## Contributing

If you would like to contribute to this project, please follow the guidelines in the `CONTRIBUTING.md` file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

Special thanks to the contributors and open-source libraries that made this project possible.

## Contact

For questions or feedback, please contact [Your Name](mailto:your.email@example.com).

---

Feel free to customize this README with more specific information about your project, such as installation troubleshooting, advanced usage, or additional features. This will help potential users and contributors understand and use your Full Stack E-Commerce project effectively.