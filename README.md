# Project Setup Guide

## Backend Configuration

To set up the backend, follow these steps:

1. Navigate to the `backend` folder.
2. Create a new folder named `config` inside the `backend` folder.
3. Inside the `config` folder, create a file named `.env`.
4. Add the following environment variables to the `.env` file:

```
PORT =
DB_URL =
JWT_SECRET_KEY =
JWT_EXPIRES =
ACTIVATION_SECRET =
SMPT_HOST =
SMPT_PORT =
SMPT_PASSWORD =
SMPT_MAIL =
STRIPE_API_KEY =
STRIPE_SECRET_KEY =
```

5. Fill in the required values for each environment variable.
6. Save the `.env` file.

This configuration ensures that sensitive information is kept secure and allows the backend to function properly.

