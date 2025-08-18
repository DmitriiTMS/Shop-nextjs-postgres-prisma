import { ButtonSearch } from "../ButtonSearch/ButtonSearch";
import { InputBlock } from "../InputBlock/InputBlock";

export const SearchBlock = () => {
  return (
    <div className="flex flex-row gap-4 flex-grow">
      <ButtonSearch />
      <InputBlock />
    </div>
  );
};
