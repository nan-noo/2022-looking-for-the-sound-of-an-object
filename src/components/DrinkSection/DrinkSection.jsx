import { DISPENSER_TIME_INTERVAL } from "constants";

import { useDispenser } from "hooks/useDispenser";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

import ActionListItem from "components/DrinkSection/ActionListItem/ActionListItem";
import DrinkButtonSection from "components/DrinkSection/DrinkButtonSection/DrinkButtonSection";
import * as S from "components/DrinkSection/DrinkSection.style";

function DrinkSection({
  inputMoney,
  paymentMethod,
  cardTerminalStatus,
  addInputMoney,
  subtractInputMoney,
}) {
  const {
    dispenserAction,
    dispenserStatus,
    resetDispenserAction,
    addDispenserAction,
  } = useDispenser(DISPENSER_TIME_INTERVAL);

  return (
    <div>
      <DrinkButtonSection
        inputMoney={inputMoney}
        paymentMethod={paymentMethod}
        cardTerminalStatus={cardTerminalStatus}
        dispenserStatus={dispenserStatus}
        addInputMoney={addInputMoney}
        subtractInputMoney={subtractInputMoney}
        addDispenserAction={addDispenserAction}
        resetDispenserAction={resetDispenserAction}
      />
      <S.SectionConatainer>
        <SectionHeader>디스펜서</SectionHeader>
        <S.ActionList>
          {dispenserAction.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
        </S.ActionList>
      </S.SectionConatainer>
    </div>
  );
}

export default DrinkSection;
