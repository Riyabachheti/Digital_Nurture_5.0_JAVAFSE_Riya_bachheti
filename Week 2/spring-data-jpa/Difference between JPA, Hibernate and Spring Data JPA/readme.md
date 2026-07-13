# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Introduction

Java applications interact with relational databases using **Object-Relational Mapping (ORM)**. ORM is a technique that maps Java objects to database tables, allowing developers to work with objects instead of writing SQL for every operation.

Three commonly used technologies in Java persistence are:

- **JPA (Java Persistence API)** – A specification that defines ORM standards.
- **Hibernate** – An ORM framework that implements the JPA specification.
- **Spring Data JPA** – A Spring module built on top of JPA that simplifies database access.

---

## Core Differences

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| **Definition** | A Java specification (JSR 338) that defines standards for Object-Relational Mapping (ORM). | An ORM framework that provides a concrete implementation of JPA. | A Spring module that simplifies database access using JPA. |
| **Type** | Specification | ORM Framework | Spring Framework Module |
| **Implementation** | Does not provide any implementation; only defines interfaces and annotations. | Provides the actual implementation of JPA. | Uses a JPA implementation (typically Hibernate) internally. |
| **Primary Role** | Defines how Java objects should be mapped to relational databases. | Performs the actual database operations and object mapping. | Reduces boilerplate code by automatically generating repository implementations. |
| **Database Communication** | Cannot communicate directly with the database. | Directly communicates with the database. | Uses Hibernate (or another JPA provider) to communicate with the database. |
| **CRUD Operations** | Defines standard persistence APIs but requires an implementation to execute them. | CRUD operations are performed using `EntityManager` or `Session`, usually through DAO/Repository classes. | Provides built-in CRUD methods by extending `JpaRepository`. |
| **Boilerplate Code** | High | Moderate | Very Low |
| **Query Support** | JPQL | JPQL, HQL, Criteria API, Native SQL | JPQL, Native SQL, Method Name Queries |
| **Can Work Independently?** | No | Yes | No |
| **Learning Difficulty** | Easy | Moderate | Easy |
| **Common Usage** | Defines persistence standards | Implements ORM and persistence logic | Rapid development in Spring Boot applications |

---

## Architecture

The relationship between these technologies can be represented as follows:

```text
Application
        │
        ▼
Spring Data JPA
        │
        ▼
JPA (Specification)
        │
        ▼
Hibernate (Implementation)
        │
        ▼
Database
```

### Layer Explanation

- **Application Layer**
    - Contains the Spring Boot application and business logic.

- **Spring Data JPA**
    - Provides repository interfaces.
    - Generates CRUD implementations automatically.
    - Reduces boilerplate code.

- **JPA**
    - Defines the persistence API and ORM standards.
    - Specifies annotations such as `@Entity`, `@Table`, `@Id`, and relationships.

- **Hibernate**
    - Implements the JPA specification.
    - Converts Java objects into SQL statements.
    - Executes database operations.

- **Database**
    - Stores the application data (MySQL, PostgreSQL, Oracle, etc.).

---

## Code Comparison

### Using Hibernate (Manual DAO Implementation)

```java
@Repository
public class StudentDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public void save(Student student) {
        entityManager.persist(student);
    }

    public Student findById(int id) {
        return entityManager.find(Student.class, id);
    }
}
```

In Hibernate, developers generally create DAO or Repository classes manually to perform CRUD operations.

---

### Using Spring Data JPA

```java
public interface StudentRepository extends JpaRepository<Student, Integer> {

    List<Student> findByName(String name);

}
```

By simply extending `JpaRepository`, Spring Data JPA automatically provides methods such as:

- `save()`
- `findById()`
- `findAll()`
- `delete()`
- `count()`

No implementation class is required.

---

## Conclusion

JPA is a **specification** that defines the standard rules for object-relational mapping but does not provide an implementation. Hibernate is a **popular ORM framework** that implements JPA and performs the actual persistence operations such as object mapping and SQL generation. Spring Data JPA is a **Spring abstraction** built on top of JPA that simplifies database access by automatically generating repository implementations and reducing boilerplate code. In most Spring Boot applications, Spring Data JPA works together with Hibernate to provide an efficient and developer-friendly persistence layer.