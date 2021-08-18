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

describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Ingreso correcto a la pagina de Tienda Movistar', ()=>{
        cy.url().should('include', 'tienda.movistar.com.ar');

    })

// it('Seleccion del tercer equipo de la lista', ()=>{    
//     cy.fixture('searchResult').then((searchResult)=>{
//         cy.get(searchResult.grillaProductos);
//         cy.get(searchResult.productoLista);
//         cy.get(searchResult.productoLista).click({ multiple: true });
        
//     })

// })
    
})

// it('No existe un medio de pago con 60 cuotas para el banco Creedicop con tarjeta Visa', ()=>{   
//         cy.fixture('financiacion').then((financiacion)=>{
//             cy.get(financiacion.opcionesFinanciacion).click({ multiple: true });
//             cy.get(financiacion.selectorBancos);
            

          
       
       
//     })
// })
