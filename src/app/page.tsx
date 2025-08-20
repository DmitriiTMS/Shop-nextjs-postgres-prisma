import { Actions } from "@/components/Actions/Actions";
import { Maps } from "@/components/Maps/Maps";
import { NewProducts } from "@/components/NewProducts/NewProducts";
import { Purchases } from "@/components/Purchases/Purchases";
import { Slider } from "@/components/Slider/Slider";
import { SpecialOffers } from "@/components/SpecialOffers/SpecialOffers";

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Slider />
      <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
        <Actions />
        <NewProducts />
        <Purchases />
        <SpecialOffers />
        <Maps />
      </div>
    </main>
  );
}
