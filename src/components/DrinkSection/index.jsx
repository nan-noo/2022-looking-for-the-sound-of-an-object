import { DISPENSER_TIME_INTERVAL } from "constants";

import { useDispenser } from "hooks/useDispenser";

import DrinkButtonSection from "components/DrinkSection/DrinkButtonSection";

function DrinkSection({ inputMoney, setInputMoney }) {
  const { dispenserAction, resetDispenserAction, addDispenserAction } =
    useDispenser(DISPENSER_TIME_INTERVAL);

  return (
    <>
      <DrinkButtonSection
        addDispenserAction={addDispenserAction}
        resetDispenserAction={resetDispenserAction}
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <section>
        <h2>디스펜서</h2>
        {dispenserAction.map((action, index) => (
          <p key={index}>{action}</p>
        ))}
      </section>
    </>
  );
}

export default DrinkSection;
