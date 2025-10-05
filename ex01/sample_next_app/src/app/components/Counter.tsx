"use client"; // 꼭 넣어야 함!!

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ marginTop: "20px" }}>
            <p>현재 카운트: {count}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg m-2" onClick={() => setCount(count + 1)}>+</button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg m-2" onClick={() => setCount(count - 1)}>-</button>
            <button className="bg-green-700 hover:bg-green-950 text-white px-4 py-2 rounded-lg m-2" onClick={()=> setCount(0)}>reset</button>
        </div>
    );
}