


describe('iTesting demo', () => {

    it('可视化测试', () => {
        cy.visit('https://www.baidu.com')
        cy.get('#kw').type('iTesting')
        cy.get('#su').click()
        // 传统断言
        cy.get('.result.c-container.new-pmd').eq(0).then(ele => {
            expect(ele.text(), '验证第一个结果的text里包括iTesting').to.includes('iTesting软件测试知识分享')
        })
        //可视化“断言”
        //可视化能检查的更多。
        // cy.get('.result.c-container.new-pmd').eq(0).toMatchImageSnapshot()
    })


})