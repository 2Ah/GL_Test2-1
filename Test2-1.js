//Вам дана строка, содержащая пробелы. Найдите, сколько в ней слов (слово – это последовательность непробельных символов, слова разделены одним пробелом, первый и последний символ строки – не пробел).
//ВХОДНЫЕ ДАННЫЕ: На вход, в качестве параметра, подается файл strings.txt, внутри которого несколько строк.
//ВЫХОДНЫЕ ДАННЫЕ: Необходимо вывести количество слов в первой из введенных строк.

var objArgs= WScript.Arguments;
if (objArgs.Count()==0)  {
	WScript.Echo("Аргументы не найдены.");
	WScript.Quit();
} 
var pathTxt= objArgs(0); 
var fso= WScript.CreateObject("Scripting.FileSystemObject"); 
var ex;
try { 
	var strFile= fso.OpenTextFile(pathTxt, 1);
	var str= strFile.ReadLine();
}
catch(ex) {
	WScript.Echo("Ошибка!\n\nОписание:\n" + ex.description);
	WScript.Quit(); 
}
finally { strFile.Close(); }

var reg=/[^\s]+/g;
var wordsCount= str.match(reg); 
if ( (str.length==0) || (wordsCount==null) ) WScript.Echo("В строке нет слов."); 
else  WScript.Echo("Строка:\n"+ str +"\n\nСлов в строке: "+ (wordsCount.length) ); 
