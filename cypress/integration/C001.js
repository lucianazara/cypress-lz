// CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52 
// Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tienda.movistar.com.ar), 
// luego realizar la búsqueda del equipo A52 e ingresar al mismo y verificar que se pueda pagar en hasta 12 cuotas
// Resultado esperado:
// - Que se pueda ingresar a la página indicada
// - Que el equipo seleccionado sea el A52
// - Que se indique en el equipo que puede ser pagado en hasta 12 cuotas



describe('Pruebas en la Tienda Movistar', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })


    it('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52', ()=>{
        cy.url().should('include', 'tienda.movistar.com.ar');
        cy.search('A52')
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.buscador).click();     
        cy.get(searchResult.searchbox).type('{enter}');
        cy.get(searchResult.celularA52).should('contain', 'A52');
        cy.get(searchResult.botonComprar).contains('Comprar');
        cy.get(searchResult.doceCuotas).contains('12 cuotas');     
          
             
    })
})

})









