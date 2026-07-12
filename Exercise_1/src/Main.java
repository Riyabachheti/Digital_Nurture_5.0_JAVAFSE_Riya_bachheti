import java.util.HashMap;
import java.util.Scanner;

class Product {

    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(int productId, String productName, int quantity, double price) {

        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() {

        return productId;
    }

    public void updateProduct(String productName, int quantity, double price) {

        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    @Override
    public String toString() {

        return "Product ID   : " + productId +
                "\nProduct Name : " + productName +
                "\nQuantity     : " + quantity +
                "\nPrice        : $" + price +
                "\n";
    }
}

class Inventory {
    private HashMap<Integer, Product> products = new HashMap<>();
    public void addProduct(Product product) {


        if (products.containsKey(product.getProductId())) {
            System.out.println("Product ID already exists.");

        } else {

            products.put(product.getProductId(), product);
            System.out.println("Product added successfully.");
        }
    }

    public void updateProduct(int id, String name, int quantity, double price) {

        if (products.containsKey(id)) {
            products.get(id).updateProduct(name, quantity, price);
            System.out.println("Product updated successfully.");

        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(int id) {
        if (products.remove(id) != null) {
            System.out.println("Product deleted successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void displayProducts() {
        if (products.isEmpty()) {
            System.out.println("Inventory is empty.");
            return;
        }
        for (Product product : products.values()) {

            System.out.println(product);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Inventory inventory = new Inventory();
        Product p1 = new Product(
                101,
                "Mechanical Keyboard",
                25,
                79.99
        );
        Product p2 = new Product(
                102,
                "Wireless Mouse",
                40,
                29.99
        );

        inventory.addProduct(p1);
        inventory.addProduct(p2);
        System.out.println("\nCurrent Inventory");

        inventory.displayProducts();

        System.out.println("Updating Product");

        inventory.updateProduct(
                101,
                "RGB Mechanical Keyboard",
                20,
                89.99
        );

        System.out.println("\nInventory After Update");
        inventory.displayProducts();
        System.out.println("Deleting Product");
        inventory.deleteProduct(102);

        System.out.println("\nFinal Inventory");
        inventory.displayProducts();
        sc.close();
    }
}