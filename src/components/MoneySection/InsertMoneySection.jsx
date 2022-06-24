import { useRef } from "react";

import { COIN_UNIT, INSERT_MONEY_RANGE } from "constants";

import OutlinedButton from "components/common/OutlinedButton/OutlinedButton";

const validateInsertMoney = (insert) => {
  if (!insert) {
    throw new Error("금액을 입력해주세요.");
  }
  if (insert < INSERT_MONEY_RANGE.MIN || insert > INSERT_MONEY_RANGE.MAX) {
    throw new Error(
      `${INSERT_MONEY_RANGE.MIN}원 이상, ${INSERT_MONEY_RANGE.MAX}원 이하의 금액만 입력할 수 있습니다.`
    );
  }
  if (insert % COIN_UNIT[10] !== 0) {
    throw new Error(`${COIN_UNIT[10]}원 단위만 입력이 가능합니다.`);
  }
};

function InsertMoneySection({ inputMoney, addInputMoney }) {
  const insertMoneyRef = useRef(null);

  const insertMoney = () => {
    const insertMoney = insertMoneyRef.current.valueAsNumber;
    try {
      validateInsertMoney(insertMoney);
    } catch (error) {
      alert(error.message);
      return;
    }
    if (inputMoney + insertMoney > INSERT_MONEY_RANGE.MAX) {
      alert(
        `더이상 금액을 넣을 수 없습니다(최대 ${INSERT_MONEY_RANGE.MAX.toLocaleString()}원).`
      );
      return;
    }
    addInputMoney(insertMoney);
  };

  return (
    <section>
      <h2>금액 투입구</h2>
      <label htmlFor="insert">금액을 투입해 주세요.</label>
      <br />
      <input
        id="insert"
        type="number"
        max={INSERT_MONEY_RANGE.MAX}
        min={INSERT_MONEY_RANGE.MIN}
        step={COIN_UNIT[10]}
        placeholder="1,000"
        ref={insertMoneyRef}
      />
      원
      <OutlinedButton type="button" onClick={insertMoney}>
        투입하기
      </OutlinedButton>
      <p>
        투입한 금액: <span>{inputMoney.toLocaleString()}</span>원
      </p>
    </section>
  );
}

export default InsertMoneySection;
