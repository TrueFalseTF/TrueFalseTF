		var term1 = [];
		var term2 = [];
		var sum = [];
		
			/*if(NumberOfCategories <= 0 || isNaN(NumberOfCategories)) 		
				
					term1[indexCategory] = Number(term1[indexCategory]);
					if ((typeof term1[indexCategory] == "number") && (term1[indexCategory] == 0 || term1[indexCategory] == 1)) {
						indexCategory++;						
					} else {
						alert ("Данные вне формата")
					}
				}*/



		var sumNumberOfCategories = 0;

		

		var indexCategory = 0;
		
		while(indexCategory < sumNumberOfCategories && stop != 1){

			var Term1 = term1[indexCategory];
			var Term2 = term2[indexCategory];
			var Sum = sum[indexCategory];
			if(Term1 === undefined) {
				Term1 = 0;
			}
			if(Term2 === undefined) {
				Term2 = 0;
			}
			if(Sum === undefined) {
				Sum = 0;
			}
			var sumCategories = Term1 + Term2 + Sum;

			if(sumCategories == 0) {
				sum[indexCategory] = 0;
				indexCategory++;
			}
			if(sumCategories == 1) {
				sum[indexCategory] = 1;
				indexCategory++;
			}
			if(sumCategories == 2) {
				sum[indexCategory] = 0;
				sum[indexCategory + 1] = 1;
				indexCategory++;
			}
			if(sumCategories == 3) {
				sum[indexCategory] = 1;
				sum[indexCategory + 1] = 1;
				indexCategory++;
			}
		}


		if(stop != 1) {
			alert("Сумма: " + sum.reverse().join("") + ".");
		}			
		