--Scenario 3: Transfer Funds
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account_id IN Accounts.AccountID%TYPE,
    p_destination_account_id IN Accounts.AccountID%TYPE,
    p_amount IN NUMBER
)
IS
    v_source_balance Accounts.Balance%TYPE;
BEGIN
    SELECT Balance
    INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id;

    IF v_source_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_source_account_id;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_destination_account_id;

        DBMS_OUTPUT.PUT_LINE(
            'Amount '
            || p_amount
            || ' transferred from account '
            || p_source_account_id
            || ' to account '
            || p_destination_account_id
        );

        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Account not found.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
        ROLLBACK;
END;

--Run the procedure:
BEGIN
    TransferFunds(101, 102, 2000);
END;

--Check result:
SELECT * FROM Accounts;