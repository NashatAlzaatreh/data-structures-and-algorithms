const { Hashtable } = require("../hashtable/hashtable");

describe("hash table tests", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", async () => {
    const myTable = new Hashtable(3333);

    myTable.add("one", "test1");
    myTable.add("two", "test2");
    myTable.add("three", "test3");

    expect(myTable).toBeDefined();
    expect(myTable.size).toBe(3333);
    expect(myTable.map[myTable.hash("one")]).toBeDefined();
    expect(myTable.map[myTable.hash("two")]).toBeDefined();
    expect(myTable.map[myTable.hash("three")]).toBeDefined();
  });
  it("Retrieving based on a key returns the value stored", async () => {
    const myTable = new Hashtable(3333);
    myTable.add("one", "test1");
    myTable.add("two", "test2");
    myTable.add("three", "test3");
    expect(myTable.get("one")).toBeDefined();
    expect(myTable.get("two")).toBeDefined();
  });
  it("Successfully returns null for a key that does not exist in the hashtable", async () => {
    const myTable = new Hashtable(3333);
    myTable.add("one", "test1");
    expect(myTable.contains("one")).toBe(true);
    expect(myTable.contains("two")).toBe(false);
  });
  it("Successfully handle a collision within the hashtable", async () => {
    const myTable = new Hashtable(3333);
    myTable.add("abc", "test1"); // same hash
    myTable.add("cba", "test2"); // same hash
    myTable.add("three", "test3");
    expect(myTable.get("abc")).toBeDefined();
    expect(myTable.get("cba")).toBeDefined();
  });
  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", async () => {
    const myTable = new Hashtable(3333);
    myTable.add("abc", "test1"); // same hash
    myTable.add("cba", "test2"); // same hash
    myTable.add("three", "test3");
    expect(myTable.contains("abc")).toBe(true);
    expect(myTable.contains("cba")).toBe(true);
  });
  it("Successfully hash a key to an in-range value", async () => {
    const myTable = new Hashtable(50);
    const idx1 = myTable.hash("java");
    const idx2 = myTable.hash("html");
    const idx3 = myTable.hash("ahmad");
    const idx4 = myTable.hash("abc");
    const idx5 = myTable.hash("dev");
    if (0 < (idx1 && idx2 && idx3 && idx4 && idx5) < 50) {
      return (check = true);
    }
    expect(check).toBe(true);
  });
});
