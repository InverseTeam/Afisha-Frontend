
// export const model = () => {
//   useEffect(() => {
//     const getCookie = (name: string) => {
//       const cookies = parse(document.cookie);
//       return cookies[name] || '';
//     };
//     const Token = getCookie('accentToken');
//     setToken(Token);
//   }, []);
//   useEffect(() => {
//     if (fetchUrl !== '') {
//       setIsFetch(true);
//     }
//     if (isDropDownClick && isFetch) {
//       axios
//         .get<inputDropDownItems[]>(fetchUrl, {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         })
//         .then((response) => {
//           setInputDropDownItems(response.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching cities:', error);
//         });
//     }
//   }, [fetchUrl, isDropDownClick, isFetch, token]);
//   return <div>model</div>;
// };
