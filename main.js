document.write("Check the day is weekend or not using date method"+"<br>");
document.write("---------------------------------------------"+"<br>");

var day=new Date();
b=day.getDay();

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
document.write("Day of today :"+days[b]+"<br>");

if((b==0) || (b==6))
{
    document.write(days[b]+" is weekend"+"<br>");
}
else{
    document.write(days[b]+" is not weekend"+"<br>");
}
