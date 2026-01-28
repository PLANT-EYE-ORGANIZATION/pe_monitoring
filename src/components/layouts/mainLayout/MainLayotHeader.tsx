import { CardNav } from "@/components/ui";

export const MainLayoutHeader = () => {
  return (
    <div className="relative py-12">
      <CardNav
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
      />
    </div>
  );
};
