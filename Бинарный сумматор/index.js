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

		function reduction(term) {
			//преобразовать в массив
			var Term = term;
			var Terms = [];
			var termNumberOfCategories = 0;
			var indexRemainder = Term;
			while(indexRemainder > 0) {
				indexRemainder /= 10;
				termNumberOfCategories++;
			}

			if(termNumbersOfCategories > sumNumberOfCategories) {
				sumNumberOfCategories = termNumberOfCategories
			}

			while(indexCategory <= termNumberOfCategories){
				Terms[indexCaterory] = Term % 10;
				Term /= 10;
				indexCategory++;
			}


			indexCategory = 0; 
			
			while(indexCategory < term.langth) {				 
				if(term[indexCategory] != 0 && term[indexCategory] != 1) {
					document.getElementById("answer_results").inerHtml = "Введите корректные данные";
				}
				indexCategory++;
			}
			indexCategory = 0;

			Terms.reverse();

		}

		function entry() {
			var Term1 += document.getElementById("s1").value;
			var Term2 += document.getElementById("s2").value;

			term1 = reduction(Term1);
			term2 = reduction(Term2);
		}		

		function calculation() {			
			while(indexCategory < sumNumberOfCategories) {

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
			document.getelementById("answer_results").inerHtml = sum.reverse().join("");
		}


		
			 
				
		