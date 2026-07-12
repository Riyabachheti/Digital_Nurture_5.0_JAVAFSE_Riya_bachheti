class Order {

    private int orderId;
    private String customerName;
    private double totalPrice;

    public Order(int orderId, String customerName, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }
    public double getTotalPrice() {
        return totalPrice;
    }

    @Override
    public String toString() {
        return "Order ID      : " + orderId +
                "\nCustomer Name : " + customerName +
                "\nTotal Price   : $" + String.format("%.2f", totalPrice) +
                "\n";
    }
}

class SortOperations {

    // Bubble Sort
    public static void bubbleSort(Order[] orders) {

        for (int i = 0; i < orders.length - 1; i++) {
            for (int j = 0; j < orders.length - i - 1; j++) {

                if (orders[j].getTotalPrice() >
                        orders[j + 1].getTotalPrice()) {

                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Quick Sort
    public static void quickSort(Order[] orders, int low, int high) {

        if (low < high) {
            int pivot = partition(orders, low, high);

            quickSort(orders, low, pivot - 1);
            quickSort(orders, pivot + 1, high);
        }
    }

    private static int partition(Order[] orders, int low, int high) {

        double pivot = orders[high].getTotalPrice();
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (orders[j].getTotalPrice() <= pivot) {

                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }

        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;
        return i + 1;
    }
}

public class Main {
    public static void main(String[] args) {
        Order[] orders = {
                new Order(
                        301,
                        "Emma",
                        250.75
                ),

                new Order(
                        302,
                        "Noah",
                        120.50
                ),

                new Order(
                        303,
                        "Olivia",
                        560.00
                ),

                new Order(
                        304,
                        "Liam",
                        85.99
                ),
        };
        System.out.println("Orders Before Sorting:");

        for (Order order : orders) {
            System.out.println(order);
        }

        SortOperations.quickSort(
                orders,
                0,
                orders.length - 1
        );

        System.out.println("Orders After Sorting by Price:");
        for (Order order : orders) {

            System.out.println(order);
        }
    }
}