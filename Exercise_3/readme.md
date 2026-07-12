# Exercise 3: Sorting Customer Orders

## Scenario

You are tasked with sorting customer orders by their total price on an e-commerce platform. This helps in prioritizing high-value orders.

## Steps

### 1. Understand Sorting Algorithms:

- Explain different sorting algorithms (Bubble Sort, Insertion Sort, Quick Sort, Merge Sort).

### 2. Setup:

- Create a class Order with attributes like orderId, customerName, and totalPrice.

### 3. Implementation:

- Implement Bubble Sort to sort orders by totalPrice.
- Implement Quick Sort to sort orders by totalPrice.

### 4. Analysis:

- Compare the performance (time complexity) of Bubble Sort and Quick Sort.
- Discuss why Quick Sort is generally preferred over Bubble Sort.


### Answers

#### Sorting Algorithms

- Bubble Sort compares adjacent elements and swaps them when required.
- Insertion Sort places elements in their correct position one by one.
- Quick Sort divides data using a pivot and sorts smaller sections.
- Merge Sort divides data and combines sorted parts.

#### Time Complexity

| Algorithm | Average Case | Worst Case |
|---|---|---|
| Bubble Sort | O(n²) | O(n²) |
| Quick Sort | O(n log n) | O(n²) |

#### Why Quick Sort is Preferred

Quick Sort is generally preferred because it performs better on large datasets and requires fewer comparisons compared to Bubble Sort.