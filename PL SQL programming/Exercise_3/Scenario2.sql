--Scenario 2: Update Employee Bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN Employees.Department%TYPE,
    p_bonus_percentage IN NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percentage / 100)
    WHERE Department = p_department;

    DBMS_OUTPUT.PUT_LINE(
        'Bonus of '
        || p_bonus_percentage
        || '% applied to department: '
        || p_department
    );

    COMMIT;
END;

--Run the procedure:
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;

--check results
SELECT * FROM Employees;