const HashRepeated = require("../repeated-word/hashmap-repeated-word");

describe("Hash Map Repeated Words", () => {
  it("case1", async () => {
    const myTable1 = new HashRepeated(1111);

    let test1 = myTable1.repeated(
      "Once upon a time, there was a brave princess who..."
    );

    expect(test1).toBe("a");
  });
  it("case2", async () => {
    const myTable2 = new HashRepeated(2222);

    let test2 = myTable2.repeated(
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
    );

    expect(test2).toBe("it");
  });

  it("case3", async () => {
    const myTable3 = new HashRepeated(3333);

    let test3 = myTable3.repeated(
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
    );

    expect(test3).toBe("summer");
  });
});
