function calculate_area(radius){
    return 3.14*radius*radius

}
function calculate_perimeter(radius){
    return 2*3.14*radius
}
function voting_age(age){
    if(age>18){
        console.log("eligible for vote")
    }
    else{
        console.log("not eligible")
    }
}


module.exports={calculate_area, calculate_perimeter, voting_age}
