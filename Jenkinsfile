pipeline {
    agent none
    environment {
        NEXUS_VERSION = "nexus3"
        NEXUS_PROTOCOL = "http"
        NEXUS_URL = "localhost:8081"
        NEXUS_DOCKER_URL = "http://127.0.0.1:8183"
        NEXUS_REPOSITORY = "repo-example-Snapshot"
        NEXUS_CREDENTIAL_ID = "nexus-credentials"
    }
    stages {
        stage("Build and run tests") {
            agent {
                docker {
                    image 'node:16.14-alpine'
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }

        /* stage("SonarQube analysis") { 
            steps {
                withSonarQubeEnv(installationName: 'sq1') {
                    sh 'mvn -X clean install sonar:sonar' 
                }
            }
        } */

        // stage("Publish to Nexus Repository Manager") {
        //     agent any
        //     steps {
        //         script {
        //             pom = readMavenPom file: "pom.xml";
        //             filesByGlob = findFiles(glob: "target/*.${pom.packaging}");
        //             echo "${filesByGlob[0].name} ${filesByGlob[0].path} ${filesByGlob[0].directory} ${filesByGlob[0].length} ${filesByGlob[0].lastModified}"
        //             artifactPath = filesByGlob[0].path;
        //             artifactExists = fileExists artifactPath;
        //             if(artifactExists) {
        //                 echo "*** File: ${artifactPath}, group: ${pom.groupId}, packaging: ${pom.packaging}, version ${pom.version}";
        //                 nexusArtifactUploader(
        //                     nexusVersion: NEXUS_VERSION,
        //                     protocol: NEXUS_PROTOCOL,
        //                     nexusUrl: NEXUS_URL,
        //                     groupId: pom.groupId,
        //                     version: pom.version,
        //                     repository: NEXUS_REPOSITORY,
        //                     credentialsId: NEXUS_CREDENTIAL_ID,
        //                     artifacts: [
        //                         [artifactId: pom.artifactId,
        //                         classifier: '',
        //                         file: artifactPath,
        //                         type: pom.packaging],
        //                         [artifactId: pom.artifactId,
        //                         classifier: '',
        //                         file: "pom.xml",
        //                         type: "pom"]
        //                     ]
        //                 );
        //             } else {
        //                 error "*** File: ${artifactPath}, could not be found";
        //             }
        //         }
        //     }
        // }
        // stage("Build docker image") {
        //     agent any
        //     steps {
        //         script {
        //             docker.withRegistry(NEXUS_DOCKER_URL, NEXUS_CREDENTIAL_ID) {
        //                 docker.build('spring-web-training').push('latest')
        //             }
        //         }
        //     }
        // }
        post {
            changed {
                emailext(attachLog: true, body: 'Test', subject: 'Build OK/KO', to: 'fkakchantichi@gmail.com')
            }
        }
    }
}
