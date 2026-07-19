# JWT Handson – Create Authentication Service that Returns JWT

## Objective

Create an authentication service that generates and returns a JSON Web Token (JWT) after validating user credentials.

---

## Understanding JWT

### What is JWT?

- JWT stands for **JSON Web Token**.
- It is an Internet standard (IETF RFC 7519) for securely transmitting information between parties as a JSON object.
- JWT is commonly used to pass the identity of authenticated users between the client and the server.

---

## JWT Process Flow

1. Client sends **username** and **password** to the server.
2. Server validates the credentials.
3. Server creates a JWT token.
4. Server returns the token to the client.
5. Client includes the JWT in the `Authorization` header for subsequent requests.
6. Server validates the JWT before processing each request.

---

## Structure of JWT

A JWT consists of three parts:

- **Header**
  - Contains metadata about the token such as the signing algorithm.

- **Payload**
  - Contains application-specific information such as username, roles, issue time, and expiration time.

- **Signature**
  - Generated using the header, payload, and a secret key to ensure the token has not been modified.

---

## Exercise Problem

As part of the first step of the JWT authentication process, create an authentication service that accepts user credentials and returns a JWT.

When the following request is executed:

```bash
curl -u user:pwd http://localhost:8090/authenticate
```

The service should respond with a JWT similar to:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

The implementation consists of three major steps:

1. Create an Authentication Controller and configure Spring Security.
2. Read the Authorization header and decode the username and password.
3. Generate a JWT based on the authenticated user and return it in the response.

---
