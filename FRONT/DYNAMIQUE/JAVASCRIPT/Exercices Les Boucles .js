var firstname = '';
var count = 1;
do {
    firstname = window.prompt('Saisissez le prénom N° ' + count + '\n ou click sur Annuler pour arréter la saisie.');

 if (firstname != null && firstname != '') {
        
    console.log('Prénom N° ' + count + ': ' + firstname);
        
    count++;
    
    }

} 

while (firstname != null && firstname != '');        

}




var nombre =   prompt( " Entrez un nombre " ) );
    let stockage = 0 ;

    for ( test = 1 ; test < nombre ; test ++ ) ;

{ 
        stockage = stockage + " , "  + test 

}

alert ( stockage ) ;



let nbr = 1 ;
let moyenne = 0 ;
let sum = 0 ;
let nb_notes  = 0 ;

while ( nbr != 0 ) { 
    nbr = prompt ( " Saissisez un nombre " ) ;
    sum += nbr ;
    nb_notes ++ ;
    
   
    moyenne = sum / (nb_notes -1);

}

        alert( "Somme : " + sum + ", Moyenne : " + moyenne );





       let X = parseInt(window.prompt('Saisissez un nombre :'));
       let = parseInt(window.prompt('Saisissez le nombre de multiple :'));
        let = total = 0;
       
        for (i = 0; i <= N; i++) {  
            total = i * X;
           }
           alert(X + ' x ' + (i - 1) + ' = ' + total);


           