import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FoodList } from './components/FoodList'; 
function App() {
  const queryClient = new QueryClient() 
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <FoodList></FoodList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
