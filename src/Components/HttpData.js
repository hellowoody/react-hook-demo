import React, { useState, useEffect,useCallback,Fragment } from 'react';
import axios from 'axios';
//首次
// export default function() {
//   const [data, setData] = useState({ hits: [] });
// // 循环请求 
// //   useEffect(() => {
// //     const fetchData = async () => {
// //         const result = await axios(
// //             'https://hn.algolia.com/api/v1/search?query=redux',
// //         );

// //         setData(result.data);
// //     };
// //     fetchData();
// //   });
// //只请求一次
//   useEffect(() => {
//     const fetchData = async () => {
//         const result = await axios(
//             'https://hn.algolia.com/api/v1/search?query=redux',
//         );

//         setData(result.data);
//     };
//     fetchData();
//   },[]);
 
//   return (
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
//加了input 搜索内容后 不再请求
// export default function(){
//     const [data,setData] = useState({hits:[]})
//     const [query,setQuery] = useState('redux')
//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 `https://hn.algolia.com/api/v1/search?query=${query}`,
//             );
    
//             setData(result.data);
//         };
//         fetchData();
//     },[])
//   return (
//     <Fragment>
//         <input
//             type="text"
//             value={query}
//             onChange={event => setQuery(event.target.value)}
//         />
//         <ul>
//             {data.hits.map(item => (
//             <li key={item.objectID}>
//                 <a href={item.url}>{item.title}</a>
//             </li>
//             ))}
//         </ul>
//     </Fragment>
//   );
// }

// export default function(){
//     const [data,setData] = useState({hits:[]})
//     const [query,setQuery] = useState('redux')
//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 `https://hn.algolia.com/api/v1/search?query=${query}`,
//             );
    
//             setData(result.data);
//         };
//         fetchData();
//     },[query])
    
//   return (
//     <Fragment>
//         <input
//             type="text"
//             value={query}
//             onChange={event => setQuery(event.target.value)}
//         />
//         <ul>
//             {data.hits.map(item => (
//             <li key={item.objectID}>
//                 <a href={item.url}>{item.title}</a>
//             </li>
//             ))}
//         </ul>
//     </Fragment>
//   );
// }
//React Hook useEffect has a missing dependency: 'fetchData'
export default function(){
    const [data,setData] = useState({hits:[]})
    const [query,setQuery] = useState('redux')
    const fetchData = useCallback(async () => {
        const result = await axios(
            `https://hn.algolia.com/api/v1/search?query=${query}`,
        );

        setData(result.data);
    },[query]);
    useEffect(() => {
        fetchData();
    },[fetchData])

  return (
    <Fragment>
        <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
        />
        <ul>
            {data.hits.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
        </ul>
    </Fragment>
  );
}

//最终版
// export default function () {
//   const [data, setData] = useState({ hits: [] });
//   const [query, setQuery] = useState('redux');
//   const [url, setUrl] = useState(
//     'https://hn.algolia.com/api/v1/search?query=redux',
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const fetchData = useCallback(async () => {
//     setIsError(false);
//     setIsLoading(true);
//     try {
//       const result = await axios(url);

//       setData(result.data);
//     } catch (error) {
//       setIsError(true);
//     }
//     setIsLoading(false);
//   },[url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
 
//   return (
//     <Fragment>
//       <input
//         type="text"
//         value={query}
//         onChange={event => setQuery(event.target.value)}
//       />
//       <button
//         type="button"
//         onClick={() =>
//           setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
//         }
//       >
//         Search
//       </button>
//       {isError && <div>Something went wrong ...</div>}
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <ul>
//           {data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Fragment>
//   );
// }