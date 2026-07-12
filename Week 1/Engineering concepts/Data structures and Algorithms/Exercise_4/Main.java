public class Main {

    public static void main(String[] args) {
        EmployeeManagement company = new EmployeeManagement(5);

        Employee e1 = new Employee(501, "Arjun", "Software Developer", 65000);
        Employee e2 = new Employee(502, "Sara", "Project Manager", 85000);
        Employee e3 = new Employee(503, "Kevin", "UI Designer", 55000);


        System.out.println("Adding Employees");

        company.addEmployee(e1);
        company.addEmployee(e2);
        company.addEmployee(e3);

        System.out.println("\nEmployee Records");
        company.displayEmployees();


        System.out.println("Searching Employee");
        company.searchEmployee(502);

        System.out.println("Deleting Employee");
        company.deleteEmployee(503);

        System.out.println("Updated Employee Records");
        company.displayEmployees();
    }
}