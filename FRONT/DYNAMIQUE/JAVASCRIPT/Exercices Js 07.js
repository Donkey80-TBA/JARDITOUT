Function check () {

    let nombre : Window.prompt ( " Choissisez un nombre ") ;
    If ( nombre % 2 = 0 )
    alert( nombre pair )
    else 
    alert  (nombre impair) 
}


let age = prompt ( "Quel age avez-vous ? "( en annees ) ) ;
If ( age => 18 ) {

    alert ( " Vous etes majeur " : "" + majeur ) ;
}
else {
    alert( " Vous etes majeur " + mineur)

}
}




const nb1 = Number ( prompt ( " Premier nombre ") ) ;
const nb2 = Number ( prompt ( " deuxieme nombre ") ) ;
let op = prompt ( ' operateur ' ) ;
if ( nb2 == 0 && op == ' / ' ) {
    alert ( ' diviser par 0 ') ;
    
} 
else {
    switch ( op ) {
        case ' / ' : 
          alert ( nb1 / nb2 ) ;
        break;
        case ' * ' :
            alert ( nb1 * nb2 ) ;
        break ;
        case ' - ' :
            alert ( nb1 - nb2 ) ;
        break ;
        case ' + ' : 
        alert( nb1 + nb2 ) ;
        break ;
        default ;
        alert ( ' pov type ' ) ;
    }   
    }
}