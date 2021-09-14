/* 자신의 위치로 부터 상하좌우 */
/* 좋아하는 학생이 가장 많이 인접하면 들어간다. */
/* 인접한 것 중에 가장 많은 빈 칸으로 정한다 */
/* 행의 번호가 가장 작은 칸으로 열의 번호가 가장 작은 칸으로 정한다 */
const solution = (N, data) => {
    let answer = 0;
    const map = new Array(N);
    for (let i = 0; i < map.length; i++) {
        map[i] = new Array(N).fill(0);
    }


    for (let i = 0; i < data.length; i++) {
        const nowStudent = data[i][0];
        if (i === 0) {
            map[1][1] = nowStudent;
            continue;
        }

        /* 좋아하는 학생이 가장 많이 인접한 칸 찾기 */
        let maxLikeStudent = [];
        let maxCnt = 0;
        for (let row = 0; row < map.length; row++) {
            for (let col = 0; col < map.length; col++) {
                if (map[row][col] !== 0) continue;

                let cnt = 0;
                if (row - 1 >= 0) {

                    if (data[i].indexOf(map[row - 1][col]) !== -1) {
                        cnt++;
                    }

                }

                if (row + 1 < map.length) {

                    if (data[i].indexOf(map[row + 1][col]) !== -1) {
                        cnt++;
                    }
                }

                if (col - 1 >= 0) {

                    if (data[i].indexOf(map[row][col - 1]) !== -1) {
                        cnt++;
                    }
                }

                if (col + 1 <= map.length) {
                    if (data[i].indexOf(map[row][col + 1]) !== -1) {
                        cnt++;
                    }
                }

                if (maxCnt < cnt) {
                    maxCnt = cnt;
                    maxLikeStudent = [[row, col]];
                } else if (maxCnt === cnt) {
                    maxLikeStudent.push([row, col]);
                }
            }
        }

        //비어있는 칸 가장 많은 것 구하기
        let maxEmptySpace = [];
        maxCnt = 0;
        for (let i = 0; i < maxLikeStudent.length; i++) {

            const row = maxLikeStudent[i][0];
            const col = maxLikeStudent[i][1];
            let cnt = 0;

            if (row - 1 >= 0) {
                if (map[row - 1][col] === 0) {
                    cnt++;
                }
            }

            if (row + 1 < map.length) {
                if (map[row + 1][col] === 0) {
                    cnt++;
                }
            }

            if (col - 1 >= 0) {
                if (map[row][col - 1] === 0) {
                    cnt++;
                }
            }

            if (col + 1 < map.length) {
                if (map[row][col + 1] === 0) {
                    cnt++;
                }
            }

            if (maxCnt < cnt) {
                maxCnt = cnt;
                maxEmptySpace = [[row, col]];
            } else if (maxCnt === cnt) {

                maxEmptySpace.push([row, col]);
            }
        }

        //행이 가장 낮은 것으로 오름차순, 같다면 열이 가장 낮은 것 기준으로 오름차순
        maxEmptySpace.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            } else {
                return a[1] - b[1];
            }
        });

        // 정렬되었으므로 가장 먼저 나오는 것이 최적 값
        for (let i = 0; i < maxEmptySpace.length; i++) {
            const finalRow = maxEmptySpace[0][0];
            const finalCol = maxEmptySpace[0][1];
            map[finalRow][finalCol] = nowStudent;
            break;
        }
    }

    /* map 학생 배치 끝 */

    //현재 학생의 data에서의 인덱스 map에 저장시키기
    const dataMap = new Map();
    for (let i = 0; i < data.length; i++) {
        dataMap.set(data[i][0], i);
    }

    //인접한 칸의 학생 수 구하기
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map.length; col++) {

            const idx = +dataMap.get(map[row][col]);
            let cnt = 0;
            if (row - 1 >= 0) {

                if (data[idx].indexOf(map[row - 1][col]) !== -1) {
                    cnt++;
                }
            }

            if (row + 1 < map.length) {
                if (data[idx].indexOf(map[row + 1][col]) !== -1) {
                    cnt++;
                }
            }

            if (col - 1 >= 0) {
                if (data[idx].indexOf(map[row][col - 1]) !== -1) {
                    cnt++;
                }
            }

            if (col + 1 < map.length) {
                if (data[idx].indexOf(map[row][col + 1]) !== -1) {
                    cnt++;
                }
            }

            if (cnt === 0) {

            } else if (cnt === 1) {

                answer += 1;

            } else if (cnt === 2) {

                answer += 10;

            } else if (cnt === 3) {
                answer += 100;

            } else if (cnt === 4) {
                answer += 1000;
            }
        }

    }
    return answer;
}

const init = () => {

    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n'); //테스트 시 text 파일 명, 제출 시 /dev/stdin으로 path 설정

    const N = +input[0];
    const data = [];

    for (let i = 1; i <= N * N; i++) {
        data.push(input[i].split(' '));
    }
    const answer = solution(N, data);

    console.log(answer);
}

init();

