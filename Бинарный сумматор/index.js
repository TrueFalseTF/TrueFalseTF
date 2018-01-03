		var term1 = [];
		var term2 = [];
		var sum = [];
		var stop = false;
		var sumNumberOfCategories = 0;
		var indexCategory = 0;

		function reduction(term) {			
			var Term = term;
			var Terms = [];
			var termNumberOfCategories = 0;
			var indexRemainder = Term;

			if(Term == 0 || Term === undefined) {
				Terms = [0];
				termNumberOfCategories++;
			}

			while(indexRemainder >= 1) {
				indexRemainder /= 10;
				termNumberOfCategories++;
			}

			if(termNumberOfCategories > sumNumberOfCategories) {
				sumNumberOfCategories = termNumberOfCategories
			}

			while(indexCategory < termNumberOfCategories) {
				Terms[indexCategory] = Term % 10;
				Term = Math.floor(Term / 10);
				indexCategory++;
			}
			indexCategory = 0;


			if(indexCategory == Terms.length) {
					document.getElementById("answer_results").innerHTML = "Введите корректные данные";
					stop = true;
			}

			while(indexCategory < Terms.length) {				 
				if(Terms[indexCategory] != 0 && Terms[indexCategory] != 1) {
					document.getElementById("answer_results").innerHTML = "Введите корректные данные";
					stop = true;
					break;					
				}
				indexCategory++;
			}
			indexCategory = 0;

			if(stop != true) {
				return Terms;
			}
		}

		function entry() {
			term1 = [];
			term2 = [];
			sum = [];
			stop = false;
			sumNumberOfCategories = 0;
			indexCategory = 0;

			var Term1 = +document.getElementById("s1").value;
			var Term2 = +document.getElementById("s2").value;

			term1 = reduction(Term1);
			term2 = reduction(Term2);
		}		

		function calculation() {
			if(stop === true) {				
				return;
			}

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

			document.getElementById("answer_results").innerHTML = sum.reverse().join("");
						
		}


		
			 
				
		