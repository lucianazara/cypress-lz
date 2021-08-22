// CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop
//  -Tarjeta.Visa 
// Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar 
// (https://tienda.movistar.com.ar), luego ingresar al tercer equipo de la lista inicial
//  que se obtenga y verificar que NO exista el método de pago de 60 cuotas para el banco Credicoop
//   con Tarjeta VISA. 
// Resultado esperado: 
// - Que se pueda ingresar a la página indicada 
// - Que el equipo seleccionado sea el tercero de la lista 
// - Que no exista un medio de pago con 60 cuotas para el banco Credicoop con tarjeta VISA 

describe('Pruebas', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
        cy.url().should('include', 'tienda.movistar.com.ar');
        cy.fixture('financiacion').then((financiacion)=>{
        cy.get(financiacion.grillaProductos);
        cy.get(financiacion.tercerProducto).eq(2).click();
        cy.get(financiacion.opcionesFinanciacion).click({ multiple: true });
        cy.contains('Financiación con tarjeta').should("be.visible");
        cy.get(financiacion.seleccionBanco).select('Credicoop');
        cy.get(financiacion.seleccionTarjeta).select('Visa');
        cy.get(financiacion.grillaCuotas).eq(-1).should('not.contain', '60');
        

          
          })
  })

        })

      
       
        
           



      
       
    
