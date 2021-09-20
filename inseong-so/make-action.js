const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 무시할 파일 목록
const ignoreFiles = ['README.md', 'make-action.js'];

// 현재 경로의 알고리즘 디렉토리 가져오기
const algoDir = fs
  .readdirSync('.')
  .filter(file => ignoreFiles.indexOf(file) === -1);

// 앞글자 만들기
const capitalize = str => {
  let returnValue = '';
  for (let s of str) {
    if (s === s.toUpperCase()) {
      returnValue += ' ' + s;
    } else {
      returnValue += s;
    }
  }

  return returnValue.charAt(0).toUpperCase() + returnValue.slice(1);
};

console.log('=============== [ 알고리즘 파일 생성기 ] ===============');
algoDir.forEach((e, i) => {
  console.log(i + 1, capitalize(e));
});
console.log('>> 알고리즘 분류와 번호를 입력해주세요(예 : 1, 1555).');

rl.on('line', function (line) {
  if (line.indexOf(', ') === -1) {
    console.log('>> 입력 값이 올바르지 않습니다. 아래의 형태로 입력해주세요.');
    console.log('3, 12345');
    rl.close();
  }

  const [dirNo, problem] = line.split(', ');
  const dirName = algoDir[dirNo - 1];
  const dir = fs.existsSync(`./${dirName}/${problem}`);
  if (!dir) fs.mkdirSync(`./${dirName}/${problem}`);
  fs.appendFile(`./${dirName}/${problem}/${problem}.txt`, '', function (err) {
    if (err) throw err;
  });
  fs.writeFileSync(
    `./${dirName}/${problem}/${problem}.js`,
    `const input = require('fs').readFileSync('stdin').toString().trim().split(require('os').EOL);`,
    function (err) {
      if (err) throw err;
    },
  );
  fs.appendFile(`./${dirName}/${problem}/stdin`, '', function (err) {
    if (err) throw err;
  });
  fs.writeFileSync(`./${dirName}/${problem}/README.md`, '', function (err) {
    if (err) throw err;
  });

  console.log(`>> [ 문제 ${problem} ]가 정상적으로 생성되었습니다.`);
  console.log('>> 스크립트를 종료합니다.');
  rl.close();
});
rl.on('close', function () {
  process.exit();
});
