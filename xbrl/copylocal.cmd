@echo off
xcopy  %USERPROFILE%\git\xbrl\xbrl\WebContent\* D:\apps\apache-tomcat-9.0.14\webapps\xbrl /E/Y
pause