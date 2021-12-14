"use strict";
const { Hashmap, leftJoin } = require("../left-join");

describe(" LEFT JOIN", () => {
  const map1 = new Hashmap(1000);
  map1.add("a", "aa");
  map1.add("b", "bb");
  map1.add("c", "cc");
  const map2 = new Hashmap(1000);
  map2.add("a", "ao");
  map2.add("c", "co");
  map2.add("d", "dd");
  test("should return a left join between two hash maps", () => {
    const arr = leftJoin(map1, map2);
    expect(arr[0].toString()).toBe("a,aa,ao");
    expect(arr[1].toString()).toBe("b,bb,null");
    expect(arr[2].toString()).toBe("c,cc,co");
  });
});
