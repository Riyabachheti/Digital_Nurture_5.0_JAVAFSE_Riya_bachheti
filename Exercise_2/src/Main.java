import java.util.Scanner;

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {

        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public String toString() {
        return "Product ID   : " + productId +
                "\nProduct Name : " + productName +
                "\nCategory     : " + category +
                "\n";
    }
}

class SearchOperations {
    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(name)) {

                return product;
            }
        }
        return null;
    }



    // Binary Search
    public static Product binarySearch(Product[] products, String name) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int middle = (left + right) / 2;
            int result = products[middle]
                    .getProductName()
                    .compareToIgnoreCase(name);

            if (result == 0) {

                return products[middle];

            } else if (result < 0) {

                left = middle + 1;

            } else {

                right = middle - 1;
            }
        }
        return null;
    }
}



public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        // Products sorted
        Product[] products = {


                new Product(
                        101,
                        "Bluetooth Speaker",
                        "Electronics"
                ),


                new Product(
                        102,
                        "Gaming Chair",
                        "Furniture"
                ),


                new Product(
                        103,
                        "Mechanical Keyboard",
                        "Electronics"
                ),


                new Product(
                        104,
                        "Smart Watch",
                        "Accessories"
                ),


                new Product(
                        105,
                        "Wireless Mouse",
                        "Electronics"
                )
        };
        System.out.print("Enter product name to search: ");
        String searchName = sc.nextLine();



        System.out.println("\nLinear Search Result");

        Product linearResult = SearchOperations.linearSearch(
                products,
                searchName
        );

        if (linearResult != null) {

            System.out.println(linearResult);

        } else {

            System.out.println("Product not found.");
        }

        System.out.println("Binary Search Result");

        Product binaryResult = SearchOperations.binarySearch(
                products,
                searchName
        );


        if (binaryResult != null) {
            System.out.println(binaryResult);

        } else {
            System.out.println("Product not found.");
        }
        sc.close();
    }
}