const puntoMedio = (superior, inferior, objetivo, error, it = 0) => {
   let sup = superior;
   let inf = inferior;
   let probable = (superior + inferior) / 2;

   it++;

   if(((probable - error) < objetivo) && (objetivo < (probable + error))){
       console.log('Iteraciones: ' + it);
       return 0;
   }else{
       if((superior - objetivo) > (objetivo - inferior)){
           sup = probable;
       }else{
           inf = probable;
       }

       puntoMedio(sup, inf, objetivo, error, it); 
   }
}