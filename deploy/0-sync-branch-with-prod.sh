startPath="$PWD"
scriptPath="$(dirname "${BASH_SOURCE[0]}")"
relWorkChange="/../"
workPath="$scriptPath$relWorkChange"

cd $workPath

git fetch upstream 
git checkout develop
git merge upstream/develop

cd $startPath