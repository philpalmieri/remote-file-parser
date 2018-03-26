# remote-file-parser
Read and parse remote files

# Staging Environment:
* URL: `reader.pcommstaging.com`
* Testing:
  * `curl -H "Content-Type: application/json" -X POST -d '{"file":"https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls"}' reader.pcommstaging.com/parse`

# Local Dev Setup:
* From root directory:
  * `npm install` (Installs node dependencies)
  * `docker-compose up --build` (Runs docker images)
* Testing:
  * `curl -H "Content-Type: application/json" -X POST -d '{"file":"https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls"}' localhost:8081/parse`
