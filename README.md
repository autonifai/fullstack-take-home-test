# fullstack-take-home-test
> Take Home Test for fullstack candidates to Autonifai

## Hello! 👋
Hello, there! Welcome to Autonifai and to our Take Home Test. We're excited to have you going through our recruiting process, hope you enjoy it! :) 

## What are you required to do?
- Build the Frontend for a validation console for invoices
- Increment the backend with any new endpoints required to deliver the required features

As you know, Autonifai provides automation solutions for accounting and finance teams. Validating invoices takes up a considerable amount of time of our users, and we want to make their lives easier with an easy to use app.

## Goals of this test
- Present you with a close-to-real codebase at Autonifai, with all the pros & cons
  - Do not expect state-of-the-art-code. We're a startup, things won't always be perfect, it's all about continuous improvement.
- Present you with a real problem from Autonifai's domain
- Assess your proficiency in writing code
- Assess your proficiency in working with automated tests
- Assess your proficiency in documenting & explaning your solution

## Features
First, please start by looking at the wireframes provided in this repo, they should provide you with good enough guidance to the work you're required to do. Please ignore colors, icons, etc, this is a medium-fidelity wireframe. Focus on the features and feel free to implement the interaction patterns you think fit best the problem.

### 1. List invoices
**Requirement:** implement a table that lists invoices present in the database.

**Wireframe:** [link](./wireframes/feature_01_list_invoices.jpg)

**Backend endpoint:** `GET /invoices`

You should implement a table with 5 columns: **Invoice Number**, **Vendor Name**, **Invoice Description**, **Due Date**, and **Amount**.

Each row of this table should have a `Review` button.

### 2. Display invoice details
**Requirement:** implement a page that displays an invoice details.

**Wireframe:** [link](./wireframes/feature_02_display_invoice_details.jpg)

**Backend endpoint:** `GET /invoices?invoice_id={id}`

As mentioned before, each row in the invoice list has a `Review` button. When this button is clicked, the invoice details should be displayed. 

The invoice details screen has 2 sections: `Vendor Details` and `Invoice Details`.

At the bottom, it has 2 buttons: `Validate` and `Reject`, which modify the status of the invoice. 

### 3. Change invoice status

**Requirement:** implement buttons that approve or reject an invoice.

**Wireframe:** [link](./wireframes/feature_02_display_invoice_details.jpg)

**Backend endpoints:** `POST /invoices/{id}/approval` | `DELETE /invoices/{id}/approval`

To approve or reject an invoice, we offer two separate buttons, which call the respective API endpoints.

### 4. Visualize PDF
**Requirement:** implement an endpoint that exposes a PDF, along with respective UI component.

**Wireframe:** [link](./wireframes/feature_03_visualize_pdf.jpg)

**Backend endpoints:** To be built

When the invoice details page is loaded, you also need to display the respective PDF.

PDF files are stored on Amazon S3, on the `s3://take-home-test-data/` public bucket. You'll need to create an endpoint in the backend project that connects to S3 and allows the frontend to fetch the PDF for visualization.

## Backend project
We provide you with a [backend starter project](https://github.com/autonifai/fullstack-test-backend), which provides the endpoints you'll need to list invoices and display an invoice's details. 

Your validation console should consume the endpoints exposed by this project.

## Which tech stack should I use?
- Frontend: React
- Backend: Python + FastAPI + SQLAlchemy _(provided in the starter project)_

## How should I submit my code?
- You should zip your solution and e-mail it to conor@autonifai.com. The title of the e-mail should say `THT solution - Your Name`
- We expect your zip to contain two folders: `fullstack-test-frontend` and `fullstack-test-backend`

## Questions & troubleshooting
If you need support or have any questions, please reach out to your recruiter. We'll get back to you ASAP.
