# Spring REST Hands-on

This project contains the implementation of the Spring REST hands-on exercises using Spring Boot, Maven, Spring Core, and Spring Web.

## Objectives

- Demonstrate creation of a Spring Boot Application using Spring Initializr.
- Explain the need and benefits of Spring Boot.
- Demonstrate loading beans from Spring Configuration XML.
- Demonstrate inclusion of logging in a Spring Boot Application.
- Explain HTTP Request and HTTP Response.
- Explain the need and benefits of RESTful Web Services.
- Demonstrate implementation of RESTful Web Services using GET methods.
- Demonstrate retrieval of data using path variables and service layer.

---

# Hands-on 1

## Create a Spring Web Project using Maven

Follow the steps below to create the project:

1. Go to https://start.spring.io/
2. Change Group as **com.cognizant**.
3. Change Artifact Id as **spring-learn**.
4. Select **Spring Boot DevTools** and **Spring Web** dependencies.
5. Generate and download the project.
6. Extract the project.
7. Build the project using Maven.
8. Import the project into the IDE.
9. Include logs to verify the `main()` method of `SpringLearnApplication`.
10. Run the `SpringLearnApplication` class.

---

# Hands-on 2

## Hello World RESTful Web Service

Write a REST service in the Spring Learn application that returns the text **"Hello World!!"** using Spring Web Framework.

### Requirements

- **HTTP Method:** GET
- **URL:** `/hello`
- **Controller:** `com.cognizant.spring_learn.controller.HelloController`
- **Method Signature:**

```java
public String sayHello()
```

### Method Implementation

Return the hard-coded string:

```text
Hello World!!
```

### Sample Request

```
http://localhost:8083/hello
```

### Sample Response

```
Hello World!!
```

**Important:** Include **START** and **END** logs in the `sayHello()` method.

---

# Hands-on 3

## REST - Country Web Service

Write a REST service that returns India's country details from the Spring XML configuration.

### Requirements

- **URL:** `/country`
- **Controller:** `com.cognizant.spring_learn.controller.CountryController`
- **Method Annotation:** `@RequestMapping`
- **Method Name:** `getCountryIndia()`

### Method Implementation

- Load the India bean from `country.xml`.
- Return the `Country` object.

### Sample Request

```
http://localhost:8083/country
```

### Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

---

# Hands-on 4

## REST - Get Country Based on Country Code

Write a REST service that returns a specific country based on the country code. The country code should be **case-insensitive**.

### Requirements

- **Controller:** `com.cognizant.spring_learn.controller.CountryController`
- **Method Annotation:**

```java
@GetMapping("/countries/{code}")
```

- **Method Name:**

```java
getCountry(String code)
```

- Invoke:

```java
countryService.getCountry(code)
```

### Service

`com.cognizant.spring_learn.service.CountryService`

### Service Method Responsibilities

- Get the country code using `@PathVariable`.
- Read the country list from `country.xml`.
- Iterate through the country list.
- Perform a case-insensitive comparison of the country code.
- Return the matching `Country` object.

### Sample Request

```
http://localhost:8083/countries/in
```

### Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

---

# Hands-on 5

## Spring Core – Load List of Countries from Spring Configuration XML

Retrieve a list of four countries using Spring XML configuration.

### Tasks Performed

- Created separate beans for the following countries:
  - India
  - United States
  - Germany
  - Japan
- Created an `ArrayList` bean containing all four country beans.
- Implemented the `displayCountries()` method in `SpringLearnApplication`.
- Loaded the country list using `ApplicationContext`.
- Displayed the list of countries using debug logs.
- Included **START** and **END** logs in the method.

---
