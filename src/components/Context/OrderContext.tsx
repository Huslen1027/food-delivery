import React, { useContext, createContext, useState } from "react";

interface FoodData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
  count: number;
}

interface OrderContextType {
  orderFoods: FoodData[];
  setOrderFoods: React.Dispatch<React.SetStateAction<FoodData[]>>;
}

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const useOrderItems = () => useContext(OrderContext);

export const OrderContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderFoods, setOrderFoods] = useState<FoodData[]>([]);

  return (
    <OrderContext.Provider value={{ orderFoods, setOrderFoods }}>
      {children}
    </OrderContext.Provider>
  );
};
