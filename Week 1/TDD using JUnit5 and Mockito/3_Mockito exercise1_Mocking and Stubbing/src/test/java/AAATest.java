import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.assertEquals;

public class AAATest {
    private List<String> list;

    @Before
    public void setUp() {
        list = new ArrayList<>();
    }

    @After
    public void tearDown() {
        list.clear();
        list = null;
    }
    @Test
    public void testListAddWithAAAPattern() {

        String expectedElement = "IntelliJ";
        int expectedSize = 1;

        // Act: Perform the exact operation being tested
        list.add(expectedElement);

        // Assert: Verify the outcome matches expectations
        assertEquals(expectedSize, list.size());
        assertEquals(expectedElement, list.get(0));
    }
}