public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started.");
        logger2.log("User logged in.");

        if (logger1 == logger2) {
            System.out.println("Only one Logger instance is used.");
        } else {
            System.out.println("Different Logger instances were created.");
        }
    }
}