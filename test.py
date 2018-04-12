import urllib.request
import json

try:
  response = urllib.request.urlopen('http://localhost:8080/env')
  envJson = response.read()
  envObj = json.loads(envJson)

  for item in envObj.items():
    print('%25s\t\t%s'%(item[0], item[1]))


except urllib.error.URLError:
  print('Error: could not connect to http://localhost:8080')
except:
  print('Undefined error')
