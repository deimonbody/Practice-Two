
export default function getPolynomial(...coefficients) {
    let coefArr = [...coefficients],
        result = "",
        i = coefArr.length - 1 ;
    
    if(!coefArr.length) return "0";
    if (coefArr.every((elem)=>elem === 0)) return "0";       

    coefArr.map((num)=>{
        if(num != 0){
            if(num > 0  && result.length>0) result+=`+`;
            if(i == 1 )  (num == 1) ? result +="x" :  result+=`${num}*x`;
            else if(i == 0) result +=`${num}`;
            else if(num == 1) result+=`x^${i}`;
            else  result+=`${num}*x^${i}` ;
            i--
        }else i--
        return num
    })
    return result;
}
