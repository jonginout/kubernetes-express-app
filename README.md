docker login -u jonginout
docker build -t jonginout/hello-world-express -f Dockerfile .
docker push jonginout/hello-world-express
# docker run -dit -p 8080:8080 jonginout/hello-world-express