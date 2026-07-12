# Exercise 2: E-commerce Platform Search Function

## Scenario

You are working on the search functionality of an e-commerce platform. The search needs to be optimized for fast performance.

## Steps

### 1. Understand Asymptotic Notation:

- Explain Big O notation and how it helps in analyzing algorithms.
- Describe the best, average, and worst-case scenarios for search operations.

### 2. Setup:

- Create a class Product with attributes for searching, such as productId, productName, and category.

### 3. Implementation:

- Implement linear search and binary search algorithms.
- Store products in an array for linear search and a sorted array for binary search.

### 4. Analysis:

- Compare the time complexity of linear and binary search algorithms.

| Algorithm | Average Case | Worst Case |
|---|---|---|
| Linear Search | O(n) | O(n) |
| Binary Search | O(log n) | O(log n) |

- Discuss which algorithm is more suitable for your platform and why.
- Ans: Binary Search is better for large e-commerce platforms because it is faster, but the product list must be sorted first. Linear Search is useful for smaller datasets.