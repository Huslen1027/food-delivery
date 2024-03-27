// import { Grid, Typography } from "@mui/material";
// import { Stack } from "@mui/system";
// import Link from "next/link";
// import CategorySvg from "@/Icon/Homeicon/Adviceicons/Category";
// import { CardDesign } from "./CardDesign";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import foods from "@/utils/HomeCard/Homecard";
// const HomeCategoryCard = ({ category }: { category: string }) => {
//   const categoryFoods = foods.filter((item: any) => item.category == category);

//   return (
//     <Grid maxWidth={"1320px"} margin={"auto"} sx={{ padding: "20px " }}>
//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-between"
//         my={4}
//         position="relative"
//         zIndex={10}
//       >
//         <Stack direction={"row"} alignItems={"center"} spacing={1}>
//           <CategorySvg />
//           <Typography>{category}</Typography>
//         </Stack>
//         <Link href="/foods">
//           <Stack direction="row" alignItems="center">
//             {"Бүгдийг харах"}
//             <ChevronRightIcon />
//           </Stack>
//         </Link>
//       </Stack>
//       <Grid container columnSpacing={3} rowSpacing={6}>
//         {categoryFoods.slice(0, 16).map((item) => (
//           <Grid item xs={3} key={item.title}>
//             <CardDesign food={item} />
//           </Grid>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };

// export default HomeCategoryCard;
