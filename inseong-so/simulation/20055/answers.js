const getReadLine = () => {
  const readline = require('readline');
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

const rl = getReadLine();

const solve = () => {
  let robots = new Array(N * 2).fill(0);
  let time = 0,
    cnt = 0;

  while (cnt < K) {
    time++;

    const lastbelt = belt[2 * N - 1],
      lastrobot = robots[2 * N - 1];
    belt.pop();
    robots.pop();
    belt.unshift(lastbelt);
    robots.unshift(lastrobot);

    robots[N - 1] = 0;

    for (let i = N - 2; i >= 0; i--) {
      if (!robots[i + 1] && robots[i] && belt[i + 1]) {
        belt[i + 1] -= 1;
        if (!belt[i + 1]) cnt++;
        robots[i + 1] = robots[i];
        robots[i] = 0;
      }
    }
    robots[N - 1] = 0;

    if (belt[0]) {
      belt[0] -= 1;
      if (!belt[0]) cnt++;
      robots[0] = time;
    }
  }
  console.log(time);
};

let N, K, belt;
let lineCnt = 0;

const start = rl => {
  rl.on('line', line => {
    const tempInput = line.split(' ').map(Number);
    if (!lineCnt) {
      [N, K] = tempInput;
    } else {
      belt = tempInput;
    }

    lineCnt++;
  }).on('close', () => {
    solve();
    process.exit();
  });
};

start(rl);
