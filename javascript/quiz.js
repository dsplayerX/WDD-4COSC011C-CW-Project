/*Quiz javascript - Diman*/

function mark(){
	var a=0;
	var qt1=document.qz.q1.value;
	var qt2=document.qz.q2.value;
	var qt3=document.qz.q3.value;
	var qt4=document.qz.q4.value;
	var qt5=document.qz.q5.value;
	var qt6=document.qz.q6.value;
	var qt7=document.qz.q7.value;
	var qt8=document.qz.q8.value;
	var qt9=document.qz.q9.value;
	var qt10=document.qz.q10.value;
    var out=document.getElementById('out');
	
	if (qt1=="lib3"){a= a+2}
    else{a=a-1}
	if (qt2=="lib23"){a= a+2}
    else{a=a-1}
	if (qt3=="lib34"){a= a+2}
    else{a=a-1}
	if (qt4=="lib44"){a= a+2}
    else{a=a-1}
	if (qt5=="lib54"){a= a+2}
    else{a=a-1}
	if (qt6=="lib62"){a= a+2}
    else{a=a-1}
	if (qt7=="lib74"){a= a+2}
    else{a=a-1}
	if (qt8=="lib83"){a= a+2}
    else{a=a-1}
	if (qt9=="lib93"){a= a+2}
    else{a=a-1}
	if (qt10=="lib101"){a= a+2}
    else{a=a-1}

    out.textContent= `${a}`;
}