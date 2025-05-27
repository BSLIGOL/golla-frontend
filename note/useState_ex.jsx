import { useState } from 'react';

function Counter() {
    // useState의 첫 번째 인자로 초기 상태를 설정
    // 두 번째 인자로 상태를 업데이트하는 함수를 반환
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={increment}>증가</button>
        </div>
    );
}