import StoreProvider from "./StoreProvider";
// components
import Counter from "@/components/Counter";
export default function Home() {
  return (
    <main>
      <StoreProvider>
        <Counter />
      </StoreProvider>
    </main>
  );
}
