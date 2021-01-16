
beforeAll(function(){
    billAmtInput.value = 55;
    tipAmtInput.value = 5;
    submitPaymentInfo();
    const theTr = document.querySelector("#payment1")
    appendTd(theTr, 20)
    billAmtInput.value = 55;
    tipAmtInput.value = 5;
    submitPaymentInfo();

})
it('should sum type of bill passed to the function', function(){
    // accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
    expect(sumPaymentTotal("billAmt")).toEqual(110)

})

it('should calculate the tip percentage using the bill and tip amount', function(){
    expect(calculateTipPercent(55, 5)).toEqual(9);
})

it('should create a td, and append it to the tr with value passed', function(){
    const theTr = document.querySelector("#payment1")

    expect(theTr.children[theTr.childElementCount - 1].innerText).toEqual("20")
})

afterAll(function(){
    const sumTable = document.querySelector("#summaryTable tbody tr");
    const payTable = document.querySelector("#paymentTable tbody");

    sumTable.innerText = "";
    payTable.innerText = "";
})