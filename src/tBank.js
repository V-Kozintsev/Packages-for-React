/* //7
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  const [n, k] = line.split(" ").map(Number);
  readline.once("line", (line2) => {
    const a = line2.split(" ").map(Number);
    for (let r = 1; r <= k; r++) {
      let result = calculateF(a, r);
      console.log(result);
    }
    readline.close();
  });
});

function calculateF(a, r) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      b.push(a[i] + a[j]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    b[i] = Math.pow(b[i], r);
  }

  let sum = b.reduce((acc, val) => acc + val, 0);
  return sum % 998244353;
}
//6
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const coordinates = [];

let lineCount = 0;

readline.on("line", (line) => {
  lineCount++;
  if (lineCount === 1) {
    n = parseInt(line);
  } else {
    const [x, y] = line.split(" ").map(Number);
    coordinates.push({ x, y });
  }

  if (lineCount === n + 1) {
    readline.close();
    console.log(getMaxHappyTriples(coordinates));
  }
});

function isNonDegenerate(p1, p2, p3) {
  return (p2.y - p1.y) * (p3.x - p2.x) !== (p3.y - p2.y) * (p2.x - p1.x);
}

function getMaxHappyTriples(coords) {
  let maxTriples = 0;
  const numPeople = coords.length;

  function findMaxTriplesRecursive(index, used, triplesCount) {
    if (index === numPeople) {
      maxTriples = Math.max(maxTriples, triplesCount);
      return;
    }

    // Try not using the current person
    findMaxTriplesRecursive(index + 1, used, triplesCount);

    // Try using the current person in a new triple
    for (let i = index + 1; i < numPeople; i++) {
      for (let j = i + 1; j < numPeople; j++) {
        if (
          !used[index] &&
          !used[i] &&
          !used[j] &&
          isNonDegenerate(coords[index], coords[i], coords[j])
        ) {
          used[index] = used[i] = used[j] = true;
          findMaxTriplesRecursive(index + 1, used, triplesCount + 1);
          used[index] = used[i] = used[j] = false; // Backtrack
        }
      }
    }
  }

  findMaxTriplesRecursive(0, new Array(numPeople).fill(false), 0);
  return maxTriples;
}
//5
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, s, a;

readline.on("line", (line) => {
  if (!n) {
    [n, s] = line.split(" ").map(Number);
  } else {
    a = line.split(" ").map(Number);
    solve();
    readline.close();
  }
});

function solve() {
  let totalParts = 0;

  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      let subArraySum = a.slice(l, r + 1).reduce((sum, val) => sum + val, 0);
      let parts = Math.ceil(subArraySum / s);
      totalParts += parts;
    }
  }

  console.log(totalParts);
}
//4
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  const [n, x, y, z] = line.split(" ").map(Number);
  readline.once("line", (line) => {
    const a = line.split(" ").map(Number);
    solve(n, x, y, z, a);
    readline.close();
  });
});

function solve(n, x, y, z, a) {
  let minOperations = Infinity;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      for (let k = 0; k < n; ++k) {
        let curOps = 0;
        let b = [...a];

        curOps += Math.ceil((x - (b[i] % x)) % x);
        b[i] += Math.ceil((x - (b[i] % x)) % x);

        curOps += Math.ceil((y - (b[j] % y)) % y);
        b[j] += Math.ceil((y - (b[j] % y)) % y);

        curOps += Math.ceil((z - (b[k] % z)) % z);
        b[k] += Math.ceil((z - (b[k] % z)) % z);

        minOperations = Math.min(minOperations, curOps);
      }
    }
  }
  console.log(minOperations);
}
//3
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let distances;

readline.on("line", (line) => {
  if (!n) {
    [n, m] = line.split(" ").map(Number);
  } else {
    distances = line.split(" ").map(Number);
    solve();
    readline.close();
  }
});

function solve() {
  let firstDay = distances[0];
  let secondDay = distances[1];
  let goodDaysCount = 0;
  let corrections = 0;

  for (let i = 2; i < n; i++) {
    if (distances[i] >= firstDay && distances[i] <= secondDay) {
      goodDaysCount++;
    }
  }

  if (goodDaysCount >= m) {
    console.log(0);
    return;
  }

  for (let i = 2; i < n; i++) {
    while (goodDaysCount < m) {
      if (distances[i] < firstDay) {
        distances[i]++;
        corrections++;
        if (distances[i] >= firstDay && distances[i] <= secondDay) {
          goodDaysCount++;
        }
      } else if (distances[i] > secondDay) {
        distances[i]--;
        corrections++;
        if (distances[i] >= firstDay && distances[i] <= secondDay) {
          goodDaysCount++;
        }
      } else {
        goodDaysCount++;
      }

      if (goodDaysCount >= m) break;
    }
  }

  console.log(corrections);
}
//2
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let currentLine = 0;
let result = [];

function findMaxBouquetCost(money) {
  if (money < 7) {
    return -1;
  }
  let maxCost = -1;
  for (let i = 0; i <= 60; i++) {
    for (let j = i; j <= 60; j++) {
      for (let k = j; k <= 60; k++) {
        const sum = BigInt(2 ** i) + BigInt(2 ** j) + BigInt(2 ** k);
        if (sum <= BigInt(money)) {
          maxCost = Math.max(maxCost, Number(sum));
        }
      }
    }
  }
  return maxCost === -1 ? -1 : maxCost;
}

readline.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    const money = parseInt(line);
    const maxBouquetCost = findMaxBouquetCost(money);
    result.push(maxBouquetCost);

    currentLine++;
    if (currentLine === n) {
      console.log(result.join("\n"));
      readline.close();
    }
  }
});
//1
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  const rIndex = line.indexOf("R");
  const mIndex = line.indexOf("M");

  if (rIndex !== -1 && mIndex !== -1 && rIndex < mIndex) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  readline.close();
});
 */
