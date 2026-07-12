import java.util.Scanner;

public class Main  {

    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }


    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);


        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();


        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble() / 100;


        System.out.print("Enter number of years: ");
        int years = sc.nextInt();


        if (years < 0) {
            System.out.println("Years cannot be negative.");
            return;
        }


        double futureValue = predictFutureValue(
                currentValue,
                growthRate,
                years
        );


        System.out.printf("\nPredicted Future Value: %.2f", futureValue);


        sc.close();
    }
}