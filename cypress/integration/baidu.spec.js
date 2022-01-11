
describe('百度测试',function(){
    beforeEach(()=>{
        cy.visit("https://baidu.com")
    })
    it("百度输入的测试",function(){
        // 定位到输入框，输入 testfan,进行断言
        cy.get("#kw").type("testfan")
        .should('have.value','testfan')
        // 输入框进行清空，进行断言
        .clear().should('have.value','')

    })
})