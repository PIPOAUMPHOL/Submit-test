/* ข้อ 2. เขียน code โปรแกรม คำนวนแยกธนาบัตรและเหรียญ โดยมีเหรียญ 1, 2, 5, 10 ธนบัตร 20, 50, 100, 500 และ 1000 ด้วย ภาษาอะไรก็ได้
   ตัวอย่าง : input 5432
                : output ธนบัตร 1000 จำนวน 5 ใบ, ธนบัตร 100 จำนวน 4 ใบ,ธนบัตร 20 จำนวน 1 ใบ, เหรียญ 10 จำนวน 1, เหรียญ 2 จำนวน 1 */

function checkMoney(cash) {
  const banknotes = [1000, 500, 100, 50, 20]; // เก็บแบงค์
  const coins = [10, 5, 2, 1]; // เก็บเหรียญ
  let remainingCash = cash; // 1267

  // เช็คแบงค์
  for (let banknote of banknotes) {
    const count = Math.floor(remainingCash / banknote);
    if (count > 0) {
      remainingCash = remainingCash - count * banknote; // ตัดจำนวนเงินที่คำนวณแล้วในลูปแต่ละรอบ
      console.log(`ธนบัตร ${banknote} จำนวน ${count} ใบ`);
    }
  }

  // เช็คเหรียญ
  for (let coin of coins) {
    const count = Math.floor(remainingCash / coin);
    if (count > 0) {
      remainingCash = remainingCash - count * coin; // ตัดจำนวนเงินที่คำนวณแล้วในลูปแต่ละรอบ
      console.log(`เหรียญ ${coin} จำนวน ${count} เหรียญ`);
    }
  }
}

checkMoney(1267);

/* ข้อ 3. เขียน code โปรแกรม ตรวจสอบ ชุดเลขที่ได้รับเข้ามาว่า ต่อเนื่องกันหรือไม่ ด้วย ภาษาอะไรก็ได้
   ตัวอย่าง : input 1 2 3 4 5      => output true
                  input 7 6 5 4 3      => output true
                  input 1 3 4 5 6      => output false  */

function checkSequence(numberArr) {
  for (let i = 1; i < numberArr.length; i++) {
    if (
      numberArr[i] !== numberArr[i - 1] + 1 &&
      numberArr[i] !== numberArr[i - 1] - 1
    ) {
      return false;
    }
  }

  return true;
}

console.log(checkSequence([1, 2, 3, 4, 5]));
console.log(checkSequence([5, 4, 3, 2, 1]));
console.log(checkSequence([1, 5, 3, 9, 10]));
console.log(checkSequence([10, 6, 4, 2, 1]));

/* ข้อ 4. เขียน code โปรแกรม ตรวจสอบเครื่องหมาย (){}[] ว่ามีการใช้ถูกหรือไม่ ด้วย ภาษาอะไรก็ได้
   ตัวอย่าง : input {}()      => output true
                  input {()}      => output true
                  input {(})     => output false
                  input {}(       => output false */

function checkMark(mark) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const bracketPairs = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < mark.length; i++) {
    const char = mark[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();

      if (bracketPairs[char] !== lastOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkMark("(){}[]"));
console.log(checkMark("{(})"));
console.log(checkMark("{}("));
console.log(checkMark("(}"));
