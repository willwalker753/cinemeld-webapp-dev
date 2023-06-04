startPath="$PWD"
scriptPath="$(dirname "${BASH_SOURCE[0]}")"
relWorkChange="/../"
workPath="$scriptPath$relWorkChange"

cd $workPath

git push upstream

cd $startPath