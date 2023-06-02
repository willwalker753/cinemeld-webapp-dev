startPath="$PWD"
scriptPath="$(dirname "${BASH_SOURCE[0]}")"
relWorkChange="/../"
workPath="$scriptPath$relWorkChange"

cd $workPath

git remote add upstream https://github.com/willwalker753/cinemeld-webapp.git

cd $startPath