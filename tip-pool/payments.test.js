describe('testing for payments.js with teardown', function() {
    beforeEach(function() {
    billAmtInput.value = 55;
    tipAmtInput.value = 5;
    createCurPayment();

})

it('should add curPayments object to allPayments', function(){
    submitPaymentInfo()
    expect(allPayments["payment1"]).toEqual({billAmt: "55", tipAmt: "5", tipPercent: 9})
})

it('should return an object with payment information', function(){
    expect(createCurPayment()).toEqual({billAmt: "55", tipAmt: "5", tipPercent: 9})
})

it('should not submitPaymentInfo() with empty inputs', function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo();
    expect(allPayments["payment1"]).toEqual(undefined)

})

it('should append a table row', function(){

    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment) 
    let trCount = document.querySelectorAll('#paymentTable tbody tr');
    expect(trCount.length).toEqual(1)

})
afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {}
    let tr = document.querySelectorAll('#paymentTable tbody tr');
    tr.forEach(element => {
        element.remove()
    });
})
})