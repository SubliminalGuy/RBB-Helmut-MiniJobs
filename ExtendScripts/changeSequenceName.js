var anzahlSequenzen = app.project.sequences.numSequences


var partikelArray = []


function changeSeqNames() {
 for (i=0; i < anzahlSequenzen; i++) {
seqName = app.project.sequences[i].name
    partikelArray = seqName.split(" ")
    
   var xIndex = myIndexOf(partikelArray, ("xxxx_xx_xx"))
   
if (xIndex > -1) {
   partikelArray[xIndex] = "DS-Prod-211208_08-Dez"
}
    seqName = partikelArray.join(" ")
    alert(seqName)
app.project.sequences[i].name = seqName
}
return seqName
}




function myIndexOf(array, x){
	var n=-1, N=array.length;
	while (++n<N && array[n]!==x);
	return n<N ? n : -1;
	};

changeSeqNames()




