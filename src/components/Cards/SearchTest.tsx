// import { Grid } from "@mui/material";
// import { useState } from "react";
// import { useCartItems } from "../Context/CartContext";
// interface data {
//   id: number;
//   category: string;
//   foodName: string;
//   imagePath: string;
//   ingredients: string[];
//   price: number;
//   sale: number;
//   stock: number;
// }
// export const SearchText = ({ data }: { data: data }) => {
//   const [userSearch, setUserSearch] = useState("");
//   const { cartFoods, setCartFoods } = useCartItems();
//   const searchList = cartFoods.filter((data) => data.name.includes(userSearch));
//   const handleOnchange = (e: any) => {
//     e.preventDefailt();
//     setUserSearch(e.target.searchUser.value);
//   };
//   return (
//     <Grid>
//       <form onchange="handleOnchange">
//         <input type="text" name="searchUser" />
//       </form>
//       <ul>
//         {searchList.map((data) => (
//           <li>
//             <p>{data.name}</p>
//           </li>
//         ))}
//       </ul>
//     </Grid>
//   );
// };
// export default SearchText;
