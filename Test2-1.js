//��� ���� ������, ���������� �������. �������, ������� � ��� ���� (����� � ��� ������������������ ������������ ��������, ����� ��������� ����� ��������, ������ � ��������� ������ ������ � �� ������).
//������� ������: �� ����, � �������� ���������, �������� ���� strings.txt, ������ �������� ��������� �����.
//�������� ������: ���������� ������� ���������� ���� � ������ �� ��������� �����.

var objArgs= WScript.Arguments;
if (objArgs.Count()==0)  {
	WScript.Echo("��������� �� �������.");
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
	WScript.Echo("������!\n\n��������:\n" + ex.description);
	WScript.Quit(); 
}
finally { strFile.Close(); }

var reg=/[^\s]+/g;
var wordsCount= str.match(reg); 
if ( (str.length==0) || (wordsCount==null) ) WScript.Echo("� ������ ��� ����."); 
else  WScript.Echo("������:\n"+ str +"\n\n���� � ������: "+ (wordsCount.length) ); 
