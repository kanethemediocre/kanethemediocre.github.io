class CGMod{
	constructor(num,operator,effect,delay){
		this.delay = 10;
		this.effect = effect
		this.num = num;
		}
	operate(n){
		if (operator == "+"){
			return n+this.num;
			}
		else if (operator == "-"){
			//if (n>this.num){//- fails if num is below 0.
				return n-this.num;
			//	}
			//else{ return 0 }
			}
		else if (operator == "*"){
			return n*this.num;
			}
		else if (operator == "^"){
			return n**this.num;
			}
		else if (operator == "/"){
			var exact = n/this.num;
			if (exact==Math.floor(exact)){//Divisor fails if not an integer
				return exact;
				}
			else { return 0; }
			}
		}
	}