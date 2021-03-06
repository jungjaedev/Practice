// function boardGame(board, operation) {
//   // 현재위치 좌표
//   let current = board[0][0];
//   // UDRL 이동시 사용할 값
//   let [Y, X] = [0, 0];
//   let answer = 0;
//   const isValid = (Y, X) => Y >= 0 && Y < board.length && X >= 0 && X < board[0].length;
//   // 반복문 (operation.length만큼)
//   for (let move of operation) {
//     // 조건문 => U D R L
//     if (move === 'U') {
//       Y += -1;
//       X += 0;
//     } else if (move === 'D') {
//       Y += 1;
//       X += 0;
//     } else if (move === 'R') {
//       Y += 0;
//       X += 1;
//     } else if (move === 'L') {
//       Y += 0;
//       X += -1;
//     }
//     // 범위 벗어났는지 확인
//     if (!isValid(Y, X)) return 'OUT';
//     // 벗어나지X면 => 좌표의 값을 더해줌
//     current = board[Y][X];
//     answer += current;
//   }
//   return answer;
// }

// /** */

// function boringBlackjack(cards) {
//   let isPrime = num => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   let cnt = 0;
//   let answer = [];
//   let tmp = Array.from({ length: 3 }, () => 0);
//   function DFS(L, s) {
//     if (L === 3) {
//       let sum = tmp[0] + tmp[1] + tmp[2];
//       if (isPrime(sum)) {
//         cnt++;
//         answer.push(tmp.slice());
//       }
//     } else {
//       for (let i = s; i < cards.length; i++) {
//         tmp[L] = cards[i];
//         DFS(L + 1, i + 1);
//       }
//     }
//   }
//   DFS(0, 0);
//   return cnt;
// }

// // 토이 matrix problem
// const spiralTraversal = function (matrix) {
//   // 각 방향마다 row와 col의 변화를 저장
//   const RIGHT = [0, 1];
//   const DOWN = [1, 0];
//   const LEFT = [0, -1];
//   const UP = [-1, 0];
//   // 각 방향을 위한 lookup table
//   const MOVES = [RIGHT, DOWN, LEFT, UP];
//   const M = matrix.length;
//   const N = matrix[0].length;
//   const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

//   let cnt = 0;
//   let row = 0,
//     col = -1;
//   let direction = 0;
//   let result = '';
//   while (cnt < M * N) {
//     const move = MOVES[direction];
//     const [rd, cd] = move;

//     row = row + rd;
//     col = col + cd;
//     while (isValid(row, col) && matrix[row][col] !== false) {
//       result = result + matrix[row][col];
//       // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
//       matrix[row][col] = false;
//       row = row + rd;
//       col = col + cd;
//       cnt++;
//     }
//     // row, col 이 행렬의 범위를 벗어났기 때문에,
//     // 진행된 방향의 반대로 한 칸 이동한다.
//     row = row - rd;
//     col = col - cd;

//     // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
//     direction = (direction + 1) % 4;
//   }
//   return result;
// };

// function divideChocolateStick(M, N) {
//   // 최대 공약수를 구하는 유클리드 호제법
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const GCD = gcd(M, N);

//   let result = [];
//   // 시간 복잡도를 고려하여 최대 공약수의 약수를 구합니다.
//   for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
//     if (GCD % i === 0) {
//       result.push([i, M / i, N / i]);
//       // 최대 공약수의 제곱근 값이 iteratee보다 큰 경우
//       // GCD에 iteratee를 나눈 값이 최대 공약수의 약수가 됩니다.
//       if (i * i < GCD) {
//         let j = GCD / i;
//         result.push([j, M / j, N / j]);
//       }
//     }
//   }
//   // 최대 공약수의 약수를 오름차순으로 정렬합니다.
//   result.sort((a, b) => a[0] - b[0]);
//   return result;
// }

// /**멱집합 풀이 */
// function missHouseMeal(sideDishes) {
//   sideDishes.sort();
//   const res = [];
//   const dfs = (start = 0, arr = []) => {
//     res.push(arr);
//     for (let i = start; i < sideDishes.length; i++) {
//       dfs(i + 1, [...arr, sideDishes[i]]);
//     }
//   };
//   dfs();
//   return res;
// }

// /**bubble sort 풀이*/
// const bubbleSort = function (arr) {
//   function swap(idx1, idx2, arr) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let swaps = 0;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//         swaps++;
//       }
//     }
//     if (swaps === 0) break;
//   }
//   return arr;
// };

// // powerset
// const powerSet = function (str) {
//   const sorted = str.split('').sort();

//   const deduplicated = sorted.reduce((acc, item) => {
//     if (acc[acc.length - 1] === item) {
//       return acc;
//     } else {
//       return acc.concat(item);
//     }
//   });

//   let subSets = [];
//   const pickOrNot = (idx, subset) => {
//     if (idx === deduplicated.length) {
//       subSets.push(subset);
//       return;
//     }
//     pickOrNot(idx + 1, subset);
//     pickOrNot(idx + 1, subset + deduplicated[idx]);
//   };
//   pickOrNot(0, '');
//   return subSets.sort();
// };

// // graph 인접행렬 생성
// function createMatrix(edges) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   let maxNumber = 0;

//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][0] > maxNumber) {
//       maxNumber = edges[i][0];
//     }
//   }
//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][1] > maxNumber) {
//       maxNumber = edges[i][1];
//     }
//   }

//   // for(let i = 0; i < maxNumber+1; i++) {
//   //   result.push(new Array(maxNumber + 1).fill(0));
//   // }
//   result = Array.from(Array(maxNumber + 1), () => Array(maxNumber + 1).fill(0));

//   // maxNumber = Math.max(...edges.flat());

//   // result = new Array(maxNumber+1).fill(0).map(e => new Array(maxNumber+1).fill(0));

//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][2] === 'directed') {
//       result[edges[i][0]][edges[i][1]] = 1;
//       console.log(edges[i][0], edges[i][1]);
//     } else if (edges[i][2] === 'undirected') {
//       result[edges[i][0]][edges[i][1]] = 1;
//       result[edges[i][1]][edges[i][0]] = 1;
//       console.log(edges[i][0], edges[i][1]);
//     }
//   }
//   return result;
// }

let encoder = new TextEncoder(); // 기본 인코딩은 'utf-8'
encoder
  .encode('코')(
    // Uint8Array(3) [236, 189, 148]

    236
  )
  .toString(2)(
    // "11101100"
    189
  )
  .toString(2)(
    // "10111101"
    148
  )
  .toString(2); // "10010100"

// merge sort
const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  return merged;
};

// 삽입정렬
const insertionSort = function (arr, transform = item => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

const LPS = function (str) {
  let resultStr = '';

  for (let i = 0; i <= str.length / 2; i += 1) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);

    if (prefix === suffix) {
      resultStr = prefix;
    }
  }

  return resultStr.length;
};

//toy 1번
function orderOfPresentation(N, K) {
  const used = [];
  let res = 0;

  //used에 N길이만큼 0을 push
  for (let i = 0; i < N; i++) used.push(0);

  //팩토리얼
  const fac = n => {
    let f = 1;
    for (let i = n; i > 0; i--) f *= i;
    return f;
  };

  for (let j = 0; j < K.length; j++) {
    const n = K[j];
    used[n - 1] = 1;
    const p = used.slice(0, n);
    const len = p.filter(i => i === 0).length;
    res += len * fac(N - j - 1);
  }
  return res;
}

console.log(orderOfPresentation(3, [2, 3, 1]));

//fibonacci
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = n => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};

// ---
const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) return middle;
    target < arr[middle] ? (right = middle - 1) : (left = middle + 1);
  }
  return -1;
};

//거듭제곱 리턴

function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

// tree 알고리즘

let dfs = function (node) {
  let values = [node.value];

  node.children.forEach(n => {
    values = values.concat(dfs(n));
  });

  return values;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// Implementation Graph
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // 이미 존재하는 정점이라면 덮어씌워지지 않게 방지합니다.
    this.vertices[vertex] = this.vertices[vertex] || [];
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      // 아무것도 하지않고 종료합니다
      return;
    }

    // 두 정점이 모두 존재한다면
    // 첫번째 정점의 인접 리스트에 두번째 정점을 추가하고 (간선이 존재하지 않을 경우)
    if (!this.hasEdge(fromVertex, toVertex)) {
      this.vertices[fromVertex].push(toVertex);
    }
    // 두번째 정점의 인접 리스트에 첫번째 정점을 추가합니다 (간선이 존재하지 않을 경우)
    if (!this.hasEdge(toVertex, fromVertex)) {
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    // 만약 정점(fromVertex)이 존재하지 않는다면
    if (!this.contains(fromVertex)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      // 아무것도 하지않고 종료합니다
      return;
    }

    // 두 정점이 모두 존재한다면
    // 첫번째 정점의 인접 리스트에 두번째 정점이 있을 경우
    if (this.hasEdge(fromVertex, toVertex)) {
      // 두번째 정점의 인덱스를 찾은 뒤 삭제합니다
      const toVertexIndex = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(toVertexIndex, 1);
    }
    // 두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(toVertex, fromVertex)) {
      // 첫번째 정점의 인덱스를 찾은 뒤 삭제합니다
      const fromVertexIndex = this.vertices[toVertex].indexOf(fromVertex);
      this.vertices[toVertex].splice(fromVertexIndex, 1);
    }
  }

  removeVertex(vertex) {
    // 만약 인자로 넘겨받은 정점이 존재한다면
    if (this.contains(vertex)) {
      // 해당 정점과 연결된 간선을 지우고
      while (this.vertices[vertex].length > 0) {
        this.removeEdge(this.vertices[vertex][0], vertex);
      }
      // 최종적으로 해당 정점을 삭제합니다
      delete this.vertices[vertex];
    }
  }
}

// inequalityNumber
const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(''));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때는 9부터, min을 구할 때는 0부터
      const right = digits[i];
      // 이전 단계에서 사용한 숫자인 경우 스킵
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
      if (idx >= 0) {
        // 항상 바로 직전의 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
        return target;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};

//rotatedArraySearch
const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

// bubble sort
const bubbleSort = function (arr) {
  function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = 0; i < arr.length; i++) {
    let swaps = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        swaps++;
      }
    }
    if (swaps === 0) break;
  }
  return arr;
};

import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, TextInput, StyleSheet, Image, View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Button, Modal, FormControl, NativeBaseProvider } from 'native-base';
import { SSRProvider } from '@react-aria/ssr';

export default function ShowContentModal({ data }) {
  const [isClose, setIsClose] = useState(true);
    const emotionpro = ['기쁨', '행복', '만족', '뿌듯', '설렘'];
	  const emotionneg = ['슬픔', '우울', '걱정', '분노', '실망'];
	    const texts = [
		    '수고했어 오늘도, 아무도 너의 슬픔에 관심없대도 난 늘 응원해. 수고했어.수고했어',
			    '이미 충분히 노력하고 있으니까 힘내라고 말할 수는 없어. 그렇지만, 매일매일 응원하고 있을게',
				    '당신의 맑은 미소가 행복을 주는 오늘입니다',
					  ];
					    const random = Math.floor(Math.random() * texts.length);

						  const goMain = () => {
						      setIsClose(false);
							      // TODO: 모달창꺼지고 메인페이지로 이동
								    };

									  return (
									      <NativeBaseProvider>
										        <Modal isOpen={isClose} onClose={goMain}>
												        <Modal.Content maxWidth="400px">
														          <Modal.CloseButton />
																            <Modal.Header>콩주머니 내용</Modal.Header>
																			          <Modal.Body>
																					              <FormControl>
																								                <FormControl.Label style={{ padding: 20 }}>
																												                <Text>{texts[random]}</Text>
																																              </FormControl.Label>
																																			              </FormControl>
																																						            </Modal.Body>
																																									          <Modal.Footer></Modal.Footer>
																																											          </Modal.Content>
																																													        </Modal>
																																															    </NativeBaseProvider>
																																																  );
																																																  }

																																																  const Content = styled.Text`
																																																    font-size: 18px;
																																																	  border: 1px solid #dce3e8;
																																																	    border-radius: 5px;
																																																		  padding: 3px;
																																																		  `;

																																																		  const HeaderText = styled.Text`
																																																		    font-size: 20px;
																																																			`;

																																																			const styles = StyleSheet.create({
																																																			  textAreaContainer: {
																																																			      borderColor: '#dce3e8',
																																																				      borderWidth: 1,
																																																					      borderRadius: 5,
																																																						      padding: 5,
																																																							    },

																																																								  textArea: {
																																																								      height: 150,
																																																									      justifyContent: 'flex-start',
																																																										    },
																																																											});

																																																											const Bean = styled.ImageBackground`
																																																											  /* flex: 1; */
																																																											    height: 50px;
																																																												  width: 50px;
																																																												    opacity: 0.8;
																																																													`;

																																																													const ImageBackgrounds = styled.ImageBackground`
																																																													  flex: 1;
																																																													    height: 100%;
																																																														  width: 100%;
																																																														    opacity: 0.8;
																																																															`;

																																																															const MainView = styled.View`
																																																															  /* background-color: red; */
																																																															  `;

																																																															  const Grourds = styled.Image`
																																																															    margin-left: 40px;
																																																																  height: 400px;
																																																																    width: 100%;
																																																																	`;

																																																																	const Girl = styled.Image`
																																																																	  margin-top: 20px;
																																																																	    height: 30%;
																																																																		  width: 30%;
																																																																		  `;


import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import * as Update from 'expo-updates';
import styled from 'styled-components/native';
import Nav from '../Home/Nav';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function CalenderContainer({ navigation }) {
  const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
	  const firstWeek = today.clone().startOf('month').week();
	    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

		  // const [dates, setDates] = React.useState([]);
		    // const [markedDates, setMarkedDates] = React.useState(null);
			  // let obj = dates.reduce(
			    //   (c, v) =>
				  //   Object.assign(c, {
				    //   [v]: { marked: true, dotColor: 'red' },
					  //   }),
					    //   {},
						  //   );
						    //   console.log(obj);
							  //   setMarkedDates(obj);

							    const calendarArr = () => {
								    let result = [];
									    let week = firstWeek;
										    for (week; week <= lastWeek; week++) {
											      result = result.concat(
												          <Cal key={week} style={{ flexDirection: 'row' }}>
														            {Array(7)
																	            .fill(0)
																				            .map((data, index) => {
																							              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

																										                if (days.format('MM') !== today.format('MM')) {
																														                return (
																																		                  <View key={index} style={{ backgroundColor: 'lightgray', opacity: 0.3 }}>
																																						                      <Text>{days.format('D')}</Text>
																																											                    </View>
																																																                );
																																																				              } else {
																																																							                  return (
																																																											                    <TouchableOpacity key={index} onPress={() => console.log(days.format('YYYY-MM-DD'))}>
																																																																                    <View style={{ width: 20, height: 20 }}>
																																																																					                      <Text>{days.format('D')}</Text>
																																																																										                      </View>
																																																																															                    </TouchableOpacity>
																																																																																				                );
																																																																																								              }
																																																																																											              })}
																																																																																														          </Cal>
																																																																																																        );
																																																																																																		    }
																																																																																																			    return result;
																																																																																																				  };

																																																																																																				    return (
																																																																																																					    <View
																																																																																																						      style={{
																																																																																																							          alignItems: 'center',
																																																																																																									          justifyContent: 'space-between',
																																																																																																											          width: SCREEN_WIDTH,
																																																																																																													          height: SCREEN_HEIGHT - 60,
																																																																																																															          //       height: SCREEN_HEIGHT - 40
																																																																																																																	        }}
																																																																																																																			    >
																																																																																																																				      <CalContainer className="App" style={{ marginTop: 20, width: SCREEN_WIDTH }}>
																																																																																																																					          <CalMenu>
																																																																																																																							            <TouchableOpacity
																																																																																																																										            onPress={() => {
																																																																																																																													              setMoment(getMoment.clone().subtract(1, 'month'));
																																																																																																																																              }}
																																																																																																																																			            >
																																																																																																																																						            <Text>이전달</Text>
																																																																																																																																									          </TouchableOpacity>
																																																																																																																																											            <Text>{today.format('YYYY 년 MM 월')}</Text>
																																																																																																																																														          <TouchableOpacity
																																																																																																																																																              onPress={() => {
																																																																																																																																																			                setMoment(getMoment.clone().add(1, 'month'));
																																																																																																																																																							            }}
																																																																																																																																																										          >
																																																																																																																																																												              <Text>다음달</Text>
																																																																																																																																																															            </TouchableOpacity>
																																																																																																																																																																		        </CalMenu>
																																																																																																																																																																				        <Yoil>
																																																																																																																																																																						          <Text>일</Text>
																																																																																																																																																																								            <Text>월</Text>
																																																																																																																																																																											          <Text>화</Text>
																																																																																																																																																																													            <Text>수</Text>
																																																																																																																																																																																          <Text>목</Text>
																																																																																																																																																																																		            <Text>금</Text>
																																																																																																																																																																																					          <Text>토</Text>
																																																																																																																																																																																							          </Yoil>
																																																																																																																																																																																									          <Days>
																																																																																																																																																																																											            <View>{calendarArr()}</View>
																																																																																																																																																																																														        </Days>
																																																																																																																																																																																																      </CalContainer>
																																																																																																																																																																																																	      </View>
																																																																																																																																																																																																		    );
																																																																																																																																																																																																			}

																																																																																																																																																																																																			const CalContainer = styled.View``;

																																																																																																																																																																																																			const CalMenu = styled.View`
																																																																																																																																																																																																			  flex: auto;
																																																																																																																																																																																																			    flex-direction: row;
																																																																																																																																																																																																				  text-align: center;
																																																																																																																																																																																																				    justify-content: space-around;
																																																																																																																																																																																																					  width: 100%;
																																																																																																																																																																																																					    top: 5%;
																																																																																																																																																																																																						  background-color: slateblue;
																																																																																																																																																																																																						    border-radius: 10px;
																																																																																																																																																																																																							`;

																																																																																																																																																																																																							const Yoil = styled.View`
																																																																																																																																																																																																							  flex: auto;
																																																																																																																																																																																																							    text-align: center;
																																																																																																																																																																																																								  flex-direction: row;
																																																																																																																																																																																																								    justify-content: space-around;
																																																																																																																																																																																																									  width: 100%;
																																																																																																																																																																																																									    background-color: slateblue;
																																																																																																																																																																																																										  border-radius: 10px;
																																																																																																																																																																																																										  `;

																																																																																																																																																																																																										  const Days = styled.View`
																																																																																																																																																																																																										    flex: auto;
																																																																																																																																																																																																											  flex-direction: row;
																																																																																																																																																																																																											    justify-content: space-around;
																																																																																																																																																																																																												  /* top: 10%; */
																																																																																																																																																																																																												    width: 100%;
																																																																																																																																																																																																													  height: 70%;
																																																																																																																																																																																																													    border-radius: 10px;
																																																																																																																																																																																																														  background-color: skyblue;
																																																																																																																																																																																																														  `;

																																																																																																																																																																																																														  const Cal = styled.View`
																																																																																																																																																																																																														    flex: auto;
																																																																																																																																																																																																															  flex-direction: row;
																																																																																																																																																																																																															    justify-content: space-around;
																																																																																																																																																																																																																  width: 100%;
																																																																																																																																																																																																																    height: 30%;
																																																																																																																																																																																																																	  /* right: 140%; */
																																																																																																																																																																																																																	    /* padding: 15%; */
																																																																																																																																																																																																																		  align-items: center;
																																																																																																																																																																																																																		  `;


import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, DynamicColorIOS, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';

function ListOfMyPositiveBeans({ navigation, route }) {
  const stateStore = useSelector(state => state.user);
    const { user, accessToken } = stateStore;
	  const [list, setList] = useState([]);

	    // Todo: 카드 누르면 상세보기 페이지로 이동
		  const showDetail = () => {
		      console.log('DETAIL!!');
			    };

				  const goBack = () => {
				      console.log('BACK!!!');
					      navigation.goBack();
						    };

							  return (
							      <View style={styles.container}>
								        <ImageBackgrounds source={require('../../img/background.jpeg')} resizemode="cover">
										        <TouchableOpacity
												          activeOpacity={0.8}
														            style={{ position: 'absolute', marginTop: 15, marginLeft: 10, width: 35, height: 35 }}
																	          onPress={goBack}
																			          >
																					            <Text>
																								            <Feather name="arrow-left-circle" size={35} color="black" />
																											          </Text>
																													          </TouchableOpacity>
																															          <Header style={{ borderBottomWidth: 3, borderBottomColor: '#a9caf5', borderRadius: 20 }}>
																																	            <View style={{ width: 200, marginTop: 25 }}>
																																				            {route.params.data[0].gourdKinds === true ? <Roomname>긍정이방</Roomname> : <Roomname>부정이방</Roomname>}
																																							          </View>
																																									            <View style={{ width: 130, marginTop: 35 }}>
																																												            <Date>{route.params.data[0].createdAt.toString().split('T')[0]}</Date>
																																															          </View>
																																																	          </Header>
																																																			          <ScrollView>
																																																					            {route.params.data.map((bean, idx) => {
																																																								            return (
																																																											              <Card onPress={showDetail}>
																																																														                  <Beans source={require('../../img/blueBean.png')} />
																																																																		                  <View style={{ width: 100, marginHorizontal: 20 }}>
																																																																						                    <Emotion>{bean.emotions}</Emotion>
																																																																											                  <Level>LEVEL : {bean.emotion_level}</Level>
																																																																															                  </View>
																																																																																			                  <View style={{ justifyContent: 'center', paddingLeft: 90, paddingTop: 20 }}>
																																																																																							                    <Time>{bean.createdAt.toString().split('T')[1].split('.')[0]}</Time>
																																																																																												                </View>
																																																																																																              </Card>
																																																																																																			              );
																																																																																																						            })}
																																																																																																									        </ScrollView>
																																																																																																											      </ImageBackgrounds>
																																																																																																												      </View>
																																																																																																													    );
																																																																																																														}

																																																																																																														const styles = StyleSheet.create({
																																																																																																														  container: {
																																																																																																														      flex: 1,
																																																																																																															      flexDirection: 'row',
																																																																																																																      justifyContent: 'center',
																																																																																																																	      alignItems: 'center',
																																																																																																																		      backgroundColor: '#DBF4F4',
																																																																																																																			      marginTop: 20,
																																																																																																																				    },
																																																																																																																					});

																																																																																																																					const Emotion = styled.Text`
																																																																																																																					  color: #033f8c;
																																																																																																																					    font-weight: bold;
																																																																																																																						  font-size: 15px;
																																																																																																																						  `;

																																																																																																																						  const Level = styled.Text`
																																																																																																																						    color: black;
																																																																																																																							  font-size: 13px;
																																																																																																																							  `;

																																																																																																																							  const Time = styled.Text`
																																																																																																																							    color: black;
																																																																																																																								  font-size: 13px;
																																																																																																																								  `;

																																																																																																																								  const Card = styled.TouchableOpacity`
																																																																																																																								    flex-direction: row;
																																																																																																																									  /* border: 1px solid black; */
																																																																																																																									    background-color: white;
																																																																																																																										  margin: 10px 25px 10px 25px;
																																																																																																																										    border-radius: 13px;
																																																																																																																											  padding: 5px;
																																																																																																																											  `;

																																																																																																																											  const Roomname = styled.Text`
																																																																																																																											    font-size: 30px;
																																																																																																																												  font-weight: bold;
																																																																																																																												  `;

																																																																																																																												  const Date = styled.Text`
																																																																																																																												    margin-left: 15px;
																																																																																																																													  font-size: 20px;
																																																																																																																													    font-weight: bold;
																																																																																																																														`;

																																																																																																																														const Header = styled.View`
																																																																																																																														  flex-direction: row;
																																																																																																																														    justify-content: space-around;
																																																																																																																															  margin-top: 30px;
																																																																																																																															    margin-bottom: 5px;
																																																																																																																																  height: 90px;
																																																																																																																																    /* border: 1px solid black; */
																																																																																																																																	`;

																																																																																																																																	const Beans = styled.ImageBackground`
																																																																																																																																	  /* flex: 1; */
																																																																																																																																	    height: 30px;
																																																																																																																																		  width: 30px;
																																																																																																																																		    top: 5px;
																																																																																																																																			  margin-left: 5px;
																																																																																																																																			    opacity: 0.9;
																																																																																																																																				`;

																																																																																																																																				const ImageBackgrounds = styled.ImageBackground`
																																																																																																																																				  flex: 1;
																																																																																																																																				    height: 100%;
																																																																																																																																					  width: 100%;
																																																																																																																																					    opacity: 1;
																																																																																																																																						`;

																																																																																																																																						export default ListOfMyPositiveBeans;


import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
// import { signOutUser, signinUser, registUser, actionUser } from '../../modules/user';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

function BeansContent({ navigation, route }) {
  // axios.get('http://localhost:80/beans', {
    //   data: {
	  //     beans: data.beansInfo,
	    //   },
		  //   withCredentials: true,
		    // });
			  // console.log(route.params.data);

			    const [datas, setDatas] = useState({});

				  const getData = async () => {
				      const token = await AsyncStorage.getItem('AccessToken');
					      const data = await axios.get(`http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/beans/${route.params.data}`, {
						        headers: {
								        ContentType: 'application/json',
										        authorization: `Bearer ${token}`,
												      },
													        withCredentials: true,
															    });
																    setDatas(data.data.data);
																	    // console.log('------data: ', data.data.data);
																		  };

																		    useEffect(() => {
																			    getData();
																				  }, []);

																				    // console.log(datas);
																					  const goBack = () => {
																					      // console.log('BACK!!!');
																						      navigation.goBack();
																							    };

																								  // Todo : UI + 게시글 수정 기능 구현 + 뒤로가기 버튼
																								    console.log(datas);
																									  return (
																									      <Container>
																										        <ImageBackgrounds source={require('../../img/background.jpeg')} resizemode="cover">
																												        <TouchableOpacity
																														          activeOpacity={0.8}
																																            style={{ position: 'absolute', marginTop: 30, marginLeft: 10, width: 35, height: 35 }}
																																			          onPress={goBack}
																																					          >
																																							            <Text>
																																										            <Feather name="arrow-left-circle" size={35} color="black" />
																																													          </Text>
																																															          </TouchableOpacity>

																																																	          {datas !== {} ? (
																																																			            <View>
																																																						            <View style={{ alignItems: 'center', marginVertical: 40 }}>
																																																									              {datas.gourdKinds === true ? (
																																																												                  <Beans source={require('../../img/blueBean.png')} />
																																																																                ) : (
																																																																				                <Beans source={require('../../img/redBean.png')} />
																																																																								              )}
																																																																											              </View>
																																																																														              <Header>
																																																																																	                <Text>{datas.emotions}</Text>
																																																																																					              <Text>{datas.emotion_level}</Text>
																																																																																								                {datas.hasOwnProperty('createdAt') ? (
																																																																																												                <View>
																																																																																																                  <Text>{datas.createdAt.slice(11, 16)}</Text>
																																																																																																				                    <Text>{datas.createdAt.slice(0, 10)}</Text>
																																																																																																									                </View>
																																																																																																													              ) : null}
																																																																																																																              </Header>
																																																																																																																			              <Content>
																																																																																																																						                <Text>{datas.contents}</Text>
																																																																																																																										            </Content>
																																																																																																																													          </View>
																																																																																																																															          ) : null}
																																																																																																																																	        </ImageBackgrounds>
																																																																																																																																			    </Container>
																																																																																																																																				  );
																																																																																																																																				  }

																																																																																																																																				  const Container = styled.View`
																																																																																																																																				    flex: 1;
																																																																																																																																					  justifycontent: center;
																																																																																																																																					    alignitems: center;
																																																																																																																																						`;

																																																																																																																																						const ImageBackgrounds = styled.ImageBackground`
																																																																																																																																						  height: 100%;
																																																																																																																																						    width: 100%;
																																																																																																																																							  opacity: 1;
																																																																																																																																							  `;

																																																																																																																																							  const Beans = styled.ImageBackground`
																																																																																																																																							    /* flex: 1; */
																																																																																																																																								  height: 40px;
																																																																																																																																								    width: 40px;
																																																																																																																																									  top: 40px;
																																																																																																																																									    margin-left: 10px;
																																																																																																																																										`;

																																																																																																																																										const Header = styled.View`
																																																																																																																																										  margin-top: 40px;
																																																																																																																																										    /* align-items: center; */
																																																																																																																																											`;

																																																																																																																																											const Content = styled.View``;

																																																																																																																																											export default BeansContent;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextInput, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Plotly from 'react-native-plotly';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getChartData } from '../../modules/chart';
import { reloadAsync } from 'expo-updates';
import Nodata from './Nodata';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function ChartContainer() {
  const dispatch = useDispatch();
    const emotions = useSelector(state => state.chart.chart.data);

	  // 페이지가 랜더링 될 때 마다 감정을 조회함
	    // const token = getToken();
		  // useEffect(() => {
		    //   try {
			  //     // console.log(token, 'flowflowflowflow1');
			    //     dispatch(getChartData(token))
				  //   } catch(err) {
				    //     throw new Error(err)
					  //   }
					    // }, [])

						  const getToken = async () => {
						      const token = await AsyncStorage.getItem('AccessToken');
							      dispatch(getChartData(token))
								    }

									  useEffect(() => {
									      getToken()
										    }, [])

											  // const getToken = async () => {
											    //   const token = await AsyncStorage.getItem('AccessToken');

												  //   return token;
												    // }
													  useEffect(() => {
													      getToken();
														    }, []);

															  const getToken = async () => {
															      const token = await AsyncStorage.getItem('AccessToken');
																      dispatch(getChartData(token));
																	    };

																		  // 조회 된 감정을 가공함. 배열 안의 객체에 밸류값을 추출해 평탄화
																		    const avr = emotions ? emotions.map(el => Object.values(el)).flat() : null;
																			  console.log(avr, ' - - - - - - - - - - - -- - ')

																			    // chart data
																				  const data = [
																				      {
																					      type: 'scatterpolar', // chart type
																						      r: avr ? avr : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
																							      theta: ['기쁨','행복','만족', '뿌듯', '설렘', '슬픔', '우울', '걱정', '분노', '실망', '기쁨'], // data category
																								      fill: 'toself', // fill option
																									      name: 'ToTal', // data group name
																										      opacity: .5,
																											        type: 'scatterpolar', // chart type
																													      r: avr, // data
																														        theta: ['기쁨', '행복', '만족', '뿌듯', '설렘', '슬픔', '우울', '걱정', '분노', '실망', '기쁨'], // data category
																																      fill: 'toself', // fill option
																																	        name: 'ToTal', // data group name
																																			      opacity: 0.5,
																																				      },
																																					      // {
																																						      //   type: 'scatterpolar', // chart type
																																							      //   r: [15, 6, 12, 15, 20, 3, 10, 9, 13, 10, 15], // data
																																								      //   theta: ['행복','슬픔','걱정', '화남', '우울', '설렘', '만족', '편안', '뿌듯', '신남', '행복'], // data category
																																									      //   fill: 'toself', // fill option
																																										      //   name: 'Week' // data group name
																																											      // }
																																												    ];

																																													  // chart layout
																																													    const layout = {
																																														    // margin: {
																																															    //   l: 0,
																																																    //   r: 0,
																																																	    //   t: 0,
																																																		    //   d: 0,
																																																			    // },
																																																				    polar: {
																																																					      radialaxis: {
																																																						          visible: true,
																																																								          range: [0, 50],
																																																										          color: 'red',
																																																												          ticklen: 0,
																																																														          // showticklabels: false,
																																																																        },
																																																																		      angularaxis: {
																																																																			          rotation: 18,
																																																																					          color: 'black',
																																																																							        },
																																																																									      gridshape: 'linear',
																																																																										      },
																																																																											      title: '감정의 분포',
																																																																												      // color: 'red',
																																																																													      // showlegend: false,
																																																																														      // displayModeBar: false,
																																																																															      images: [
																																																																																        {
																																																																																		        source: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=e43a2f27ef68a4e782d43c48640e7155',
																																																																																				        xref: "paper",
																																																																																						        yref: "paper",
																																																																																								        x: 2,
																																																																																										        y: -1,
																																																																																												        sizex: 10,
																																																																																														        sizey: 10,
																																																																																																        sizing: "stretch",
																																																																																																		        opacity: 0.4,
																																																																																																				        // layer: "below",
																																																																																																						        xanchor: 'right',
																																																																																																								        yanchor: 'bottom',
																																																																																																										      },
																																																																																																											      ],
																																																																																																												    };
																																																																																																													  const config = {
																																																																																																													      displayModeBar: false,
																																																																																																														      // toImageButtonOptions: {
																																																																																																															      //   format: 'png', // one of png, svg, jpeg, webp
																																																																																																																      //   filename: 'girl',
																																																																																																																	      //   height: 50,
																																																																																																																		      //   width: 700,
																																																																																																																			      //   scale: 12 // Multiply title/legend/axis/canvas sizes by this factor
																																																																																																																				      // }
																																																																																																																					    };

																																																																																																																						  return (
																																																																																																																						      <Container style={{width: screenWidth}}>

																																																																																																																									      {/* {
																																																																																																																										          avr ? (
																																																																																																																												            <Plotly
																																																																																																																															            data={data}
																																																																																																																																		            layout={layout}
																																																																																																																																					            debug
																																																																																																																																								            enableFullPlotly
																																																																																																																																											            style={{
																																																																																																																																														              width: screenWidth,
																																																																																																																																																	                height: screenHeight,
																																																																																																																																																					              flex: 9,
																																																																																																																																																								                displayModeBar: false
																																																																																																																																																												            }}
																																																																																																																																																															            config={config}
																																																																																																																																																																		          />
																																																																																																																																																																				          ) : <Text style={{fontSize: 30}}>No Data</Text>
																																																																																																																																																																						        } */}
																																																																																																																																																																								      {/* {
																																																																																																																																																																									          data.r
																																																																																																																																																																											          ? (
																																																																																																																																																																													            <Plotly
																																																																																																																																																																																            data={data}
																																																																																																																																																																																			            layout={layout}
																																																																																																																																																																																						            debug
																																																																																																																																																																																									            enableFullPlotly
																																																																																																																																																																																												            style={{
																																																																																																																																																																																															              width: screenWidth,
																																																																																																																																																																																																		                height: screenHeight,
																																																																																																																																																																																																						              flex: 9,
																																																																																																																																																																																																									                displayModeBar: false
																																																																																																																																																																																																													            }}
																																																																																																																																																																																																																            config={config}
																																																																																																																																																																																																																			          />
																																																																																																																																																																																																																					          )
																																																																																																																																																																																																																							          : <Text>No Data</Text>
																																																																																																																																																																																																																									        } */}
																																																																																																																																																																																																																											        <Plotly
																																																																																																																																																																																																																													            data={data}
																																																																																																																																																																																																																																            layout={layout}
																																																																																																																																																																																																																																			            debug
																																																																																																																																																																																																																																						            enableFullPlotly
																																																																																																																																																																																																																																									            style={{
																																																																																																																																																																																																																																												              width: screenWidth,
																																																																																																																																																																																																																																															                height: screenHeight,
																																																																																																																																																																																																																																																			              flex: 9,
																																																																																																																																																																																																																																																						                displayModeBar: false,
																																																																																																																																																																																																																																																										              position: 'absolute',
																																																																																																																																																																																																																																																													                left: 0,
																																																																																																																																																																																																																																																																	              bottom: 0,
																																																																																																																																																																																																																																																																				              }}
																																																																																																																																																																																																																																																																							              config={config}
																																																																																																																																																																																																																																																																										            />
																																																																																																																																																																																																																																																																													    <Container style={{ width: screenWidth }}>
																																																																																																																																																																																																																																																																														      {avr ? (
																																																																																																																																																																																																																																																																															          <Plotly
																																																																																																																																																																																																																																																																																	            data={data}
																																																																																																																																																																																																																																																																																				          layout={layout}
																																																																																																																																																																																																																																																																																						            debug
																																																																																																																																																																																																																																																																																									          enableFullPlotly
																																																																																																																																																																																																																																																																																											            style={{
																																																																																																																																																																																																																																																																																														            width: screenWidth,
																																																																																																																																																																																																																																																																																																	            height: screenHeight,
																																																																																																																																																																																																																																																																																																				            flex: 9,
																																																																																																																																																																																																																																																																																																							            displayModeBar: false,
																																																																																																																																																																																																																																																																																																										          }}
																																																																																																																																																																																																																																																																																																												            config={config}
																																																																																																																																																																																																																																																																																																															        />
																																																																																																																																																																																																																																																																																																																	      ) : (
																																																																																																																																																																																																																																																																																																																		          <Nodata />
																																																																																																																																																																																																																																																																																																																				        )}
																																																																																																																																																																																																																																																																																																																						    </Container>
																																																																																																																																																																																																																																																																																																																							  );
																																																																																																																																																																																																																																																																																																																							  }

																																																																																																																																																																																																																																																																																																																							  const Container = styled.View`
																																																																																																																																																																																																																																																																																																																							    flex: 1;
																																																																																																																																																																																																																																																																																																																								`;

import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, DynamicColorIOS, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';

function ListOfMyNegativeBeans({ navigation, route }) {
  const stateStore = useSelector(state => state.user);
    const { user, accessToken } = stateStore;
	  const [list, setList] = useState([]);

	    // Todo: 카드 누르면 상세보기 페이지로 이동
		  // const showDetail = beanId => {
		    //   console.log('DETAIL');
			  //   console.log('beanId : ', beanId);

			    // navigation.navigate('BeansContent',{data: route.params.data})
				  // };

				    const goBack = () => {
					    // console.log('BACK!!!');
						    navigation.goBack();
							  };

							    return (
								    <View style={styles.container}>
									      <ImageBackgrounds source={require('../../img/background.jpeg')} resizemode="cover">
										          <TouchableOpacity
												            activeOpacity={0.8}
															          style={{ position: 'absolute', marginTop: 30, marginLeft: 15, width: 35, height: 35 }}
																	            onPress={goBack}
																				          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
																						          >
																								            <Text>
																											            <Feather name="arrow-left" size={35} color="black" />
																														          </Text>
																																          </TouchableOpacity>
																																		          <Header style={{ borderBottomWidth: 3, borderBottomColor: '#a9caf5', borderRadius: 20 }}>
																																				            <View style={{ width: 200, marginTop: 25 }}>
																																							            <Roomname>부정이방</Roomname>
																																										          </View>
																																												            <View style={{ width: 130, marginTop: 35 }}>
																																															            {!route.params.data[0] ? null : <Date>{route.params.data[0].createdAt.toString().split('T')[0]}</Date>}
																																																		          </View>
																																																				          </Header>
																																																						          <ScrollView>
																																																								            {route.params.data.map((bean, idx) => {
																																																											            return (
																																																														              <Card
																																																																	                  key={bean.id}
																																																																					                  onPress={() => {
																																																																									                    // console.log(bean.id);
																																																																														                  navigation.navigate('BeansContent', { data: bean.id });
																																																																																		                  }}
																																																																																						                >
																																																																																										                <Beans source={require('../../img/redBean.png')} />
																																																																																														                <View style={{ paddingLeft: 8, flexDirection: 'row', width: 40, marginHorizontal: 20, paddingTop: 10 }}>
																																																																																																		                  <Emotion>{bean.emotions}</Emotion>
																																																																																																						                  </View>
																																																																																																										                  <View style={{ marginLeft: 10, width: '70%', marginTop: 2 }}>
																																																																																																														                    <Level>LEVEL : {bean.emotion_level}</Level>
																																																																																																																			                  <View style={{ marginTop: 5, width: `88%`, height: 10, backgroundColor: 'lightgrey', borderRadius: 3 }}>
																																																																																																																							                      <View
																																																																																																																												                        style={{
																																																																																																																																		                        marginTop: 5,
																																																																																																																																								                        width: `${bean.emotion_level}0%`,
																																																																																																																																														                        height: 10,
																																																																																																																																																				                        backgroundColor: '#f28d88',
																																																																																																																																																										                        borderRadius: 3,
																																																																																																																																																																                        bottom: 5,
																																																																																																																																																																						                      }}
																																																																																																																																																																											                      ></View>
																																																																																																																																																																																                    </View>
																																																																																																																																																																																					                </View>
																																																																																																																																																																																									                <View style={{ justifyContent: 'center', padding: 5, marginRight: 15, marginBottom: 2 }}>
																																																																																																																																																																																													                  <Time>{bean.createdAt.toString().split('T')[1].split('.')[0].slice(0, 5)}</Time>
																																																																																																																																																																																																	                  </View>
																																																																																																																																																																																																					                </Card>
																																																																																																																																																																																																									            );
																																																																																																																																																																																																												          })}
																																																																																																																																																																																																														          </ScrollView>
																																																																																																																																																																																																																        </ImageBackgrounds>
																																																																																																																																																																																																																		    </View>
																																																																																																																																																																																																																			  );
																																																																																																																																																																																																																			  }

																																																																																																																																																																																																																			  const styles = StyleSheet.create({
																																																																																																																																																																																																																			    container: {
																																																																																																																																																																																																																				    flex: 1,
																																																																																																																																																																																																																					    flexDirection: 'row',
																																																																																																																																																																																																																						    justifyContent: 'center',
																																																																																																																																																																																																																							    alignItems: 'center',
																																																																																																																																																																																																																								    backgroundColor: '#DBF4F4',
																																																																																																																																																																																																																									  },
																																																																																																																																																																																																																									  });

																																																																																																																																																																																																																									  const Emotion = styled.Text`
																																																																																																																																																																																																																									    color: #033f8c;
																																																																																																																																																																																																																										  font-weight: bold;
																																																																																																																																																																																																																										    font-size: 15px;
																																																																																																																																																																																																																											`;

																																																																																																																																																																																																																											const Level = styled.Text`
																																																																																																																																																																																																																											  color: black;
																																																																																																																																																																																																																											    font-size: 13px;
																																																																																																																																																																																																																												`;

																																																																																																																																																																																																																												const Time = styled.Text`
																																																																																																																																																																																																																												  color: black;
																																																																																																																																																																																																																												    font-size: 11px;
																																																																																																																																																																																																																													  padding-top: 15px;
																																																																																																																																																																																																																													  `;

																																																																																																																																																																																																																													  const Card = styled.TouchableOpacity`
																																																																																																																																																																																																																													    flex-direction: row;
																																																																																																																																																																																																																														  /* border: 1px solid black; */
																																																																																																																																																																																																																														    background-color: white;
																																																																																																																																																																																																																															  justify-content: space-around;
																																																																																																																																																																																																																															    margin: 10px 25px 10px 25px;
																																																																																																																																																																																																																																  border-radius: 13px;
																																																																																																																																																																																																																																    padding: 5px;
																																																																																																																																																																																																																																	`;

																																																																																																																																																																																																																																	const Roomname = styled.Text`
																																																																																																																																																																																																																																	  font-size: 30px;
																																																																																																																																																																																																																																	    font-weight: bold;
																																																																																																																																																																																																																																		`;

																																																																																																																																																																																																																																		const Date = styled.Text`
																																																																																																																																																																																																																																		  margin-left: 15px;
																																																																																																																																																																																																																																		    font-size: 19px;
																																																																																																																																																																																																																																			  font-weight: bold;
																																																																																																																																																																																																																																			  `;

																																																																																																																																																																																																																																			  const Header = styled.View`
																																																																																																																																																																																																																																			    flex-direction: row;
																																																																																																																																																																																																																																				  justify-content: space-around;
																																																																																																																																																																																																																																				    margin-top: 50px;
																																																																																																																																																																																																																																					  margin-bottom: 10px;
																																																																																																																																																																																																																																					    height: 90px;
																																																																																																																																																																																																																																						  /* border: 1px solid black; */
																																																																																																																																																																																																																																						  `;

																																																																																																																																																																																																																																						  const Beans = styled.ImageBackground`
																																																																																																																																																																																																																																						    /* flex: 1; */
																																																																																																																																																																																																																																							  height: 30px;
																																																																																																																																																																																																																																							    width: 30px;
																																																																																																																																																																																																																																								  top: 5px;
																																																																																																																																																																																																																																								    margin-left: 10px;

																																																																																																																																																																																																																																									  opacity: 0.9;
																																																																																																																																																																																																																																									  `;

																																																																																																																																																																																																																																									  const ImageBackgrounds = styled.ImageBackground`
																																																																																																																																																																																																																																									    flex: 1;
																																																																																																																																																																																																																																										  height: 100%;
																																																																																																																																																																																																																																										    width: 100%;
																																																																																																																																																																																																																																											  opacity: 1;
																																																																																																																																																																																																																																											  `;

																																																																																																																																																																																																																																											  export default ListOfMyNegativeBeans;


import React, { useState, useCallback, useRef } from 'react';
import {
  StyleSheet,
    Text,
	  View,
	    TextInput,
		  TouchableOpacity,
		    Alert,
			  ActivityIndicator,
			    Dimensions,
				  ImageBackground,
				    Pressable,
					} from 'react-native';
					import { useSelector, useDispatch } from 'react-redux';
					import styled from 'styled-components/native';
					import Btn from '../User/Button';
					import { reqSignIn, googleSignIn } from '../../modules/user';
					import PassModal from './PassModal';
					import axios from 'axios';
					import { Button, Modal, FormControl, Center, NativeBaseProvider, CheckIcon, Select, Menu, Divider, HamburgerIcon } from 'native-base';
					import { WebView } from 'react-native-webview';
					// import Expo from "expo"

					const { width: SCREEN_WIDTH } = Dimensions.get('window');
					const { height: SCREEN_HEIGHT } = Dimensions.get('window');

					export default function SignIn({ navigation }) {
					  const user = useSelector(state => state.user);
					    const dispatch = useDispatch();
						  const [userInfo, setUserInfo] = useState({
						      email: '',
							      password: '',
								    });
									  const [modal, setModal] = useState(false);
									    const [isOpen, setIsOpen] = useState(false);
										  const { email, password } = userInfo;

										    // 이메일 유효성 검사
											  const [emailVal, setEmailVal] = useState(true);
											    const emailValid = () => {
												    const emailChk = /[0-9a-zA-Z.-_]+@[0-9a-zA-Z-]+\.[a-zA-Z0-9.]+/im;
													    if (emailChk.test(email)) {
														      setEmailVal(true);
															      } else {
																        setEmailVal(false);
																		    }
																			  };

																			    const [wrongInfo, setWrongInfo] = useState(true);

																				  // 인풋값 추출
																				    const signInHandler = (e, name) => {
																					    const value = e.nativeEvent.text;
																						    setUserInfo({
																							      ...userInfo,
																								        [name]: value,
																										    });
																											    // console.log(userInfo)
																												  };

																												    // 유효성 검사 후 오류 메시지 초기화
																													  const del = () => {
																													      // setMail(emailVal.test(email))
																														      setWrongInfo(true);
																															    };

																																  // 로그인 버튼 클릭과 동시에 유효성 검사 & 로그인 요청
																																    const onSubmit = async () => {
																																	    if ((email === '' && password === '') | ((email === '') | (password === ''))) {
																																		      setWrongInfo(false);
																																			        return;
																																					    }
																																						    try {
																																							      const { data } = await axios.post(`http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/users/signin`, userInfo, {
																																								          headers: { 'Content-Type': 'application/json' },
																																										          withCredentials: true,
																																												        });
																																														      if (data) {
																																															          dispatch(reqSignIn(userInfo));
																																																	          navigation.navigate('TutorialHome');
																																																			        }
																																																					    } catch (err) {
																																																						      console.log(err.name, 'errrrrrr');
																																																							        if (err.name) {
																																																									        Alert.alert('이메일 혹은 비밀번호를 확인해 주세요.');
																																																											      }
																																																												      }

																																																													      // console.log(user.signIn, '-b-v--ae-asd---asd-asd--')
																																																														      // if(user.signIn.error) {
																																																															      //   Alert.alert('이메일과 비밀번호를 확인해 주세요')
																																																																      //   return
																																																																	      // }

																																																																		      // setTimeout(() => {
																																																																			      //   navigation.navigate('TutorialHome')
																																																																				      // }, 1000)
																																																																					    };

																																																																						  // 구글 로그인
																																																																						    const googleOauth = () => {
																																																																							    dispatch(googleSignIn());
																																																																								  };

																																																																								    // Modal Handler
																																																																									  const modalHandler = () => {
																																																																									      setModal(modal => !modal);
																																																																										    };

																																																																											  // 카톡로긴
																																																																											    const katalk = () => {
																																																																												    setIsOpen(!isOpen);
																																																																													  };

																																																																													    return (
																																																																														    <Container style={{ width: SCREEN_WIDTH }} source={require('../../img/background.jpeg')}>
																																																																															      {user.signIn.loading ? (
																																																																																          <Loading color="black" size="large" />
																																																																																		        ) : (
																																																																																				        <LoginForm>
																																																																																						          <Header>LOGIN</Header>
																																																																																								            <SubHead>TO CONTINUE</SubHead>
																																																																																											          <Input
																																																																																													              placeholder="EMAIL"
																																																																																																              value={email}
																																																																																																			              name="email"
																																																																																																						              // keyboardType=''
																																																																																																									              onChange={e => signInHandler(e, 'email')}
																																																																																																												              onFocus={del}
																																																																																																															              onBlur={emailValid}
																																																																																																																		            />
																																																																																																																					          {!emailVal ? <Text style={{ color: 'red', marginTop: 10 }}>이메일 형식이 유효하지 않습니다.</Text> : null}
																																																																																																																							            <Input
																																																																																																																										            placeholder="PASSWORD"
																																																																																																																													            secureTextEntry
																																																																																																																																            name="password"
																																																																																																																																			            onChange={e => signInHandler(e, 'password')}
																																																																																																																																						            value={password}
																																																																																																																																									            onFocus={del}
																																																																																																																																												          />
																																																																																																																																														            <MiddleContainer>
																																																																																																																																																	            <TouchableOpacity>
																																																																																																																																																				              <MiddleText onPress={() => navigation.navigate('SignUp')}>계정이 없으신가요?</MiddleText>
																																																																																																																																																							              </TouchableOpacity>
																																																																																																																																																										              <TouchableOpacity onPress={modalHandler}>
																																																																																																																																																													                <MiddleText>비밀번호를 잊으셨나요??</MiddleText>
																																																																																																																																																																	            </TouchableOpacity>

																																																																																																																																																																				            <TouchableOpacity onPress={katalk}>
																																																																																																																																																																							              <MiddleText>test</MiddleText>
																																																																																																																																																																										              </TouchableOpacity>
																																																																																																																																																																													              <NativeBaseProvider>
																																																																																																																																																																																                <Modal style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} isOpen={isOpen}>
																																																																																																																																																																																				                <WebView
																																																																																																																																																																																								                  style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
																																																																																																																																																																																												                    originWhitelist={['*']}
																																																																																																																																																																																																	                  scalesPageToFit={false}
																																																																																																																																																																																																					                    source={{
																																																																																																																																																																																																										                    uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=b27c48602757f7d466a976b2450b895e&redirect_uri=http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/oauth/signin`,
																																																																																																																																																																																																															                  }}
																																																																																																																																																																																																																			                  />
																																																																																																																																																																																																																							                </Modal>
																																																																																																																																																																																																																											            </NativeBaseProvider>
																																																																																																																																																																																																																														          </MiddleContainer>
																																																																																																																																																																																																																																            <TouchableOpacity>
																																																																																																																																																																																																																																			            <MiddleText onPress={googleOauth}>GOOGLE로 로그인 하기</MiddleText>
																																																																																																																																																																																																																																						          </TouchableOpacity>
																																																																																																																																																																																																																																								            {!wrongInfo ? <Warn>이메일 혹은 비밀번호를 정확히 입력했는지 확인해 주세요</Warn> : null}
																																																																																																																																																																																																																																											          <Btn name="Log In" onPress={onSubmit} />
																																																																																																																																																																																																																																													            <ImageBackground source={require('../../img/girl.png')} />
																																																																																																																																																																																																																																																          {modal ? <PassModal modlal={modal} setModal={setModal} /> : null}
																																																																																																																																																																																																																																																		          </LoginForm>
																																																																																																																																																																																																																																																				        )}
																																																																																																																																																																																																																																																						    </Container>
																																																																																																																																																																																																																																																							  );
																																																																																																																																																																																																																																																							  }

																																																																																																																																																																																																																																																							  const Container = styled.ImageBackground`
																																																																																																																																																																																																																																																							    /* justify-content: center; */
																																																																																																																																																																																																																																																								  align-items: center;
																																																																																																																																																																																																																																																								    height: 100%;
																																																																																																																																																																																																																																																									  /* width: 100%; */
																																																																																																																																																																																																																																																									    /* flex: 1; */
																																																																																																																																																																																																																																																										  background-color: #ddd;
																																																																																																																																																																																																																																																										  `;
																																																																																																																																																																																																																																																										  const Header = styled.Text`
																																																																																																																																																																																																																																																										    font-size: 50px;
																																																																																																																																																																																																																																																											  font-weight: bold;
																																																																																																																																																																																																																																																											    margin: auto;
																																																																																																																																																																																																																																																												  margin-top: 100px;
																																																																																																																																																																																																																																																												  `;
																																																																																																																																																																																																																																																												  const SubHead = styled.Text`
																																																																																																																																																																																																																																																												    text-align: center;
																																																																																																																																																																																																																																																													  margin-bottom: 150px;
																																																																																																																																																																																																																																																													  `;
																																																																																																																																																																																																																																																													  const Input = styled.TextInput`
																																																																																																																																																																																																																																																													    background-color: transparent;
																																																																																																																																																																																																																																																														  padding-top: 5px;
																																																																																																																																																																																																																																																														    padding-bottom: 5px;
																																																																																																																																																																																																																																																															  border-radius: 8px;
																																																																																																																																																																																																																																																															    font-size: 18px;
																																																																																																																																																																																																																																																																  padding-left: 10px;
																																																																																																																																																																																																																																																																    margin-top: 10px;
																																																																																																																																																																																																																																																																	  margin-bottom: 5px;
																																																																																																																																																																																																																																																																	    border-bottom-width: 2px;
																																																																																																																																																																																																																																																																		  border-bottom-left-radius: 0;
																																																																																																																																																																																																																																																																		    border-bottom-right-radius: 0;
																																																																																																																																																																																																																																																																			`;
																																																																																																																																																																																																																																																																			const LoginForm = styled.View`
																																																																																																																																																																																																																																																																			  width: 70%;
																																																																																																																																																																																																																																																																			    /* background-color: #eee; */
																																																																																																																																																																																																																																																																				`;
																																																																																																																																																																																																																																																																				const MiddleContainer = styled.View`
																																																																																																																																																																																																																																																																				  flex-direction: row;
																																																																																																																																																																																																																																																																				    justify-content: space-between;
																																																																																																																																																																																																																																																																					  margin-top: 5px;
																																																																																																																																																																																																																																																																					  `;
																																																																																																																																																																																																																																																																					  const MiddleText = styled.Text`
																																																																																																																																																																																																																																																																					    margin-top: 10px;
																																																																																																																																																																																																																																																																						  font-size: 12px;
																																																																																																																																																																																																																																																																						    color: black;
																																																																																																																																																																																																																																																																							`;
																																																																																																																																																																																																																																																																							const Warn = styled.Text`
																																																																																																																																																																																																																																																																							  color: red;
																																																																																																																																																																																																																																																																							    font-weight: bold;
																																																																																																																																																																																																																																																																								  margin-top: 10px;
																																																																																																																																																																																																																																																																								  `;
																																																																																																																																																																																																																																																																								  const Loading = styled.ActivityIndicator`
																																																																																																																																																																																																																																																																								    margin-top: 200px;
																																																																																																																																																																																																																																																																									`;
																																																																																																																																																																																																																																																																									// const Web = styled.WebView`
																																																																																																																																																																																																																																																																									//   color: black;
																																																																																																																																																																																																																																																																									// `

																																																																																																																																																																																																																																																																									/* const Btn = styled.Button`
																																																																																																																																																																																																																																																																									  margin-top: 5px;
																																																																																																																																																																																																																																																																									  ` */

