BEGIN
    FOR customer_rec IN (
        SELECT CustomerID, Name, Balance
        FROM Customers
    )
    LOOP
        IF customer_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ' 
                || customer_rec.Name 
                || ' promoted to VIP status.'
            );
        END IF;
    END LOOP;

    COMMIT;
END;
