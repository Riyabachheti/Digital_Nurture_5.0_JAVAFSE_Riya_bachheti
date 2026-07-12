-- Scenario 1: Process Monthly Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');

    COMMIT;
END;

-- 2. Execute procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

-- 3. Check output/result
SELECT * FROM Accounts;